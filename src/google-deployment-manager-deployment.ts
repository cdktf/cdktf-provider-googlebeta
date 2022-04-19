// https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDeploymentManagerDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the policy to use for creating new resources. Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#create_policy GoogleDeploymentManagerDeployment#create_policy}
  */
  readonly createPolicy?: string;
  /**
  * Set the policy to use for deleting new resources on update/delete.
Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#delete_policy GoogleDeploymentManagerDeployment#delete_policy}
  */
  readonly deletePolicy?: string;
  /**
  * Optional user-provided description of deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#description GoogleDeploymentManagerDeployment#description}
  */
  readonly description?: string;
  /**
  * Unique name for the deployment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}
  */
  readonly name: string;
  /**
  * If set to true, a deployment is created with "shell" resources
that are not actually instantiated. This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
 ~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#preview GoogleDeploymentManagerDeployment#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}
  */
  readonly project?: string;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#labels GoogleDeploymentManagerDeployment#labels}
  */
  readonly labels?: GoogleDeploymentManagerDeploymentLabels[] | cdktf.IResolvable;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#target GoogleDeploymentManagerDeployment#target}
  */
  readonly target: GoogleDeploymentManagerDeploymentTarget;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#timeouts GoogleDeploymentManagerDeployment#timeouts}
  */
  readonly timeouts?: GoogleDeploymentManagerDeploymentTimeouts;
}
export interface GoogleDeploymentManagerDeploymentLabels {
  /**
  * Key for label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#key GoogleDeploymentManagerDeployment#key}
  */
  readonly key?: string;
  /**
  * Value of label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#value GoogleDeploymentManagerDeployment#value}
  */
  readonly value?: string;
}

export function googleDeploymentManagerDeploymentLabelsToTerraform(struct?: GoogleDeploymentManagerDeploymentLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface GoogleDeploymentManagerDeploymentTargetConfig {
  /**
  * The full YAML contents of your configuration file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}
  */
  readonly content: string;
}

export function googleDeploymentManagerDeploymentTargetConfigToTerraform(struct?: GoogleDeploymentManagerDeploymentTargetConfigOutputReference | GoogleDeploymentManagerDeploymentTargetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}

export class GoogleDeploymentManagerDeploymentTargetConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeploymentManagerDeploymentTargetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeploymentManagerDeploymentTargetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}
export interface GoogleDeploymentManagerDeploymentTargetImports {
  /**
  * The full contents of the template that you want to import.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}
  */
  readonly content?: string;
  /**
  * The name of the template to import, as declared in the YAML
configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}
  */
  readonly name?: string;
}

export function googleDeploymentManagerDeploymentTargetImportsToTerraform(struct?: GoogleDeploymentManagerDeploymentTargetImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface GoogleDeploymentManagerDeploymentTarget {
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#config GoogleDeploymentManagerDeployment#config}
  */
  readonly config: GoogleDeploymentManagerDeploymentTargetConfig;
  /**
  * imports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#imports GoogleDeploymentManagerDeployment#imports}
  */
  readonly imports?: GoogleDeploymentManagerDeploymentTargetImports[] | cdktf.IResolvable;
}

export function googleDeploymentManagerDeploymentTargetToTerraform(struct?: GoogleDeploymentManagerDeploymentTargetOutputReference | GoogleDeploymentManagerDeploymentTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: googleDeploymentManagerDeploymentTargetConfigToTerraform(struct!.config),
    imports: cdktf.listMapper(googleDeploymentManagerDeploymentTargetImportsToTerraform)(struct!.imports),
  }
}

export class GoogleDeploymentManagerDeploymentTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeploymentManagerDeploymentTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._imports !== undefined) {
      hasAnyValues = true;
      internalValueResult.imports = this._imports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeploymentManagerDeploymentTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config.internalValue = undefined;
      this._imports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config.internalValue = value.config;
      this._imports = value.imports;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleDeploymentManagerDeploymentTargetConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleDeploymentManagerDeploymentTargetConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // imports - computed: false, optional: true, required: false
  private _imports?: GoogleDeploymentManagerDeploymentTargetImports[] | cdktf.IResolvable; 
  public get imports() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('imports');
  }
  public set imports(value: GoogleDeploymentManagerDeploymentTargetImports[] | cdktf.IResolvable) {
    this._imports = value;
  }
  public resetImports() {
    this._imports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importsInput() {
    return this._imports;
  }
}
export interface GoogleDeploymentManagerDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#create GoogleDeploymentManagerDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#delete GoogleDeploymentManagerDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment#update GoogleDeploymentManagerDeployment#update}
  */
  readonly update?: string;
}

export function googleDeploymentManagerDeploymentTimeoutsToTerraform(struct?: GoogleDeploymentManagerDeploymentTimeoutsOutputReference | GoogleDeploymentManagerDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GoogleDeploymentManagerDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeploymentManagerDeploymentTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeploymentManagerDeploymentTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment google_deployment_manager_deployment}
*/
export class GoogleDeploymentManagerDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_deployment_manager_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_deployment_manager_deployment google_deployment_manager_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDeploymentManagerDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDeploymentManagerDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_deployment_manager_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.18.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createPolicy = config.createPolicy;
    this._deletePolicy = config.deletePolicy;
    this._description = config.description;
    this._name = config.name;
    this._preview = config.preview;
    this._project = config.project;
    this._labels = config.labels;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_policy - computed: false, optional: true, required: false
  private _createPolicy?: string; 
  public get createPolicy() {
    return this.getStringAttribute('create_policy');
  }
  public set createPolicy(value: string) {
    this._createPolicy = value;
  }
  public resetCreatePolicy() {
    this._createPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPolicyInput() {
    return this._createPolicy;
  }

  // delete_policy - computed: false, optional: true, required: false
  private _deletePolicy?: string; 
  public get deletePolicy() {
    return this.getStringAttribute('delete_policy');
  }
  public set deletePolicy(value: string) {
    this._deletePolicy = value;
  }
  public resetDeletePolicy() {
    this._deletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyInput() {
    return this._deletePolicy;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean | cdktf.IResolvable; 
  public get preview() {
    return this.getBooleanAttribute('preview');
  }
  public set preview(value: boolean | cdktf.IResolvable) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: GoogleDeploymentManagerDeploymentLabels[] | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('labels')));
  }
  public set labels(value: GoogleDeploymentManagerDeploymentLabels[] | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // target - computed: false, optional: false, required: true
  private _target = new GoogleDeploymentManagerDeploymentTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: GoogleDeploymentManagerDeploymentTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDeploymentManagerDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDeploymentManagerDeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_policy: cdktf.stringToTerraform(this._createPolicy),
      delete_policy: cdktf.stringToTerraform(this._deletePolicy),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      preview: cdktf.booleanToTerraform(this._preview),
      project: cdktf.stringToTerraform(this._project),
      labels: cdktf.listMapper(googleDeploymentManagerDeploymentLabelsToTerraform)(this._labels),
      target: googleDeploymentManagerDeploymentTargetToTerraform(this._target.internalValue),
      timeouts: googleDeploymentManagerDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
