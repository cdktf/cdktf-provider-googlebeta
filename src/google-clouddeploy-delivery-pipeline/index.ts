/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleClouddeployDeliveryPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field `effective_annotations` for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#annotations GoogleClouddeployDeliveryPipeline#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the `DeliveryPipeline`. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#description GoogleClouddeployDeliveryPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#labels GoogleClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#location GoogleClouddeployDeliveryPipeline#location}
  */
  readonly location: string;
  /**
  * Name of the `DeliveryPipeline`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#name GoogleClouddeployDeliveryPipeline#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#project GoogleClouddeployDeliveryPipeline#project}
  */
  readonly project?: string;
  /**
  * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#suspended GoogleClouddeployDeliveryPipeline#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * serial_pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#serial_pipeline GoogleClouddeployDeliveryPipeline#serial_pipeline}
  */
  readonly serialPipeline?: GoogleClouddeployDeliveryPipelineSerialPipeline;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#timeouts GoogleClouddeployDeliveryPipeline#timeouts}
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


export function googleClouddeployDeliveryPipelineConditionPipelineReadyConditionToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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


export function googleClouddeployDeliveryPipelineConditionTargetsPresentConditionToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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
export interface GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition {
}

export function googleClouddeployDeliveryPipelineConditionTargetsTypeConditionToTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleClouddeployDeliveryPipelineConditionTargetsTypeConditionToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }
}

export class GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference {
    return new GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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


export function googleClouddeployDeliveryPipelineConditionToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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

  // targets_type_condition - computed: true, optional: false, required: false
  private _targetsTypeCondition = new GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList(this, "targets_type_condition", false);
  public get targetsTypeCondition() {
    return this._targetsTypeCondition;
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
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters {
  /**
  * Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#match_target_labels GoogleClouddeployDeliveryPipeline#match_target_labels}
  */
  readonly matchTargetLabels?: { [key: string]: string };
  /**
  * Required. Values are deploy parameters in key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#values GoogleClouddeployDeliveryPipeline#values}
  */
  readonly values: { [key: string]: string };
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_target_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchTargetLabels),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_target_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchTargetLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchTargetLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTargetLabels = this._matchTargetLabels;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchTargetLabels = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchTargetLabels = value.matchTargetLabels;
      this._values = value.values;
    }
  }

  // match_target_labels - computed: false, optional: true, required: false
  private _matchTargetLabels?: { [key: string]: string }; 
  public get matchTargetLabels() {
    return this.getStringMapAttribute('match_target_labels');
  }
  public set matchTargetLabels(value: { [key: string]: string }) {
    this._matchTargetLabels = value;
  }
  public resetMatchTargetLabels() {
    this._matchTargetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTargetLabelsInput() {
    return this._matchTargetLabels;
  }

  // values - computed: false, optional: false, required: true
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment {
  /**
  * Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#percentages GoogleClouddeployDeliveryPipeline#percentages}
  */
  readonly percentages: number[];
  /**
  * Whether to run verify tests after each percentage deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentages: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.percentages),
    verify: cdktf.booleanToTerraform(struct!.verify),
    postdeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToTerraform(struct!.postdeploy),
    predeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToTerraform(struct!.predeploy),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentages: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.percentages),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    verify: {
      value: cdktf.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    postdeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployList",
    },
    predeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentages !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentages = this._percentages;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentages = undefined;
      this._verify = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentages = value.percentages;
      this._verify = value.verify;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
    }
  }

  // percentages - computed: false, optional: false, required: true
  private _percentages?: number[]; 
  public get percentages() {
    return this.getNumberListAttribute('percentages');
  }
  public set percentages(value: number[]) {
    this._percentages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentagesInput() {
    return this._percentages;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs {
  /**
  * Required. Percentage deployment for the phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#percentage GoogleClouddeployDeliveryPipeline#percentage}
  */
  readonly percentage: number;
  /**
  * Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#phase_id GoogleClouddeployDeliveryPipeline#phase_id}
  */
  readonly phaseId: string;
  /**
  * Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#profiles GoogleClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * Whether to run verify tests after the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    phase_id: cdktf.stringToTerraform(struct!.phaseId),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    verify: cdktf.booleanToTerraform(struct!.verify),
    postdeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToTerraform(struct!.postdeploy),
    predeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToTerraform(struct!.predeploy),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phase_id: {
      value: cdktf.stringToHclTerraform(struct!.phaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify: {
      value: cdktf.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    postdeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployList",
    },
    predeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._phaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseId = this._phaseId;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
      this._phaseId = undefined;
      this._profiles = undefined;
      this._verify = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
      this._phaseId = value.phaseId;
      this._profiles = value.profiles;
      this._verify = value.verify;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // phase_id - computed: false, optional: false, required: true
  private _phaseId?: string; 
  public get phaseId() {
    return this.getStringAttribute('phase_id');
  }
  public set phaseId(value: string) {
    this._phaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseIdInput() {
    return this._phaseId;
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

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment {
  /**
  * phase_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#phase_configs GoogleClouddeployDeliveryPipeline#phase_configs}
  */
  readonly phaseConfigs: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktf.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phase_configs: cdktf.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToTerraform, true)(struct!.phaseConfigs),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phase_configs: {
      value: cdktf.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToHclTerraform, true)(struct!.phaseConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phaseConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseConfigs = this._phaseConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phaseConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phaseConfigs.internalValue = value.phaseConfigs;
    }
  }

  // phase_configs - computed: false, optional: false, required: true
  private _phaseConfigs = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList(this, "phase_configs", false);
  public get phaseConfigs() {
    return this._phaseConfigs;
  }
  public putPhaseConfigs(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktf.IResolvable) {
    this._phaseConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseConfigsInput() {
    return this._phaseConfigs.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun {
  /**
  * Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#automatic_traffic_control GoogleClouddeployDeliveryPipeline#automatic_traffic_control}
  */
  readonly automaticTrafficControl?: boolean | cdktf.IResolvable;
  /**
  * Optional. A list of tags that are added to the canary revision while the canary phase is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#canary_revision_tags GoogleClouddeployDeliveryPipeline#canary_revision_tags}
  */
  readonly canaryRevisionTags?: string[];
  /**
  * Optional. A list of tags that are added to the prior revision while the canary phase is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#prior_revision_tags GoogleClouddeployDeliveryPipeline#prior_revision_tags}
  */
  readonly priorRevisionTags?: string[];
  /**
  * Optional. A list of tags that are added to the final stable revision when the stable phase is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#stable_revision_tags GoogleClouddeployDeliveryPipeline#stable_revision_tags}
  */
  readonly stableRevisionTags?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_traffic_control: cdktf.booleanToTerraform(struct!.automaticTrafficControl),
    canary_revision_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.canaryRevisionTags),
    prior_revision_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.priorRevisionTags),
    stable_revision_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stableRevisionTags),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_traffic_control: {
      value: cdktf.booleanToHclTerraform(struct!.automaticTrafficControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    canary_revision_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.canaryRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prior_revision_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.priorRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stable_revision_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stableRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticTrafficControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticTrafficControl = this._automaticTrafficControl;
    }
    if (this._canaryRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryRevisionTags = this._canaryRevisionTags;
    }
    if (this._priorRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorRevisionTags = this._priorRevisionTags;
    }
    if (this._stableRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableRevisionTags = this._stableRevisionTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticTrafficControl = undefined;
      this._canaryRevisionTags = undefined;
      this._priorRevisionTags = undefined;
      this._stableRevisionTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticTrafficControl = value.automaticTrafficControl;
      this._canaryRevisionTags = value.canaryRevisionTags;
      this._priorRevisionTags = value.priorRevisionTags;
      this._stableRevisionTags = value.stableRevisionTags;
    }
  }

  // automatic_traffic_control - computed: false, optional: true, required: false
  private _automaticTrafficControl?: boolean | cdktf.IResolvable; 
  public get automaticTrafficControl() {
    return this.getBooleanAttribute('automatic_traffic_control');
  }
  public set automaticTrafficControl(value: boolean | cdktf.IResolvable) {
    this._automaticTrafficControl = value;
  }
  public resetAutomaticTrafficControl() {
    this._automaticTrafficControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticTrafficControlInput() {
    return this._automaticTrafficControl;
  }

  // canary_revision_tags - computed: false, optional: true, required: false
  private _canaryRevisionTags?: string[]; 
  public get canaryRevisionTags() {
    return this.getListAttribute('canary_revision_tags');
  }
  public set canaryRevisionTags(value: string[]) {
    this._canaryRevisionTags = value;
  }
  public resetCanaryRevisionTags() {
    this._canaryRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryRevisionTagsInput() {
    return this._canaryRevisionTags;
  }

  // prior_revision_tags - computed: false, optional: true, required: false
  private _priorRevisionTags?: string[]; 
  public get priorRevisionTags() {
    return this.getListAttribute('prior_revision_tags');
  }
  public set priorRevisionTags(value: string[]) {
    this._priorRevisionTags = value;
  }
  public resetPriorRevisionTags() {
    this._priorRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorRevisionTagsInput() {
    return this._priorRevisionTags;
  }

  // stable_revision_tags - computed: false, optional: true, required: false
  private _stableRevisionTags?: string[]; 
  public get stableRevisionTags() {
    return this.getListAttribute('stable_revision_tags');
  }
  public set stableRevisionTags(value: string[]) {
    this._stableRevisionTags = value;
  }
  public resetStableRevisionTags() {
    this._stableRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableRevisionTagsInput() {
    return this._stableRevisionTags;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations {
  /**
  * Required. The clusters where the Gateway API HTTPRoute resource will be deployed to. Valid entries include the associated entities IDs configured in the Target resource and "@self" to include the Target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#destination_ids GoogleClouddeployDeliveryPipeline#destination_ids}
  */
  readonly destinationIds: string[];
  /**
  * Optional. Whether to propagate the Kubernetes Service to the route destination clusters. The Service will always be deployed to the Target cluster even if the HTTPRoute is not. This option may be used to facilitiate successful DNS lookup in the route destination clusters. Can only be set to true if destinations are specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#propagate_service GoogleClouddeployDeliveryPipeline#propagate_service}
  */
  readonly propagateService?: boolean | cdktf.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationIds),
    propagate_service: cdktf.booleanToTerraform(struct!.propagateService),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    propagate_service: {
      value: cdktf.booleanToHclTerraform(struct!.propagateService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIds = this._destinationIds;
    }
    if (this._propagateService !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateService = this._propagateService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationIds = undefined;
      this._propagateService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationIds = value.destinationIds;
      this._propagateService = value.propagateService;
    }
  }

  // destination_ids - computed: false, optional: false, required: true
  private _destinationIds?: string[]; 
  public get destinationIds() {
    return this.getListAttribute('destination_ids');
  }
  public set destinationIds(value: string[]) {
    this._destinationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdsInput() {
    return this._destinationIds;
  }

  // propagate_service - computed: false, optional: true, required: false
  private _propagateService?: boolean | cdktf.IResolvable; 
  public get propagateService() {
    return this.getBooleanAttribute('propagate_service');
  }
  public set propagateService(value: boolean | cdktf.IResolvable) {
    this._propagateService = value;
  }
  public resetPropagateService() {
    this._propagateService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateServiceInput() {
    return this._propagateService;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh {
  /**
  * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#deployment GoogleClouddeployDeliveryPipeline#deployment}
  */
  readonly deployment: string;
  /**
  * Required. Name of the Gateway API HTTPRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#http_route GoogleClouddeployDeliveryPipeline#http_route}
  */
  readonly httpRoute: string;
  /**
  * Optional. The label to use when selecting Pods for the Deployment and Service resources. This label must already be present in both resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#pod_selector_label GoogleClouddeployDeliveryPipeline#pod_selector_label}
  */
  readonly podSelectorLabel?: string;
  /**
  * Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#route_update_wait_time GoogleClouddeployDeliveryPipeline#route_update_wait_time}
  */
  readonly routeUpdateWaitTime?: string;
  /**
  * Required. Name of the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#service GoogleClouddeployDeliveryPipeline#service}
  */
  readonly service: string;
  /**
  * Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#stable_cutback_duration GoogleClouddeployDeliveryPipeline#stable_cutback_duration}
  */
  readonly stableCutbackDuration?: string;
  /**
  * route_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#route_destinations GoogleClouddeployDeliveryPipeline#route_destinations}
  */
  readonly routeDestinations?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: cdktf.stringToTerraform(struct!.deployment),
    http_route: cdktf.stringToTerraform(struct!.httpRoute),
    pod_selector_label: cdktf.stringToTerraform(struct!.podSelectorLabel),
    route_update_wait_time: cdktf.stringToTerraform(struct!.routeUpdateWaitTime),
    service: cdktf.stringToTerraform(struct!.service),
    stable_cutback_duration: cdktf.stringToTerraform(struct!.stableCutbackDuration),
    route_destinations: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToTerraform(struct!.routeDestinations),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: cdktf.stringToHclTerraform(struct!.deployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_route: {
      value: cdktf.stringToHclTerraform(struct!.httpRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector_label: {
      value: cdktf.stringToHclTerraform(struct!.podSelectorLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_update_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.routeUpdateWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stable_cutback_duration: {
      value: cdktf.stringToHclTerraform(struct!.stableCutbackDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_destinations: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToHclTerraform(struct!.routeDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._httpRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute;
    }
    if (this._podSelectorLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelectorLabel = this._podSelectorLabel;
    }
    if (this._routeUpdateWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeUpdateWaitTime = this._routeUpdateWaitTime;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stableCutbackDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableCutbackDuration = this._stableCutbackDuration;
    }
    if (this._routeDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDestinations = this._routeDestinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployment = undefined;
      this._httpRoute = undefined;
      this._podSelectorLabel = undefined;
      this._routeUpdateWaitTime = undefined;
      this._service = undefined;
      this._stableCutbackDuration = undefined;
      this._routeDestinations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployment = value.deployment;
      this._httpRoute = value.httpRoute;
      this._podSelectorLabel = value.podSelectorLabel;
      this._routeUpdateWaitTime = value.routeUpdateWaitTime;
      this._service = value.service;
      this._stableCutbackDuration = value.stableCutbackDuration;
      this._routeDestinations.internalValue = value.routeDestinations;
    }
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // http_route - computed: false, optional: false, required: true
  private _httpRoute?: string; 
  public get httpRoute() {
    return this.getStringAttribute('http_route');
  }
  public set httpRoute(value: string) {
    this._httpRoute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute;
  }

  // pod_selector_label - computed: false, optional: true, required: false
  private _podSelectorLabel?: string; 
  public get podSelectorLabel() {
    return this.getStringAttribute('pod_selector_label');
  }
  public set podSelectorLabel(value: string) {
    this._podSelectorLabel = value;
  }
  public resetPodSelectorLabel() {
    this._podSelectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorLabelInput() {
    return this._podSelectorLabel;
  }

  // route_update_wait_time - computed: false, optional: true, required: false
  private _routeUpdateWaitTime?: string; 
  public get routeUpdateWaitTime() {
    return this.getStringAttribute('route_update_wait_time');
  }
  public set routeUpdateWaitTime(value: string) {
    this._routeUpdateWaitTime = value;
  }
  public resetRouteUpdateWaitTime() {
    this._routeUpdateWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeUpdateWaitTimeInput() {
    return this._routeUpdateWaitTime;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stable_cutback_duration - computed: false, optional: true, required: false
  private _stableCutbackDuration?: string; 
  public get stableCutbackDuration() {
    return this.getStringAttribute('stable_cutback_duration');
  }
  public set stableCutbackDuration(value: string) {
    this._stableCutbackDuration = value;
  }
  public resetStableCutbackDuration() {
    this._stableCutbackDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableCutbackDurationInput() {
    return this._stableCutbackDuration;
  }

  // route_destinations - computed: false, optional: true, required: false
  private _routeDestinations = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference(this, "route_destinations");
  public get routeDestinations() {
    return this._routeDestinations;
  }
  public putRouteDestinations(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations) {
    this._routeDestinations.internalValue = value;
  }
  public resetRouteDestinations() {
    this._routeDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDestinationsInput() {
    return this._routeDestinations.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
  /**
  * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#deployment GoogleClouddeployDeliveryPipeline#deployment}
  */
  readonly deployment: string;
  /**
  * Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#disable_pod_overprovisioning GoogleClouddeployDeliveryPipeline#disable_pod_overprovisioning}
  */
  readonly disablePodOverprovisioning?: boolean | cdktf.IResolvable;
  /**
  * Optional. The label to use when selecting Pods for the Deployment resource. This label must already be present in the Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#pod_selector_label GoogleClouddeployDeliveryPipeline#pod_selector_label}
  */
  readonly podSelectorLabel?: string;
  /**
  * Required. Name of the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#service GoogleClouddeployDeliveryPipeline#service}
  */
  readonly service: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: cdktf.stringToTerraform(struct!.deployment),
    disable_pod_overprovisioning: cdktf.booleanToTerraform(struct!.disablePodOverprovisioning),
    pod_selector_label: cdktf.stringToTerraform(struct!.podSelectorLabel),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: cdktf.stringToHclTerraform(struct!.deployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_pod_overprovisioning: {
      value: cdktf.booleanToHclTerraform(struct!.disablePodOverprovisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_selector_label: {
      value: cdktf.stringToHclTerraform(struct!.podSelectorLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._disablePodOverprovisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePodOverprovisioning = this._disablePodOverprovisioning;
    }
    if (this._podSelectorLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelectorLabel = this._podSelectorLabel;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployment = undefined;
      this._disablePodOverprovisioning = undefined;
      this._podSelectorLabel = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployment = value.deployment;
      this._disablePodOverprovisioning = value.disablePodOverprovisioning;
      this._podSelectorLabel = value.podSelectorLabel;
      this._service = value.service;
    }
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // disable_pod_overprovisioning - computed: false, optional: true, required: false
  private _disablePodOverprovisioning?: boolean | cdktf.IResolvable; 
  public get disablePodOverprovisioning() {
    return this.getBooleanAttribute('disable_pod_overprovisioning');
  }
  public set disablePodOverprovisioning(value: boolean | cdktf.IResolvable) {
    this._disablePodOverprovisioning = value;
  }
  public resetDisablePodOverprovisioning() {
    this._disablePodOverprovisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePodOverprovisioningInput() {
    return this._disablePodOverprovisioning;
  }

  // pod_selector_label - computed: false, optional: true, required: false
  private _podSelectorLabel?: string; 
  public get podSelectorLabel() {
    return this.getStringAttribute('pod_selector_label');
  }
  public set podSelectorLabel(value: string) {
    this._podSelectorLabel = value;
  }
  public resetPodSelectorLabel() {
    this._podSelectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorLabelInput() {
    return this._podSelectorLabel;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes {
  /**
  * gateway_service_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#gateway_service_mesh GoogleClouddeployDeliveryPipeline#gateway_service_mesh}
  */
  readonly gatewayServiceMesh?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;
  /**
  * service_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#service_networking GoogleClouddeployDeliveryPipeline#service_networking}
  */
  readonly serviceNetworking?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_service_mesh: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToTerraform(struct!.gatewayServiceMesh),
    service_networking: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToTerraform(struct!.serviceNetworking),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_service_mesh: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToHclTerraform(struct!.gatewayServiceMesh),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshList",
    },
    service_networking: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToHclTerraform(struct!.serviceNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayServiceMesh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayServiceMesh = this._gatewayServiceMesh?.internalValue;
    }
    if (this._serviceNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNetworking = this._serviceNetworking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayServiceMesh.internalValue = undefined;
      this._serviceNetworking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayServiceMesh.internalValue = value.gatewayServiceMesh;
      this._serviceNetworking.internalValue = value.serviceNetworking;
    }
  }

  // gateway_service_mesh - computed: false, optional: true, required: false
  private _gatewayServiceMesh = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference(this, "gateway_service_mesh");
  public get gatewayServiceMesh() {
    return this._gatewayServiceMesh;
  }
  public putGatewayServiceMesh(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh) {
    this._gatewayServiceMesh.internalValue = value;
  }
  public resetGatewayServiceMesh() {
    this._gatewayServiceMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayServiceMeshInput() {
    return this._gatewayServiceMesh.internalValue;
  }

  // service_networking - computed: false, optional: true, required: false
  private _serviceNetworking = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference(this, "service_networking");
  public get serviceNetworking() {
    return this._serviceNetworking;
  }
  public putServiceNetworking(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking) {
    this._serviceNetworking.internalValue = value;
  }
  public resetServiceNetworking() {
    this._serviceNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkingInput() {
    return this._serviceNetworking.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig {
  /**
  * cloud_run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#cloud_run GoogleClouddeployDeliveryPipeline#cloud_run}
  */
  readonly cloudRun?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#kubernetes GoogleClouddeployDeliveryPipeline#kubernetes}
  */
  readonly kubernetes?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_run: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToTerraform(struct!.cloudRun),
    kubernetes: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToTerraform(struct!.kubernetes),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_run: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToHclTerraform(struct!.cloudRun),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunList",
    },
    kubernetes: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRun = this._cloudRun?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudRun.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudRun.internalValue = value.cloudRun;
      this._kubernetes.internalValue = value.kubernetes;
    }
  }

  // cloud_run - computed: false, optional: true, required: false
  private _cloudRun = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference(this, "cloud_run");
  public get cloudRun() {
    return this._cloudRun;
  }
  public putCloudRun(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun) {
    this._cloudRun.internalValue = value;
  }
  public resetCloudRun() {
    this._cloudRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunInput() {
    return this._cloudRun.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary {
  /**
  * canary_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#canary_deployment GoogleClouddeployDeliveryPipeline#canary_deployment}
  */
  readonly canaryDeployment?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment;
  /**
  * custom_canary_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#custom_canary_deployment GoogleClouddeployDeliveryPipeline#custom_canary_deployment}
  */
  readonly customCanaryDeployment?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#runtime_config GoogleClouddeployDeliveryPipeline#runtime_config}
  */
  readonly runtimeConfig?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary_deployment: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToTerraform(struct!.canaryDeployment),
    custom_canary_deployment: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToTerraform(struct!.customCanaryDeployment),
    runtime_config: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToTerraform(struct!.runtimeConfig),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary_deployment: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToHclTerraform(struct!.canaryDeployment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentList",
    },
    custom_canary_deployment: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToHclTerraform(struct!.customCanaryDeployment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentList",
    },
    runtime_config: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToHclTerraform(struct!.runtimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canaryDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryDeployment = this._canaryDeployment?.internalValue;
    }
    if (this._customCanaryDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCanaryDeployment = this._customCanaryDeployment?.internalValue;
    }
    if (this._runtimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfig = this._runtimeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canaryDeployment.internalValue = undefined;
      this._customCanaryDeployment.internalValue = undefined;
      this._runtimeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canaryDeployment.internalValue = value.canaryDeployment;
      this._customCanaryDeployment.internalValue = value.customCanaryDeployment;
      this._runtimeConfig.internalValue = value.runtimeConfig;
    }
  }

  // canary_deployment - computed: false, optional: true, required: false
  private _canaryDeployment = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference(this, "canary_deployment");
  public get canaryDeployment() {
    return this._canaryDeployment;
  }
  public putCanaryDeployment(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment) {
    this._canaryDeployment.internalValue = value;
  }
  public resetCanaryDeployment() {
    this._canaryDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryDeploymentInput() {
    return this._canaryDeployment.internalValue;
  }

  // custom_canary_deployment - computed: false, optional: true, required: false
  private _customCanaryDeployment = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference(this, "custom_canary_deployment");
  public get customCanaryDeployment() {
    return this._customCanaryDeployment;
  }
  public putCustomCanaryDeployment(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment) {
    this._customCanaryDeployment.internalValue = value;
  }
  public resetCustomCanaryDeployment() {
    this._customCanaryDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCanaryDeploymentInput() {
    return this._customCanaryDeployment.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard {
  /**
  * Whether to verify a deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verify: cdktf.booleanToTerraform(struct!.verify),
    postdeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToTerraform(struct!.postdeploy),
    predeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToTerraform(struct!.predeploy),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verify: {
      value: cdktf.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    postdeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployList",
    },
    predeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._verify = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._verify = value.verify;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
    }
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy {
  /**
  * canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#canary GoogleClouddeployDeliveryPipeline#canary}
  */
  readonly canary?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary;
  /**
  * standard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#standard GoogleClouddeployDeliveryPipeline#standard}
  */
  readonly standard?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToTerraform(struct!.canary),
    standard: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToTerraform(struct!.standard),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToHclTerraform(struct!.canary),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryList",
    },
    standard: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canary = this._canary?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canary.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canary.internalValue = value.canary;
      this._standard.internalValue = value.standard;
    }
  }

  // canary - computed: false, optional: true, required: false
  private _canary = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary) {
    this._canary.internalValue = value;
  }
  public resetCanary() {
    this._canary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStages {
  /**
  * Skaffold profiles to use when rendering the manifest for this stage's `Target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#profiles GoogleClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#target_id GoogleClouddeployDeliveryPipeline#target_id}
  */
  readonly targetId?: string;
  /**
  * deploy_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#deploy_parameters GoogleClouddeployDeliveryPipeline#deploy_parameters}
  */
  readonly deployParameters?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#strategy GoogleClouddeployDeliveryPipeline#strategy}
  */
  readonly strategy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    target_id: cdktf.stringToTerraform(struct!.targetId),
    deploy_parameters: cdktf.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToTerraform, true)(struct!.deployParameters),
    strategy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyToTerraform(struct!.strategy),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_parameters: {
      value: cdktf.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToHclTerraform, true)(struct!.deployParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList",
    },
    strategy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._deployParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployParameters = this._deployParameters?.internalValue;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profiles = undefined;
      this._targetId = undefined;
      this._deployParameters.internalValue = undefined;
      this._strategy.internalValue = undefined;
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
      this._deployParameters.internalValue = value.deployParameters;
      this._strategy.internalValue = value.strategy;
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

  // deploy_parameters - computed: false, optional: true, required: false
  private _deployParameters = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList(this, "deploy_parameters", false);
  public get deployParameters() {
    return this._deployParameters;
  }
  public putDeployParameters(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktf.IResolvable) {
    this._deployParameters.internalValue = value;
  }
  public resetDeployParameters() {
    this._deployParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployParametersInput() {
    return this._deployParameters.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#stages GoogleClouddeployDeliveryPipeline#stages}
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


export function googleClouddeployDeliveryPipelineSerialPipelineToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference | GoogleClouddeployDeliveryPipelineSerialPipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stages: {
      value: cdktf.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesToHclTerraform, true)(struct!.stages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#create GoogleClouddeployDeliveryPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#delete GoogleClouddeployDeliveryPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#update GoogleClouddeployDeliveryPipeline#update}
  */
  readonly update?: string;
}

export function googleClouddeployDeliveryPipelineTimeoutsToTerraform(struct?: GoogleClouddeployDeliveryPipelineTimeouts | cdktf.IResolvable): any {
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


export function googleClouddeployDeliveryPipelineTimeoutsToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineTimeouts | cdktf.IResolvable): any {
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

export class GoogleClouddeployDeliveryPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}
*/
export class GoogleClouddeployDeliveryPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_delivery_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleClouddeployDeliveryPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleClouddeployDeliveryPipeline to import
  * @param importFromId The id of the existing GoogleClouddeployDeliveryPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleClouddeployDeliveryPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddeploy_delivery_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline} Resource
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
        providerVersion: '6.40.0',
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial_pipeline: {
        value: googleClouddeployDeliveryPipelineSerialPipelineToHclTerraform(this._serialPipeline.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineList",
      },
      timeouts: {
        value: googleClouddeployDeliveryPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleClouddeployDeliveryPipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
