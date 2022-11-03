// https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleClouddeployDeliveryPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#annotations GoogleClouddeployDeliveryPipeline#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the `DeliveryPipeline`. Max length is 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#description GoogleClouddeployDeliveryPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#labels GoogleClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#location GoogleClouddeployDeliveryPipeline#location}
  */
  readonly location: string;
  /**
  * Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#name GoogleClouddeployDeliveryPipeline#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#project GoogleClouddeployDeliveryPipeline#project}
  */
  readonly project?: string;
  /**
  * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#suspended GoogleClouddeployDeliveryPipeline#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * serial_pipeline block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#serial_pipeline GoogleClouddeployDeliveryPipeline#serial_pipeline}
  */
  readonly serialPipeline?: GoogleClouddeployDeliveryPipelineSerialPipeline;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#timeouts GoogleClouddeployDeliveryPipeline#timeouts}
  */
  readonly timeouts?: GoogleClouddeployDeliveryPipelineTimeouts;
}
export interface GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition {
}

export function googleClouddeployDeliveryPipelineConditionPipelineReadyConditionToTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference {
    return new GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition {
}

export function googleClouddeployDeliveryPipelineConditionTargetsPresentConditionToTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // missing_targets - computed: true, optional: false, required: false
  public get missingTargets() {
    return this.getListAttribute('missing_targets');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference {
    return new GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineCondition {
}

export function googleClouddeployDeliveryPipelineConditionToTerraform(struct?: GoogleClouddeployDeliveryPipelineCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleClouddeployDeliveryPipelineConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_ready_condition - computed: true, optional: false, required: false
  private _pipelineReadyCondition = new GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList(this, "pipeline_ready_condition", false);
  public get pipelineReadyCondition() {
    return this._pipelineReadyCondition;
  }

  // targets_present_condition - computed: true, optional: false, required: false
  private _targetsPresentCondition = new GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList(this, "targets_present_condition", false);
  public get targetsPresentCondition() {
    return this._targetsPresentCondition;
  }
}

export class GoogleClouddeployDeliveryPipelineConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleClouddeployDeliveryPipelineConditionOutputReference {
    return new GoogleClouddeployDeliveryPipelineConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStages {
  /**
  * Skaffold profiles to use when rendering the manifest for this stage's `Target`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#profiles GoogleClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#target_id GoogleClouddeployDeliveryPipeline#target_id}
  */
  readonly targetId?: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    target_id: cdktf.stringToTerraform(struct!.targetId),
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profiles = undefined;
      this._targetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profiles = value.profiles;
      this._targetId = value.targetId;
    }
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStages[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipeline {
  /**
  * stages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#stages GoogleClouddeployDeliveryPipeline#stages}
  */
  readonly stages?: GoogleClouddeployDeliveryPipelineSerialPipelineStages[] | cdktf.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference | GoogleClouddeployDeliveryPipelineSerialPipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stages: cdktf.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesToTerraform, true)(struct!.stages),
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stages.internalValue = value.stages;
    }
  }

  // stages - computed: false, optional: true, required: false
  private _stages = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: GoogleClouddeployDeliveryPipelineSerialPipelineStages[] | cdktf.IResolvable) {
    this._stages.internalValue = value;
  }
  public resetStages() {
    this._stages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#create GoogleClouddeployDeliveryPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#delete GoogleClouddeployDeliveryPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline#update GoogleClouddeployDeliveryPipeline#update}
  */
  readonly update?: string;
}

export function googleClouddeployDeliveryPipelineTimeoutsToTerraform(struct?: GoogleClouddeployDeliveryPipelineTimeoutsOutputReference | GoogleClouddeployDeliveryPipelineTimeouts | cdktf.IResolvable): any {
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

export class GoogleClouddeployDeliveryPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleClouddeployDeliveryPipelineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}
*/
export class GoogleClouddeployDeliveryPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_delivery_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleClouddeployDeliveryPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleClouddeployDeliveryPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_delivery_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.42.1',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._suspended = config.suspended;
    this._serialPipeline.internalValue = config.serialPipeline;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new GoogleClouddeployDeliveryPipelineConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // serial_pipeline - computed: false, optional: true, required: false
  private _serialPipeline = new GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference(this, "serial_pipeline");
  public get serialPipeline() {
    return this._serialPipeline;
  }
  public putSerialPipeline(value: GoogleClouddeployDeliveryPipelineSerialPipeline) {
    this._serialPipeline.internalValue = value;
  }
  public resetSerialPipeline() {
    this._serialPipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPipelineInput() {
    return this._serialPipeline.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleClouddeployDeliveryPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleClouddeployDeliveryPipelineTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      suspended: cdktf.booleanToTerraform(this._suspended),
      serial_pipeline: googleClouddeployDeliveryPipelineSerialPipelineToTerraform(this._serialPipeline.internalValue),
      timeouts: googleClouddeployDeliveryPipelineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
