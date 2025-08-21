/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiRagEngineConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}
  */
  readonly project?: string;
  /**
  * The region of the RagEngineConfig. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#region GoogleVertexAiRagEngineConfig#region}
  */
  readonly region?: string;
  /**
  * rag_managed_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#rag_managed_db_config GoogleVertexAiRagEngineConfig#rag_managed_db_config}
  */
  readonly ragManagedDbConfig: GoogleVertexAiRagEngineConfigRagManagedDbConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#timeouts GoogleVertexAiRagEngineConfig#timeouts}
  */
  readonly timeouts?: GoogleVertexAiRagEngineConfigTimeouts;
}
export interface GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic {
}

export function googleVertexAiRagEngineConfigRagManagedDbConfigBasicToTerraform(struct?: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference | GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiRagEngineConfigRagManagedDbConfigBasicToHclTerraform(struct?: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference | GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled {
}

export function googleVertexAiRagEngineConfigRagManagedDbConfigScaledToTerraform(struct?: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference | GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiRagEngineConfigRagManagedDbConfigScaledToHclTerraform(struct?: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference | GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned {
}

export function googleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedToTerraform(struct?: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference | GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedToHclTerraform(struct?: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference | GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleVertexAiRagEngineConfigRagManagedDbConfig {
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#basic GoogleVertexAiRagEngineConfig#basic}
  */
  readonly basic?: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic;
  /**
  * scaled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#scaled GoogleVertexAiRagEngineConfig#scaled}
  */
  readonly scaled?: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled;
  /**
  * unprovisioned block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#unprovisioned GoogleVertexAiRagEngineConfig#unprovisioned}
  */
  readonly unprovisioned?: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;
}

export function googleVertexAiRagEngineConfigRagManagedDbConfigToTerraform(struct?: GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference | GoogleVertexAiRagEngineConfigRagManagedDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: googleVertexAiRagEngineConfigRagManagedDbConfigBasicToTerraform(struct!.basic),
    scaled: googleVertexAiRagEngineConfigRagManagedDbConfigScaledToTerraform(struct!.scaled),
    unprovisioned: googleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedToTerraform(struct!.unprovisioned),
  }
}


export function googleVertexAiRagEngineConfigRagManagedDbConfigToHclTerraform(struct?: GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference | GoogleVertexAiRagEngineConfigRagManagedDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: googleVertexAiRagEngineConfigRagManagedDbConfigBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicList",
    },
    scaled: {
      value: googleVertexAiRagEngineConfigRagManagedDbConfigScaledToHclTerraform(struct!.scaled),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledList",
    },
    unprovisioned: {
      value: googleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedToHclTerraform(struct!.unprovisioned),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiRagEngineConfigRagManagedDbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._scaled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaled = this._scaled?.internalValue;
    }
    if (this._unprovisioned?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unprovisioned = this._unprovisioned?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiRagEngineConfigRagManagedDbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basic.internalValue = undefined;
      this._scaled.internalValue = undefined;
      this._unprovisioned.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basic.internalValue = value.basic;
      this._scaled.internalValue = value.scaled;
      this._unprovisioned.internalValue = value.unprovisioned;
    }
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // scaled - computed: false, optional: true, required: false
  private _scaled = new GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(this, "scaled");
  public get scaled() {
    return this._scaled;
  }
  public putScaled(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled) {
    this._scaled.internalValue = value;
  }
  public resetScaled() {
    this._scaled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaledInput() {
    return this._scaled.internalValue;
  }

  // unprovisioned - computed: false, optional: true, required: false
  private _unprovisioned = new GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(this, "unprovisioned");
  public get unprovisioned() {
    return this._unprovisioned;
  }
  public putUnprovisioned(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned) {
    this._unprovisioned.internalValue = value;
  }
  public resetUnprovisioned() {
    this._unprovisioned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unprovisionedInput() {
    return this._unprovisioned.internalValue;
  }
}
export interface GoogleVertexAiRagEngineConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#create GoogleVertexAiRagEngineConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#delete GoogleVertexAiRagEngineConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#update GoogleVertexAiRagEngineConfig#update}
  */
  readonly update?: string;
}

export function googleVertexAiRagEngineConfigTimeoutsToTerraform(struct?: GoogleVertexAiRagEngineConfigTimeouts | cdktf.IResolvable): any {
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


export function googleVertexAiRagEngineConfigTimeoutsToHclTerraform(struct?: GoogleVertexAiRagEngineConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiRagEngineConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiRagEngineConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiRagEngineConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}
*/
export class GoogleVertexAiRagEngineConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_rag_engine_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiRagEngineConfig to import
  * @param importFromId The id of the existing GoogleVertexAiRagEngineConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiRagEngineConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_rag_engine_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiRagEngineConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiRagEngineConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_rag_engine_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.49.1',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._ragManagedDbConfig.internalValue = config.ragManagedDbConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rag_managed_db_config - computed: false, optional: false, required: true
  private _ragManagedDbConfig = new GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference(this, "rag_managed_db_config");
  public get ragManagedDbConfig() {
    return this._ragManagedDbConfig;
  }
  public putRagManagedDbConfig(value: GoogleVertexAiRagEngineConfigRagManagedDbConfig) {
    this._ragManagedDbConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ragManagedDbConfigInput() {
    return this._ragManagedDbConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiRagEngineConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiRagEngineConfigTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      rag_managed_db_config: googleVertexAiRagEngineConfigRagManagedDbConfigToTerraform(this._ragManagedDbConfig.internalValue),
      timeouts: googleVertexAiRagEngineConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rag_managed_db_config: {
        value: googleVertexAiRagEngineConfigRagManagedDbConfigToHclTerraform(this._ragManagedDbConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiRagEngineConfigRagManagedDbConfigList",
      },
      timeouts: {
        value: googleVertexAiRagEngineConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiRagEngineConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
