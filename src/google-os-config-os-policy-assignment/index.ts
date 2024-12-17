/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleOsConfigOsPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * OS policy assignment description. Length of the description is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#description GoogleOsConfigOsPolicyAssignment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#id GoogleOsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#location GoogleOsConfigOsPolicyAssignment#location}
  */
  readonly location: string;
  /**
  * Resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#name GoogleOsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#project GoogleOsConfigOsPolicyAssignment#project}
  */
  readonly project?: string;
  /**
  * Set to true to skip awaiting rollout during resource creation and update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#skip_await_rollout GoogleOsConfigOsPolicyAssignment#skip_await_rollout}
  */
  readonly skipAwaitRollout?: boolean | cdktf.IResolvable;
  /**
  * instance_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#instance_filter GoogleOsConfigOsPolicyAssignment#instance_filter}
  */
  readonly instanceFilter: GoogleOsConfigOsPolicyAssignmentInstanceFilter;
  /**
  * os_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#os_policies GoogleOsConfigOsPolicyAssignment#os_policies}
  */
  readonly osPolicies: GoogleOsConfigOsPolicyAssignmentOsPolicies[] | cdktf.IResolvable;
  /**
  * rollout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#rollout GoogleOsConfigOsPolicyAssignment#rollout}
  */
  readonly rollout: GoogleOsConfigOsPolicyAssignmentRollout;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#timeouts GoogleOsConfigOsPolicyAssignment#timeouts}
  */
  readonly timeouts?: GoogleOsConfigOsPolicyAssignmentTimeouts;
}
export interface GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabels {
  /**
  * Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#labels GoogleOsConfigOsPolicyAssignment#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function googleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function googleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
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
}

export class GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsOutputReference {
    return new GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabels {
  /**
  * Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#labels GoogleOsConfigOsPolicyAssignment#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function googleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function googleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
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
}

export class GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsOutputReference {
    return new GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigOsPolicyAssignmentInstanceFilterInventories {
  /**
  * The OS short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#os_short_name GoogleOsConfigOsPolicyAssignment#os_short_name}
  */
  readonly osShortName: string;
  /**
  * The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of '7', specify the following value for this field '7.*' An empty string matches all OS versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#os_version GoogleOsConfigOsPolicyAssignment#os_version}
  */
  readonly osVersion?: string;
}

export function googleOsConfigOsPolicyAssignmentInstanceFilterInventoriesToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentInstanceFilterInventories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_short_name: cdktf.stringToTerraform(struct!.osShortName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
  }
}


export function googleOsConfigOsPolicyAssignmentInstanceFilterInventoriesToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentInstanceFilterInventories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_short_name: {
      value: cdktf.stringToHclTerraform(struct!.osShortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentInstanceFilterInventoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentInstanceFilterInventories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osShortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osShortName = this._osShortName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentInstanceFilterInventories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osShortName = undefined;
      this._osVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._osShortName = value.osShortName;
      this._osVersion = value.osVersion;
    }
  }

  // os_short_name - computed: false, optional: false, required: true
  private _osShortName?: string; 
  public get osShortName() {
    return this.getStringAttribute('os_short_name');
  }
  public set osShortName(value: string) {
    this._osShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osShortNameInput() {
    return this._osShortName;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }
}

export class GoogleOsConfigOsPolicyAssignmentInstanceFilterInventoriesList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigOsPolicyAssignmentInstanceFilterInventories[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigOsPolicyAssignmentInstanceFilterInventoriesOutputReference {
    return new GoogleOsConfigOsPolicyAssignmentInstanceFilterInventoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigOsPolicyAssignmentInstanceFilter {
  /**
  * Target all VMs in the project. If true, no other criteria is permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#all GoogleOsConfigOsPolicyAssignment#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * exclusion_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#exclusion_labels GoogleOsConfigOsPolicyAssignment#exclusion_labels}
  */
  readonly exclusionLabels?: GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabels[] | cdktf.IResolvable;
  /**
  * inclusion_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#inclusion_labels GoogleOsConfigOsPolicyAssignment#inclusion_labels}
  */
  readonly inclusionLabels?: GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabels[] | cdktf.IResolvable;
  /**
  * inventories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#inventories GoogleOsConfigOsPolicyAssignment#inventories}
  */
  readonly inventories?: GoogleOsConfigOsPolicyAssignmentInstanceFilterInventories[] | cdktf.IResolvable;
}

export function googleOsConfigOsPolicyAssignmentInstanceFilterToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentInstanceFilterOutputReference | GoogleOsConfigOsPolicyAssignmentInstanceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    exclusion_labels: cdktf.listMapper(googleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsToTerraform, true)(struct!.exclusionLabels),
    inclusion_labels: cdktf.listMapper(googleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsToTerraform, true)(struct!.inclusionLabels),
    inventories: cdktf.listMapper(googleOsConfigOsPolicyAssignmentInstanceFilterInventoriesToTerraform, true)(struct!.inventories),
  }
}


export function googleOsConfigOsPolicyAssignmentInstanceFilterToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentInstanceFilterOutputReference | GoogleOsConfigOsPolicyAssignmentInstanceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusion_labels: {
      value: cdktf.listMapperHcl(googleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsToHclTerraform, true)(struct!.exclusionLabels),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsList",
    },
    inclusion_labels: {
      value: cdktf.listMapperHcl(googleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsToHclTerraform, true)(struct!.inclusionLabels),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsList",
    },
    inventories: {
      value: cdktf.listMapperHcl(googleOsConfigOsPolicyAssignmentInstanceFilterInventoriesToHclTerraform, true)(struct!.inventories),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentInstanceFilterInventoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentInstanceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentInstanceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._exclusionLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionLabels = this._exclusionLabels?.internalValue;
    }
    if (this._inclusionLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionLabels = this._inclusionLabels?.internalValue;
    }
    if (this._inventories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventories = this._inventories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentInstanceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._exclusionLabels.internalValue = undefined;
      this._inclusionLabels.internalValue = undefined;
      this._inventories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._exclusionLabels.internalValue = value.exclusionLabels;
      this._inclusionLabels.internalValue = value.inclusionLabels;
      this._inventories.internalValue = value.inventories;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // exclusion_labels - computed: false, optional: true, required: false
  private _exclusionLabels = new GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsList(this, "exclusion_labels", false);
  public get exclusionLabels() {
    return this._exclusionLabels;
  }
  public putExclusionLabels(value: GoogleOsConfigOsPolicyAssignmentInstanceFilterExclusionLabels[] | cdktf.IResolvable) {
    this._exclusionLabels.internalValue = value;
  }
  public resetExclusionLabels() {
    this._exclusionLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionLabelsInput() {
    return this._exclusionLabels.internalValue;
  }

  // inclusion_labels - computed: false, optional: true, required: false
  private _inclusionLabels = new GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsList(this, "inclusion_labels", false);
  public get inclusionLabels() {
    return this._inclusionLabels;
  }
  public putInclusionLabels(value: GoogleOsConfigOsPolicyAssignmentInstanceFilterInclusionLabels[] | cdktf.IResolvable) {
    this._inclusionLabels.internalValue = value;
  }
  public resetInclusionLabels() {
    this._inclusionLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionLabelsInput() {
    return this._inclusionLabels.internalValue;
  }

  // inventories - computed: false, optional: true, required: false
  private _inventories = new GoogleOsConfigOsPolicyAssignmentInstanceFilterInventoriesList(this, "inventories", false);
  public get inventories() {
    return this._inventories;
  }
  public putInventories(value: GoogleOsConfigOsPolicyAssignmentInstanceFilterInventories[] | cdktf.IResolvable) {
    this._inventories.internalValue = value;
  }
  public resetInventories() {
    this._inventories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoriesInput() {
    return this._inventories.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters {
  /**
  * The OS short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#os_short_name GoogleOsConfigOsPolicyAssignment#os_short_name}
  */
  readonly osShortName: string;
  /**
  * The OS version
  * Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of '7', specify the following value for this field '7.*'
  * An empty string matches all OS versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#os_version GoogleOsConfigOsPolicyAssignment#os_version}
  */
  readonly osVersion?: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_short_name: cdktf.stringToTerraform(struct!.osShortName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_short_name: {
      value: cdktf.stringToHclTerraform(struct!.osShortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osShortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osShortName = this._osShortName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osShortName = undefined;
      this._osVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._osShortName = value.osShortName;
      this._osVersion = value.osVersion;
    }
  }

  // os_short_name - computed: false, optional: false, required: true
  private _osShortName?: string; 
  public get osShortName() {
    return this.getStringAttribute('os_short_name');
  }
  public set osShortName(value: string) {
    this._osShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osShortNameInput() {
    return this._osShortName;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersOutputReference {
    return new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#bucket GoogleOsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#generation GoogleOsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#object GoogleOsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#sha256_checksum GoogleOsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * URI from which to fetch the object. It should contain both the protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#uri GoogleOsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#allow_insecure GoogleOsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#local_path GoogleOsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gcs GoogleOsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#remote GoogleOsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToTerraform(struct!.gcs),
    remote: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToTerraform(struct!.remote),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsList",
    },
    remote: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce {
  /**
  * Optional arguments to pass to the source during execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#args GoogleOsConfigOsPolicyAssignment#args}
  */
  readonly args?: string[];
  /**
  * The script interpreter to use. Possible values: ["INTERPRETER_UNSPECIFIED", "NONE", "SHELL", "POWERSHELL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#interpreter GoogleOsConfigOsPolicyAssignment#interpreter}
  */
  readonly interpreter: string;
  /**
  * Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#output_file_path GoogleOsConfigOsPolicyAssignment#output_file_path}
  */
  readonly outputFilePath?: string;
  /**
  * An inline script. The size of the script is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#script GoogleOsConfigOsPolicyAssignment#script}
  */
  readonly script?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#file GoogleOsConfigOsPolicyAssignment#file}
  */
  readonly file?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    output_file_path: cdktf.stringToTerraform(struct!.outputFilePath),
    script: cdktf.stringToTerraform(struct!.script),
    file: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileToTerraform(struct!.file),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interpreter: {
      value: cdktf.stringToHclTerraform(struct!.interpreter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_file_path: {
      value: cdktf.stringToHclTerraform(struct!.outputFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._outputFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilePath = this._outputFilePath;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._interpreter = undefined;
      this._outputFilePath = undefined;
      this._script = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._interpreter = value.interpreter;
      this._outputFilePath = value.outputFilePath;
      this._script = value.script;
      this._file.internalValue = value.file;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // interpreter - computed: false, optional: false, required: true
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // output_file_path - computed: false, optional: true, required: false
  private _outputFilePath?: string; 
  public get outputFilePath() {
    return this.getStringAttribute('output_file_path');
  }
  public set outputFilePath(value: string) {
    this._outputFilePath = value;
  }
  public resetOutputFilePath() {
    this._outputFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilePathInput() {
    return this._outputFilePath;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // file - computed: false, optional: true, required: false
  private _file = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#bucket GoogleOsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#generation GoogleOsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#object GoogleOsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#sha256_checksum GoogleOsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * URI from which to fetch the object. It should contain both the protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#uri GoogleOsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type:
  * Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#allow_insecure GoogleOsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#local_path GoogleOsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gcs GoogleOsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#remote GoogleOsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsToTerraform(struct!.gcs),
    remote: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToTerraform(struct!.remote),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsList",
    },
    remote: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate {
  /**
  * Optional arguments to pass to the source during execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#args GoogleOsConfigOsPolicyAssignment#args}
  */
  readonly args?: string[];
  /**
  * The script interpreter to use. Possible values: ["INTERPRETER_UNSPECIFIED", "NONE", "SHELL", "POWERSHELL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#interpreter GoogleOsConfigOsPolicyAssignment#interpreter}
  */
  readonly interpreter: string;
  /**
  * Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#output_file_path GoogleOsConfigOsPolicyAssignment#output_file_path}
  */
  readonly outputFilePath?: string;
  /**
  * An inline script. The size of the script is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#script GoogleOsConfigOsPolicyAssignment#script}
  */
  readonly script?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#file GoogleOsConfigOsPolicyAssignment#file}
  */
  readonly file?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    output_file_path: cdktf.stringToTerraform(struct!.outputFilePath),
    script: cdktf.stringToTerraform(struct!.script),
    file: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileToTerraform(struct!.file),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interpreter: {
      value: cdktf.stringToHclTerraform(struct!.interpreter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_file_path: {
      value: cdktf.stringToHclTerraform(struct!.outputFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._outputFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilePath = this._outputFilePath;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._interpreter = undefined;
      this._outputFilePath = undefined;
      this._script = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._interpreter = value.interpreter;
      this._outputFilePath = value.outputFilePath;
      this._script = value.script;
      this._file.internalValue = value.file;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // interpreter - computed: false, optional: false, required: true
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // output_file_path - computed: false, optional: true, required: false
  private _outputFilePath?: string; 
  public get outputFilePath() {
    return this.getStringAttribute('output_file_path');
  }
  public set outputFilePath(value: string) {
    this._outputFilePath = value;
  }
  public resetOutputFilePath() {
    this._outputFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilePathInput() {
    return this._outputFilePath;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // file - computed: false, optional: true, required: false
  private _file = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec {
  /**
  * enforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#enforce GoogleOsConfigOsPolicyAssignment#enforce}
  */
  readonly enforce?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce;
  /**
  * validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#validate GoogleOsConfigOsPolicyAssignment#validate}
  */
  readonly validate: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceToTerraform(struct!.enforce),
    validate: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateToTerraform(struct!.validate),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceToHclTerraform(struct!.enforce),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceList",
    },
    validate: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce?.internalValue;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce.internalValue = undefined;
      this._validate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce.internalValue = value.enforce;
      this._validate.internalValue = value.validate;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceOutputReference(this, "enforce");
  public get enforce() {
    return this._enforce;
  }
  public putEnforce(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce) {
    this._enforce.internalValue = value;
  }
  public resetEnforce() {
    this._enforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce.internalValue;
  }

  // validate - computed: false, optional: false, required: true
  private _validate = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate) {
    this._validate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#bucket GoogleOsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#generation GoogleOsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#object GoogleOsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#sha256_checksum GoogleOsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * URI from which to fetch the object. It should contain both the protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#uri GoogleOsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#allow_insecure GoogleOsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#local_path GoogleOsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gcs GoogleOsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#remote GoogleOsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsToTerraform(struct!.gcs),
    remote: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteToTerraform(struct!.remote),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsList",
    },
    remote: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile {
  /**
  * A a file with this content. The size of the content is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#content GoogleOsConfigOsPolicyAssignment#content}
  */
  readonly content?: string;
  /**
  * The absolute path of the file within the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#path GoogleOsConfigOsPolicyAssignment#path}
  */
  readonly path: string;
  /**
  * Desired state of the file. Possible values: ["DESIRED_STATE_UNSPECIFIED", "PRESENT", "ABSENT", "CONTENTS_MATCH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#state GoogleOsConfigOsPolicyAssignment#state}
  */
  readonly state: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#file GoogleOsConfigOsPolicyAssignment#file}
  */
  readonly file?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    path: cdktf.stringToTerraform(struct!.path),
    state: cdktf.stringToTerraform(struct!.state),
    file: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileToTerraform(struct!.file),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._path = undefined;
      this._state = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._path = value.path;
      this._state = value.state;
      this._file.internalValue = value.file;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // file - computed: false, optional: true, required: false
  private _file = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt {
  /**
  * Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#name GoogleOsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#bucket GoogleOsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#generation GoogleOsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#object GoogleOsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#sha256_checksum GoogleOsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * URI from which to fetch the object. It should contain both the protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#uri GoogleOsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type:
  * Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#allow_insecure GoogleOsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#local_path GoogleOsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gcs GoogleOsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#remote GoogleOsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToTerraform(struct!.gcs),
    remote: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToTerraform(struct!.remote),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsList",
    },
    remote: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb {
  /**
  * Whether dependencies should also be installed. - install when false: 'dpkg -i package' - install when true: 'apt-get update && apt-get -y install package.deb'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#pull_deps GoogleOsConfigOsPolicyAssignment#pull_deps}
  */
  readonly pullDeps?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#source GoogleOsConfigOsPolicyAssignment#source}
  */
  readonly source: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_deps: cdktf.booleanToTerraform(struct!.pullDeps),
    source: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceToTerraform(struct!.source),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_deps: {
      value: cdktf.booleanToHclTerraform(struct!.pullDeps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullDeps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullDeps = this._pullDeps;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pullDeps = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pullDeps = value.pullDeps;
      this._source.internalValue = value.source;
    }
  }

  // pull_deps - computed: false, optional: true, required: false
  private _pullDeps?: boolean | cdktf.IResolvable; 
  public get pullDeps() {
    return this.getBooleanAttribute('pull_deps');
  }
  public set pullDeps(value: boolean | cdktf.IResolvable) {
    this._pullDeps = value;
  }
  public resetPullDeps() {
    this._pullDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullDepsInput() {
    return this._pullDeps;
  }

  // source - computed: false, optional: false, required: true
  private _source = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget {
  /**
  * Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#name GoogleOsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#bucket GoogleOsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#generation GoogleOsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#object GoogleOsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#sha256_checksum GoogleOsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * URI from which to fetch the object. It should contain both the protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#uri GoogleOsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type:
  * Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#allow_insecure GoogleOsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#local_path GoogleOsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gcs GoogleOsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#remote GoogleOsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToTerraform(struct!.gcs),
    remote: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToTerraform(struct!.remote),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsList",
    },
    remote: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi {
  /**
  * Additional properties to use during installation. This should be in the format of Property=Setting. Appended to the defaults of 'ACTION=INSTALL REBOOT=ReallySuppress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#properties GoogleOsConfigOsPolicyAssignment#properties}
  */
  readonly properties?: string[];
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#source GoogleOsConfigOsPolicyAssignment#source}
  */
  readonly source: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.properties),
    source: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceToTerraform(struct!.source),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.properties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties = value.properties;
      this._source.internalValue = value.source;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // source - computed: false, optional: false, required: true
  private _source = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#bucket GoogleOsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#generation GoogleOsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#object GoogleOsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#sha256_checksum GoogleOsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * URI from which to fetch the object. It should contain both the protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#uri GoogleOsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type:
  * Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#allow_insecure GoogleOsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#local_path GoogleOsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gcs GoogleOsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#remote GoogleOsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToTerraform(struct!.gcs),
    remote: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToTerraform(struct!.remote),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsList",
    },
    remote: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm {
  /**
  * Whether dependencies should also be installed. - install when false: 'rpm --upgrade --replacepkgs package.rpm' - install when true: 'yum -y install package.rpm' or 'zypper -y install package.rpm'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#pull_deps GoogleOsConfigOsPolicyAssignment#pull_deps}
  */
  readonly pullDeps?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#source GoogleOsConfigOsPolicyAssignment#source}
  */
  readonly source: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_deps: cdktf.booleanToTerraform(struct!.pullDeps),
    source: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceToTerraform(struct!.source),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_deps: {
      value: cdktf.booleanToHclTerraform(struct!.pullDeps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullDeps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullDeps = this._pullDeps;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pullDeps = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pullDeps = value.pullDeps;
      this._source.internalValue = value.source;
    }
  }

  // pull_deps - computed: false, optional: true, required: false
  private _pullDeps?: boolean | cdktf.IResolvable; 
  public get pullDeps() {
    return this.getBooleanAttribute('pull_deps');
  }
  public set pullDeps(value: boolean | cdktf.IResolvable) {
    this._pullDeps = value;
  }
  public resetPullDeps() {
    this._pullDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullDepsInput() {
    return this._pullDeps;
  }

  // source - computed: false, optional: false, required: true
  private _source = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum {
  /**
  * Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#name GoogleOsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper {
  /**
  * Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#name GoogleOsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg {
  /**
  * The desired state the agent should maintain for this package. Possible values: ["DESIRED_STATE_UNSPECIFIED", "INSTALLED", "REMOVED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#desired_state GoogleOsConfigOsPolicyAssignment#desired_state}
  */
  readonly desiredState: string;
  /**
  * apt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#apt GoogleOsConfigOsPolicyAssignment#apt}
  */
  readonly apt?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt;
  /**
  * deb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#deb GoogleOsConfigOsPolicyAssignment#deb}
  */
  readonly deb?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb;
  /**
  * googet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#googet GoogleOsConfigOsPolicyAssignment#googet}
  */
  readonly googet?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget;
  /**
  * msi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#msi GoogleOsConfigOsPolicyAssignment#msi}
  */
  readonly msi?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi;
  /**
  * rpm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#rpm GoogleOsConfigOsPolicyAssignment#rpm}
  */
  readonly rpm?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm;
  /**
  * yum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#yum GoogleOsConfigOsPolicyAssignment#yum}
  */
  readonly yum?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum;
  /**
  * zypper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#zypper GoogleOsConfigOsPolicyAssignment#zypper}
  */
  readonly zypper?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    apt: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptToTerraform(struct!.apt),
    deb: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebToTerraform(struct!.deb),
    googet: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetToTerraform(struct!.googet),
    msi: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiToTerraform(struct!.msi),
    rpm: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmToTerraform(struct!.rpm),
    yum: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumToTerraform(struct!.yum),
    zypper: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperToTerraform(struct!.zypper),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apt: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptToHclTerraform(struct!.apt),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptList",
    },
    deb: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebToHclTerraform(struct!.deb),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebList",
    },
    googet: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetToHclTerraform(struct!.googet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetList",
    },
    msi: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiToHclTerraform(struct!.msi),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiList",
    },
    rpm: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmToHclTerraform(struct!.rpm),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmList",
    },
    yum: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumToHclTerraform(struct!.yum),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumList",
    },
    zypper: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperToHclTerraform(struct!.zypper),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._apt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apt = this._apt?.internalValue;
    }
    if (this._deb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deb = this._deb?.internalValue;
    }
    if (this._googet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googet = this._googet?.internalValue;
    }
    if (this._msi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msi = this._msi?.internalValue;
    }
    if (this._rpm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpm = this._rpm?.internalValue;
    }
    if (this._yum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yum = this._yum?.internalValue;
    }
    if (this._zypper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zypper = this._zypper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredState = undefined;
      this._apt.internalValue = undefined;
      this._deb.internalValue = undefined;
      this._googet.internalValue = undefined;
      this._msi.internalValue = undefined;
      this._rpm.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredState = value.desiredState;
      this._apt.internalValue = value.apt;
      this._deb.internalValue = value.deb;
      this._googet.internalValue = value.googet;
      this._msi.internalValue = value.msi;
      this._rpm.internalValue = value.rpm;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // desired_state - computed: false, optional: false, required: true
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt) {
    this._apt.internalValue = value;
  }
  public resetApt() {
    this._apt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptInput() {
    return this._apt.internalValue;
  }

  // deb - computed: false, optional: true, required: false
  private _deb = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebOutputReference(this, "deb");
  public get deb() {
    return this._deb;
  }
  public putDeb(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb) {
    this._deb.internalValue = value;
  }
  public resetDeb() {
    this._deb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debInput() {
    return this._deb.internalValue;
  }

  // googet - computed: false, optional: true, required: false
  private _googet = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference(this, "googet");
  public get googet() {
    return this._googet;
  }
  public putGooget(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget) {
    this._googet.internalValue = value;
  }
  public resetGooget() {
    this._googet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googetInput() {
    return this._googet.internalValue;
  }

  // msi - computed: false, optional: true, required: false
  private _msi = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiOutputReference(this, "msi");
  public get msi() {
    return this._msi;
  }
  public putMsi(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi) {
    this._msi.internalValue = value;
  }
  public resetMsi() {
    this._msi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiInput() {
    return this._msi.internalValue;
  }

  // rpm - computed: false, optional: true, required: false
  private _rpm = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmOutputReference(this, "rpm");
  public get rpm() {
    return this._rpm;
  }
  public putRpm(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm) {
    this._rpm.internalValue = value;
  }
  public resetRpm() {
    this._rpm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpmInput() {
    return this._rpm.internalValue;
  }

  // yum - computed: false, optional: true, required: false
  private _yum = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum) {
    this._yum.internalValue = value;
  }
  public resetYum() {
    this._yum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumInput() {
    return this._yum.internalValue;
  }

  // zypper - computed: false, optional: true, required: false
  private _zypper = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper) {
    this._zypper.internalValue = value;
  }
  public resetZypper() {
    this._zypper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zypperInput() {
    return this._zypper.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt {
  /**
  * Type of archive files in this repository. Possible values: ["ARCHIVE_TYPE_UNSPECIFIED", "DEB", "DEB_SRC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#archive_type GoogleOsConfigOsPolicyAssignment#archive_type}
  */
  readonly archiveType: string;
  /**
  * List of components for this repository. Must contain at least one item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#components GoogleOsConfigOsPolicyAssignment#components}
  */
  readonly components: string[];
  /**
  * Distribution of this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#distribution GoogleOsConfigOsPolicyAssignment#distribution}
  */
  readonly distribution: string;
  /**
  * URI of the key file for this repository. The agent maintains a keyring at '/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gpg_key GoogleOsConfigOsPolicyAssignment#gpg_key}
  */
  readonly gpgKey?: string;
  /**
  * URI for this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#uri GoogleOsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_type: cdktf.stringToTerraform(struct!.archiveType),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    distribution: cdktf.stringToTerraform(struct!.distribution),
    gpg_key: cdktf.stringToTerraform(struct!.gpgKey),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_type: {
      value: cdktf.stringToHclTerraform(struct!.archiveType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    distribution: {
      value: cdktf.stringToHclTerraform(struct!.distribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpg_key: {
      value: cdktf.stringToHclTerraform(struct!.gpgKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveType !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveType = this._archiveType;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._gpgKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKey = this._gpgKey;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveType = undefined;
      this._components = undefined;
      this._distribution = undefined;
      this._gpgKey = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveType = value.archiveType;
      this._components = value.components;
      this._distribution = value.distribution;
      this._gpgKey = value.gpgKey;
      this._uri = value.uri;
    }
  }

  // archive_type - computed: false, optional: false, required: true
  private _archiveType?: string; 
  public get archiveType() {
    return this.getStringAttribute('archive_type');
  }
  public set archiveType(value: string) {
    this._archiveType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveTypeInput() {
    return this._archiveType;
  }

  // components - computed: false, optional: false, required: true
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // gpg_key - computed: false, optional: true, required: false
  private _gpgKey?: string; 
  public get gpgKey() {
    return this.getStringAttribute('gpg_key');
  }
  public set gpgKey(value: string) {
    this._gpgKey = value;
  }
  public resetGpgKey() {
    this._gpgKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeyInput() {
    return this._gpgKey;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo {
  /**
  * The name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#name GoogleOsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * The url of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#url GoogleOsConfigOsPolicyAssignment#url}
  */
  readonly url: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum {
  /**
  * The location of the repository directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#base_url GoogleOsConfigOsPolicyAssignment#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#display_name GoogleOsConfigOsPolicyAssignment#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gpg_keys GoogleOsConfigOsPolicyAssignment#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * A one word, unique name for this repository. This is the 'repo id' in the yum config file and also the 'display_name' if 'display_name' is omitted. This id is also used as the unique identifier when checking for resource conflicts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#id GoogleOsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gpg_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gpgKeys),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpg_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gpgKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gpgKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKeys = this._gpgKeys;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._displayName = undefined;
      this._gpgKeys = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._displayName = value.displayName;
      this._gpgKeys = value.gpgKeys;
      this._id = value.id;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gpg_keys - computed: false, optional: true, required: false
  private _gpgKeys?: string[]; 
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }
  public set gpgKeys(value: string[]) {
    this._gpgKeys = value;
  }
  public resetGpgKeys() {
    this._gpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeysInput() {
    return this._gpgKeys;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper {
  /**
  * The location of the repository directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#base_url GoogleOsConfigOsPolicyAssignment#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#display_name GoogleOsConfigOsPolicyAssignment#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#gpg_keys GoogleOsConfigOsPolicyAssignment#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * A one word, unique name for this repository. This is the 'repo id' in the zypper config file and also the 'display_name' if 'display_name' is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#id GoogleOsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gpg_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gpgKeys),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpg_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gpgKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gpgKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKeys = this._gpgKeys;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._displayName = undefined;
      this._gpgKeys = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._displayName = value.displayName;
      this._gpgKeys = value.gpgKeys;
      this._id = value.id;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gpg_keys - computed: false, optional: true, required: false
  private _gpgKeys?: string[]; 
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }
  public set gpgKeys(value: string[]) {
    this._gpgKeys = value;
  }
  public resetGpgKeys() {
    this._gpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeysInput() {
    return this._gpgKeys;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository {
  /**
  * apt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#apt GoogleOsConfigOsPolicyAssignment#apt}
  */
  readonly apt?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt;
  /**
  * goo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#goo GoogleOsConfigOsPolicyAssignment#goo}
  */
  readonly goo?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo;
  /**
  * yum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#yum GoogleOsConfigOsPolicyAssignment#yum}
  */
  readonly yum?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum;
  /**
  * zypper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#zypper GoogleOsConfigOsPolicyAssignment#zypper}
  */
  readonly zypper?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apt: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptToTerraform(struct!.apt),
    goo: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooToTerraform(struct!.goo),
    yum: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumToTerraform(struct!.yum),
    zypper: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperToTerraform(struct!.zypper),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryOutputReference | GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apt: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptToHclTerraform(struct!.apt),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptList",
    },
    goo: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooToHclTerraform(struct!.goo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooList",
    },
    yum: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumToHclTerraform(struct!.yum),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumList",
    },
    zypper: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperToHclTerraform(struct!.zypper),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apt = this._apt?.internalValue;
    }
    if (this._goo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goo = this._goo?.internalValue;
    }
    if (this._yum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yum = this._yum?.internalValue;
    }
    if (this._zypper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zypper = this._zypper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apt.internalValue = undefined;
      this._goo.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apt.internalValue = value.apt;
      this._goo.internalValue = value.goo;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt) {
    this._apt.internalValue = value;
  }
  public resetApt() {
    this._apt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptInput() {
    return this._apt.internalValue;
  }

  // goo - computed: false, optional: true, required: false
  private _goo = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference(this, "goo");
  public get goo() {
    return this._goo;
  }
  public putGoo(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo) {
    this._goo.internalValue = value;
  }
  public resetGoo() {
    this._goo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gooInput() {
    return this._goo.internalValue;
  }

  // yum - computed: false, optional: true, required: false
  private _yum = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum) {
    this._yum.internalValue = value;
  }
  public resetYum() {
    this._yum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumInput() {
    return this._yum.internalValue;
  }

  // zypper - computed: false, optional: true, required: false
  private _zypper = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper) {
    this._zypper.internalValue = value;
  }
  public resetZypper() {
    this._zypper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zypperInput() {
    return this._zypper.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources {
  /**
  * The id of the resource with the following restrictions:
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  * * Must be unique within the OS policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#id GoogleOsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#exec GoogleOsConfigOsPolicyAssignment#exec}
  */
  readonly exec?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#file GoogleOsConfigOsPolicyAssignment#file}
  */
  readonly file?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile;
  /**
  * pkg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#pkg GoogleOsConfigOsPolicyAssignment#pkg}
  */
  readonly pkg?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#repository GoogleOsConfigOsPolicyAssignment#repository}
  */
  readonly repository?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    exec: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecToTerraform(struct!.exec),
    file: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileToTerraform(struct!.file),
    pkg: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgToTerraform(struct!.pkg),
    repository: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryToTerraform(struct!.repository),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecList",
    },
    file: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileList",
    },
    pkg: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgToHclTerraform(struct!.pkg),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgList",
    },
    repository: {
      value: googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryToHclTerraform(struct!.repository),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._pkg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkg = this._pkg?.internalValue;
    }
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._exec.internalValue = undefined;
      this._file.internalValue = undefined;
      this._pkg.internalValue = undefined;
      this._repository.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._exec.internalValue = value.exec;
      this._file.internalValue = value.file;
      this._pkg.internalValue = value.pkg;
      this._repository.internalValue = value.repository;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // pkg - computed: false, optional: true, required: false
  private _pkg = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgOutputReference(this, "pkg");
  public get pkg() {
    return this._pkg;
  }
  public putPkg(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg) {
    this._pkg.internalValue = value;
  }
  public resetPkg() {
    this._pkg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesOutputReference {
    return new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroups {
  /**
  * inventory_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#inventory_filters GoogleOsConfigOsPolicyAssignment#inventory_filters}
  */
  readonly inventoryFilters?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#resources GoogleOsConfigOsPolicyAssignment#resources}
  */
  readonly resources: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources[] | cdktf.IResolvable;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inventory_filters: cdktf.listMapper(googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersToTerraform, true)(struct!.inventoryFilters),
    resources: cdktf.listMapper(googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesToTerraform, true)(struct!.resources),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inventory_filters: {
      value: cdktf.listMapperHcl(googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersToHclTerraform, true)(struct!.inventoryFilters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersList",
    },
    resources: {
      value: cdktf.listMapperHcl(googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inventoryFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventoryFilters = this._inventoryFilters?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inventoryFilters.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inventoryFilters.internalValue = value.inventoryFilters;
      this._resources.internalValue = value.resources;
    }
  }

  // inventory_filters - computed: false, optional: true, required: false
  private _inventoryFilters = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersList(this, "inventory_filters", false);
  public get inventoryFilters() {
    return this._inventoryFilters;
  }
  public putInventoryFilters(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable) {
    this._inventoryFilters.internalValue = value;
  }
  public resetInventoryFilters() {
    this._inventoryFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryFiltersInput() {
    return this._inventoryFilters.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroups[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsOutputReference {
    return new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigOsPolicyAssignmentOsPolicies {
  /**
  * This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to 'true' if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#allow_no_resource_group_match GoogleOsConfigOsPolicyAssignment#allow_no_resource_group_match}
  */
  readonly allowNoResourceGroupMatch?: boolean | cdktf.IResolvable;
  /**
  * Policy description. Length of the description is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#description GoogleOsConfigOsPolicyAssignment#description}
  */
  readonly description?: string;
  /**
  * The id of the OS policy with the following restrictions:
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  * * Must be unique within the assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#id GoogleOsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Policy mode Possible values: ["MODE_UNSPECIFIED", "VALIDATION", "ENFORCEMENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#mode GoogleOsConfigOsPolicyAssignment#mode}
  */
  readonly mode: string;
  /**
  * resource_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#resource_groups GoogleOsConfigOsPolicyAssignment#resource_groups}
  */
  readonly resourceGroups: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroups[] | cdktf.IResolvable;
}

export function googleOsConfigOsPolicyAssignmentOsPoliciesToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_resource_group_match: cdktf.booleanToTerraform(struct!.allowNoResourceGroupMatch),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    mode: cdktf.stringToTerraform(struct!.mode),
    resource_groups: cdktf.listMapper(googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsToTerraform, true)(struct!.resourceGroups),
  }
}


export function googleOsConfigOsPolicyAssignmentOsPoliciesToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentOsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_no_resource_group_match: {
      value: cdktf.booleanToHclTerraform(struct!.allowNoResourceGroupMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_groups: {
      value: cdktf.listMapperHcl(googleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsToHclTerraform, true)(struct!.resourceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentOsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoResourceGroupMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoResourceGroupMatch = this._allowNoResourceGroupMatch;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._resourceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentOsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoResourceGroupMatch = undefined;
      this._description = undefined;
      this._id = undefined;
      this._mode = undefined;
      this._resourceGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoResourceGroupMatch = value.allowNoResourceGroupMatch;
      this._description = value.description;
      this._id = value.id;
      this._mode = value.mode;
      this._resourceGroups.internalValue = value.resourceGroups;
    }
  }

  // allow_no_resource_group_match - computed: false, optional: true, required: false
  private _allowNoResourceGroupMatch?: boolean | cdktf.IResolvable; 
  public get allowNoResourceGroupMatch() {
    return this.getBooleanAttribute('allow_no_resource_group_match');
  }
  public set allowNoResourceGroupMatch(value: boolean | cdktf.IResolvable) {
    this._allowNoResourceGroupMatch = value;
  }
  public resetAllowNoResourceGroupMatch() {
    this._allowNoResourceGroupMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoResourceGroupMatchInput() {
    return this._allowNoResourceGroupMatch;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // resource_groups - computed: false, optional: false, required: true
  private _resourceGroups = new GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroupsList(this, "resource_groups", false);
  public get resourceGroups() {
    return this._resourceGroups;
  }
  public putResourceGroups(value: GoogleOsConfigOsPolicyAssignmentOsPoliciesResourceGroups[] | cdktf.IResolvable) {
    this._resourceGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups.internalValue;
  }
}

export class GoogleOsConfigOsPolicyAssignmentOsPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigOsPolicyAssignmentOsPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigOsPolicyAssignmentOsPoliciesOutputReference {
    return new GoogleOsConfigOsPolicyAssignmentOsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudget {
  /**
  * Specifies a fixed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#fixed GoogleOsConfigOsPolicyAssignment#fixed}
  */
  readonly fixed?: number;
  /**
  * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#percent GoogleOsConfigOsPolicyAssignment#percent}
  */
  readonly percent?: number;
}

export function googleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetOutputReference | GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function googleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetOutputReference | GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed: {
      value: cdktf.numberToHclTerraform(struct!.fixed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percent = value.percent;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentRollout {
  /**
  * This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the 'disruption_budget' at least until this duration of time has passed after configuration changes are applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#min_wait_duration GoogleOsConfigOsPolicyAssignment#min_wait_duration}
  */
  readonly minWaitDuration: string;
  /**
  * disruption_budget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#disruption_budget GoogleOsConfigOsPolicyAssignment#disruption_budget}
  */
  readonly disruptionBudget: GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudget;
}

export function googleOsConfigOsPolicyAssignmentRolloutToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentRolloutOutputReference | GoogleOsConfigOsPolicyAssignmentRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_wait_duration: cdktf.stringToTerraform(struct!.minWaitDuration),
    disruption_budget: googleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetToTerraform(struct!.disruptionBudget),
  }
}


export function googleOsConfigOsPolicyAssignmentRolloutToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentRolloutOutputReference | GoogleOsConfigOsPolicyAssignmentRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_wait_duration: {
      value: cdktf.stringToHclTerraform(struct!.minWaitDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disruption_budget: {
      value: googleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetToHclTerraform(struct!.disruptionBudget),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigOsPolicyAssignmentRolloutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentRollout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minWaitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWaitDuration = this._minWaitDuration;
    }
    if (this._disruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptionBudget = this._disruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentRollout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minWaitDuration = undefined;
      this._disruptionBudget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minWaitDuration = value.minWaitDuration;
      this._disruptionBudget.internalValue = value.disruptionBudget;
    }
  }

  // min_wait_duration - computed: false, optional: false, required: true
  private _minWaitDuration?: string; 
  public get minWaitDuration() {
    return this.getStringAttribute('min_wait_duration');
  }
  public set minWaitDuration(value: string) {
    this._minWaitDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minWaitDurationInput() {
    return this._minWaitDuration;
  }

  // disruption_budget - computed: false, optional: false, required: true
  private _disruptionBudget = new GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudgetOutputReference(this, "disruption_budget");
  public get disruptionBudget() {
    return this._disruptionBudget;
  }
  public putDisruptionBudget(value: GoogleOsConfigOsPolicyAssignmentRolloutDisruptionBudget) {
    this._disruptionBudget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionBudgetInput() {
    return this._disruptionBudget.internalValue;
  }
}
export interface GoogleOsConfigOsPolicyAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#create GoogleOsConfigOsPolicyAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#delete GoogleOsConfigOsPolicyAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#update GoogleOsConfigOsPolicyAssignment#update}
  */
  readonly update?: string;
}

export function googleOsConfigOsPolicyAssignmentTimeoutsToTerraform(struct?: GoogleOsConfigOsPolicyAssignmentTimeouts | cdktf.IResolvable): any {
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


export function googleOsConfigOsPolicyAssignmentTimeoutsToHclTerraform(struct?: GoogleOsConfigOsPolicyAssignmentTimeouts | cdktf.IResolvable): any {
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

export class GoogleOsConfigOsPolicyAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleOsConfigOsPolicyAssignmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleOsConfigOsPolicyAssignmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment google_os_config_os_policy_assignment}
*/
export class GoogleOsConfigOsPolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_os_config_os_policy_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleOsConfigOsPolicyAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleOsConfigOsPolicyAssignment to import
  * @param importFromId The id of the existing GoogleOsConfigOsPolicyAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleOsConfigOsPolicyAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_os_config_os_policy_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_os_config_os_policy_assignment google_os_config_os_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleOsConfigOsPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleOsConfigOsPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_os_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.14.0',
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
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._skipAwaitRollout = config.skipAwaitRollout;
    this._instanceFilter.internalValue = config.instanceFilter;
    this._osPolicies.internalValue = config.osPolicies;
    this._rollout.internalValue = config.rollout;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline - computed: true, optional: false, required: false
  public get baseline() {
    return this.getBooleanAttribute('baseline');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // revision_create_time - computed: true, optional: false, required: false
  public get revisionCreateTime() {
    return this.getStringAttribute('revision_create_time');
  }

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }

  // rollout_state - computed: true, optional: false, required: false
  public get rolloutState() {
    return this.getStringAttribute('rollout_state');
  }

  // skip_await_rollout - computed: false, optional: true, required: false
  private _skipAwaitRollout?: boolean | cdktf.IResolvable; 
  public get skipAwaitRollout() {
    return this.getBooleanAttribute('skip_await_rollout');
  }
  public set skipAwaitRollout(value: boolean | cdktf.IResolvable) {
    this._skipAwaitRollout = value;
  }
  public resetSkipAwaitRollout() {
    this._skipAwaitRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAwaitRolloutInput() {
    return this._skipAwaitRollout;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // instance_filter - computed: false, optional: false, required: true
  private _instanceFilter = new GoogleOsConfigOsPolicyAssignmentInstanceFilterOutputReference(this, "instance_filter");
  public get instanceFilter() {
    return this._instanceFilter;
  }
  public putInstanceFilter(value: GoogleOsConfigOsPolicyAssignmentInstanceFilter) {
    this._instanceFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFilterInput() {
    return this._instanceFilter.internalValue;
  }

  // os_policies - computed: false, optional: false, required: true
  private _osPolicies = new GoogleOsConfigOsPolicyAssignmentOsPoliciesList(this, "os_policies", false);
  public get osPolicies() {
    return this._osPolicies;
  }
  public putOsPolicies(value: GoogleOsConfigOsPolicyAssignmentOsPolicies[] | cdktf.IResolvable) {
    this._osPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osPoliciesInput() {
    return this._osPolicies.internalValue;
  }

  // rollout - computed: false, optional: false, required: true
  private _rollout = new GoogleOsConfigOsPolicyAssignmentRolloutOutputReference(this, "rollout");
  public get rollout() {
    return this._rollout;
  }
  public putRollout(value: GoogleOsConfigOsPolicyAssignmentRollout) {
    this._rollout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleOsConfigOsPolicyAssignmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleOsConfigOsPolicyAssignmentTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      skip_await_rollout: cdktf.booleanToTerraform(this._skipAwaitRollout),
      instance_filter: googleOsConfigOsPolicyAssignmentInstanceFilterToTerraform(this._instanceFilter.internalValue),
      os_policies: cdktf.listMapper(googleOsConfigOsPolicyAssignmentOsPoliciesToTerraform, true)(this._osPolicies.internalValue),
      rollout: googleOsConfigOsPolicyAssignmentRolloutToTerraform(this._rollout.internalValue),
      timeouts: googleOsConfigOsPolicyAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      skip_await_rollout: {
        value: cdktf.booleanToHclTerraform(this._skipAwaitRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_filter: {
        value: googleOsConfigOsPolicyAssignmentInstanceFilterToHclTerraform(this._instanceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigOsPolicyAssignmentInstanceFilterList",
      },
      os_policies: {
        value: cdktf.listMapperHcl(googleOsConfigOsPolicyAssignmentOsPoliciesToHclTerraform, true)(this._osPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigOsPolicyAssignmentOsPoliciesList",
      },
      rollout: {
        value: googleOsConfigOsPolicyAssignmentRolloutToHclTerraform(this._rollout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigOsPolicyAssignmentRolloutList",
      },
      timeouts: {
        value: googleOsConfigOsPolicyAssignmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleOsConfigOsPolicyAssignmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
