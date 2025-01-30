/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleOsConfigGuestPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the guest policy. Length of the description is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#description GoogleOsConfigGuestPolicies#description}
  */
  readonly description?: string;
  /**
  * The etag for this guest policy. If this is provided on update, it must match the server's etag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#etag GoogleOsConfigGuestPolicies#etag}
  */
  readonly etag?: string;
  /**
  * The logical name of the guest policy in the project with the following restrictions:
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  * * Must be unique within the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#guest_policy_id GoogleOsConfigGuestPolicies#guest_policy_id}
  */
  readonly guestPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#project GoogleOsConfigGuestPolicies#project}
  */
  readonly project?: string;
  /**
  * assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#assignment GoogleOsConfigGuestPolicies#assignment}
  */
  readonly assignment: GoogleOsConfigGuestPoliciesAssignment;
  /**
  * package_repositories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#package_repositories GoogleOsConfigGuestPolicies#package_repositories}
  */
  readonly packageRepositories?: GoogleOsConfigGuestPoliciesPackageRepositories[] | cdktf.IResolvable;
  /**
  * packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#packages GoogleOsConfigGuestPolicies#packages}
  */
  readonly packages?: GoogleOsConfigGuestPoliciesPackages[] | cdktf.IResolvable;
  /**
  * recipes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#recipes GoogleOsConfigGuestPolicies#recipes}
  */
  readonly recipes?: GoogleOsConfigGuestPoliciesRecipes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#timeouts GoogleOsConfigGuestPolicies#timeouts}
  */
  readonly timeouts?: GoogleOsConfigGuestPoliciesTimeouts;
}
export interface GoogleOsConfigGuestPoliciesAssignmentGroupLabels {
  /**
  * Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#labels GoogleOsConfigGuestPolicies#labels}
  */
  readonly labels: { [key: string]: string };
}

export function googleOsConfigGuestPoliciesAssignmentGroupLabelsToTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentGroupLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function googleOsConfigGuestPoliciesAssignmentGroupLabelsToHclTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentGroupLabels | cdktf.IResolvable): any {
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

export class GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigGuestPoliciesAssignmentGroupLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesAssignmentGroupLabels | cdktf.IResolvable | undefined) {
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

  // labels - computed: false, optional: false, required: true
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}

export class GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigGuestPoliciesAssignmentGroupLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference {
    return new GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigGuestPoliciesAssignmentOsTypes {
  /**
  * Targets VM instances with OS Inventory enabled and having the following OS architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#os_architecture GoogleOsConfigGuestPolicies#os_architecture}
  */
  readonly osArchitecture?: string;
  /**
  * Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#os_short_name GoogleOsConfigGuestPolicies#os_short_name}
  */
  readonly osShortName?: string;
  /**
  * Targets VM instances with OS Inventory enabled and having the following following OS version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#os_version GoogleOsConfigGuestPolicies#os_version}
  */
  readonly osVersion?: string;
}

export function googleOsConfigGuestPoliciesAssignmentOsTypesToTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentOsTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_architecture: cdktf.stringToTerraform(struct!.osArchitecture),
    os_short_name: cdktf.stringToTerraform(struct!.osShortName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
  }
}


export function googleOsConfigGuestPoliciesAssignmentOsTypesToHclTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentOsTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_architecture: {
      value: cdktf.stringToHclTerraform(struct!.osArchitecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigGuestPoliciesAssignmentOsTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osArchitecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.osArchitecture = this._osArchitecture;
    }
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesAssignmentOsTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osArchitecture = undefined;
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
      this._osArchitecture = value.osArchitecture;
      this._osShortName = value.osShortName;
      this._osVersion = value.osVersion;
    }
  }

  // os_architecture - computed: false, optional: true, required: false
  private _osArchitecture?: string; 
  public get osArchitecture() {
    return this.getStringAttribute('os_architecture');
  }
  public set osArchitecture(value: string) {
    this._osArchitecture = value;
  }
  public resetOsArchitecture() {
    this._osArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osArchitectureInput() {
    return this._osArchitecture;
  }

  // os_short_name - computed: false, optional: true, required: false
  private _osShortName?: string; 
  public get osShortName() {
    return this.getStringAttribute('os_short_name');
  }
  public set osShortName(value: string) {
    this._osShortName = value;
  }
  public resetOsShortName() {
    this._osShortName = undefined;
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

export class GoogleOsConfigGuestPoliciesAssignmentOsTypesList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigGuestPoliciesAssignmentOsTypes[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference {
    return new GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigGuestPoliciesAssignment {
  /**
  * Targets VM instances whose name starts with one of these prefixes.
  * Like labels, this is another way to group VM instances when targeting configs,
  * for example prefix="prod-".
  * Only supported for project-level policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#instance_name_prefixes GoogleOsConfigGuestPolicies#instance_name_prefixes}
  */
  readonly instanceNamePrefixes?: string[];
  /**
  * Targets any of the instances specified. Instances are specified by their URI in the form
  * zones/[ZONE]/instances/[INSTANCE_NAME].
  * Instance targeting is uncommon and is supported to facilitate the management of changes
  * by the instance or to target specific VM instances for development and testing.
  * Only supported for project-level policies and must reference instances within this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#instances GoogleOsConfigGuestPolicies#instances}
  */
  readonly instances?: string[];
  /**
  * Targets instances in any of these zones. Leave empty to target instances in any zone.
  * Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#zones GoogleOsConfigGuestPolicies#zones}
  */
  readonly zones?: string[];
  /**
  * group_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#group_labels GoogleOsConfigGuestPolicies#group_labels}
  */
  readonly groupLabels?: GoogleOsConfigGuestPoliciesAssignmentGroupLabels[] | cdktf.IResolvable;
  /**
  * os_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#os_types GoogleOsConfigGuestPolicies#os_types}
  */
  readonly osTypes?: GoogleOsConfigGuestPoliciesAssignmentOsTypes[] | cdktf.IResolvable;
}

export function googleOsConfigGuestPoliciesAssignmentToTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentOutputReference | GoogleOsConfigGuestPoliciesAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceNamePrefixes),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    group_labels: cdktf.listMapper(googleOsConfigGuestPoliciesAssignmentGroupLabelsToTerraform, true)(struct!.groupLabels),
    os_types: cdktf.listMapper(googleOsConfigGuestPoliciesAssignmentOsTypesToTerraform, true)(struct!.osTypes),
  }
}


export function googleOsConfigGuestPoliciesAssignmentToHclTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentOutputReference | GoogleOsConfigGuestPoliciesAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_name_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceNamePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_labels: {
      value: cdktf.listMapperHcl(googleOsConfigGuestPoliciesAssignmentGroupLabelsToHclTerraform, true)(struct!.groupLabels),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList",
    },
    os_types: {
      value: cdktf.listMapperHcl(googleOsConfigGuestPoliciesAssignmentOsTypesToHclTerraform, true)(struct!.osTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesAssignmentOsTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNamePrefixes = this._instanceNamePrefixes;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._groupLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLabels = this._groupLabels?.internalValue;
    }
    if (this._osTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osTypes = this._osTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesAssignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceNamePrefixes = undefined;
      this._instances = undefined;
      this._zones = undefined;
      this._groupLabels.internalValue = undefined;
      this._osTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceNamePrefixes = value.instanceNamePrefixes;
      this._instances = value.instances;
      this._zones = value.zones;
      this._groupLabels.internalValue = value.groupLabels;
      this._osTypes.internalValue = value.osTypes;
    }
  }

  // instance_name_prefixes - computed: false, optional: true, required: false
  private _instanceNamePrefixes?: string[]; 
  public get instanceNamePrefixes() {
    return this.getListAttribute('instance_name_prefixes');
  }
  public set instanceNamePrefixes(value: string[]) {
    this._instanceNamePrefixes = value;
  }
  public resetInstanceNamePrefixes() {
    this._instanceNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNamePrefixesInput() {
    return this._instanceNamePrefixes;
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // group_labels - computed: false, optional: true, required: false
  private _groupLabels = new GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList(this, "group_labels", false);
  public get groupLabels() {
    return this._groupLabels;
  }
  public putGroupLabels(value: GoogleOsConfigGuestPoliciesAssignmentGroupLabels[] | cdktf.IResolvable) {
    this._groupLabels.internalValue = value;
  }
  public resetGroupLabels() {
    this._groupLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsInput() {
    return this._groupLabels.internalValue;
  }

  // os_types - computed: false, optional: true, required: false
  private _osTypes = new GoogleOsConfigGuestPoliciesAssignmentOsTypesList(this, "os_types", false);
  public get osTypes() {
    return this._osTypes;
  }
  public putOsTypes(value: GoogleOsConfigGuestPoliciesAssignmentOsTypes[] | cdktf.IResolvable) {
    this._osTypes.internalValue = value;
  }
  public resetOsTypes() {
    this._osTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypesInput() {
    return this._osTypes.internalValue;
  }
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesApt {
  /**
  * Type of archive files in this repository. The default behavior is DEB. Default value: "DEB" Possible values: ["DEB", "DEB_SRC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#archive_type GoogleOsConfigGuestPolicies#archive_type}
  */
  readonly archiveType?: string;
  /**
  * List of components for this repository. Must contain at least one item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#components GoogleOsConfigGuestPolicies#components}
  */
  readonly components: string[];
  /**
  * Distribution of this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#distribution GoogleOsConfigGuestPolicies#distribution}
  */
  readonly distribution: string;
  /**
  * URI of the key file for this repository. The agent maintains a keyring at
  * /etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg containing all the keys in any applied guest policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#gpg_key GoogleOsConfigGuestPolicies#gpg_key}
  */
  readonly gpgKey?: string;
  /**
  * URI for this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#uri GoogleOsConfigGuestPolicies#uri}
  */
  readonly uri: string;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesAptToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesApt): any {
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


export function googleOsConfigGuestPoliciesPackageRepositoriesAptToHclTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesApt): any {
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

export class GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositoriesApt | undefined {
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositoriesApt | undefined) {
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

  // archive_type - computed: false, optional: true, required: false
  private _archiveType?: string; 
  public get archiveType() {
    return this.getStringAttribute('archive_type');
  }
  public set archiveType(value: string) {
    this._archiveType = value;
  }
  public resetArchiveType() {
    this._archiveType = undefined;
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
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesGoo {
  /**
  * The name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}
  */
  readonly name: string;
  /**
  * The url of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#url GoogleOsConfigGuestPolicies#url}
  */
  readonly url: string;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesGooToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function googleOsConfigGuestPoliciesPackageRepositoriesGooToHclTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesGoo): any {
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

export class GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositoriesGoo | undefined {
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositoriesGoo | undefined) {
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
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesYum {
  /**
  * The location of the repository directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#base_url GoogleOsConfigGuestPolicies#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#display_name GoogleOsConfigGuestPolicies#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#gpg_keys GoogleOsConfigGuestPolicies#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * A one word, unique name for this repository. This is the repo id in the Yum config file and also the displayName
  * if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesYumToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesYum): any {
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


export function googleOsConfigGuestPoliciesPackageRepositoriesYumToHclTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesYum): any {
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

export class GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositoriesYum | undefined {
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositoriesYum | undefined) {
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
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesZypper {
  /**
  * The location of the repository directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#base_url GoogleOsConfigGuestPolicies#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#display_name GoogleOsConfigGuestPolicies#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#gpg_keys GoogleOsConfigGuestPolicies#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * A one word, unique name for this repository. This is the repo id in the zypper config file and also the displayName
  * if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesZypperToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesZypper): any {
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


export function googleOsConfigGuestPoliciesPackageRepositoriesZypperToHclTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesZypper): any {
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

export class GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositoriesZypper | undefined {
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositoriesZypper | undefined) {
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
export interface GoogleOsConfigGuestPoliciesPackageRepositories {
  /**
  * apt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#apt GoogleOsConfigGuestPolicies#apt}
  */
  readonly apt?: GoogleOsConfigGuestPoliciesPackageRepositoriesApt;
  /**
  * goo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#goo GoogleOsConfigGuestPolicies#goo}
  */
  readonly goo?: GoogleOsConfigGuestPoliciesPackageRepositoriesGoo;
  /**
  * yum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#yum GoogleOsConfigGuestPolicies#yum}
  */
  readonly yum?: GoogleOsConfigGuestPoliciesPackageRepositoriesYum;
  /**
  * zypper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#zypper GoogleOsConfigGuestPolicies#zypper}
  */
  readonly zypper?: GoogleOsConfigGuestPoliciesPackageRepositoriesZypper;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apt: googleOsConfigGuestPoliciesPackageRepositoriesAptToTerraform(struct!.apt),
    goo: googleOsConfigGuestPoliciesPackageRepositoriesGooToTerraform(struct!.goo),
    yum: googleOsConfigGuestPoliciesPackageRepositoriesYumToTerraform(struct!.yum),
    zypper: googleOsConfigGuestPoliciesPackageRepositoriesZypperToTerraform(struct!.zypper),
  }
}


export function googleOsConfigGuestPoliciesPackageRepositoriesToHclTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apt: {
      value: googleOsConfigGuestPoliciesPackageRepositoriesAptToHclTerraform(struct!.apt),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesPackageRepositoriesAptList",
    },
    goo: {
      value: googleOsConfigGuestPoliciesPackageRepositoriesGooToHclTerraform(struct!.goo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesPackageRepositoriesGooList",
    },
    yum: {
      value: googleOsConfigGuestPoliciesPackageRepositoriesYumToHclTerraform(struct!.yum),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesPackageRepositoriesYumList",
    },
    zypper: {
      value: googleOsConfigGuestPoliciesPackageRepositoriesZypperToHclTerraform(struct!.zypper),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesPackageRepositoriesZypperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apt.internalValue = undefined;
      this._goo.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apt.internalValue = value.apt;
      this._goo.internalValue = value.goo;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: GoogleOsConfigGuestPoliciesPackageRepositoriesApt) {
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
  private _goo = new GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference(this, "goo");
  public get goo() {
    return this._goo;
  }
  public putGoo(value: GoogleOsConfigGuestPoliciesPackageRepositoriesGoo) {
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
  private _yum = new GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: GoogleOsConfigGuestPoliciesPackageRepositoriesYum) {
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
  private _zypper = new GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: GoogleOsConfigGuestPoliciesPackageRepositoriesZypper) {
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

export class GoogleOsConfigGuestPoliciesPackageRepositoriesList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigGuestPoliciesPackageRepositories[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference {
    return new GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigGuestPoliciesPackages {
  /**
  * The desiredState the agent should maintain for this package. The default is to ensure the package is installed. Possible values: ["INSTALLED", "UPDATED", "REMOVED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#desired_state GoogleOsConfigGuestPolicies#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Type of package manager that can be used to install this package. If a system does not have the package manager,
  * the package is not installed or removed no error message is returned. By default, or if you specify ANY,
  * the agent attempts to install and remove this package using the default package manager.
  * This is useful when creating a policy that applies to different types of systems.
  * The default behavior is ANY. Default value: "ANY" Possible values: ["ANY", "APT", "YUM", "ZYPPER", "GOO"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#manager GoogleOsConfigGuestPolicies#manager}
  */
  readonly manager?: string;
  /**
  * The name of the package. A package is uniquely identified for conflict validation
  * by checking the package name and the manager(s) that the package targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}
  */
  readonly name: string;
}

export function googleOsConfigGuestPoliciesPackagesToTerraform(struct?: GoogleOsConfigGuestPoliciesPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    manager: cdktf.stringToTerraform(struct!.manager),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleOsConfigGuestPoliciesPackagesToHclTerraform(struct?: GoogleOsConfigGuestPoliciesPackages | cdktf.IResolvable): any {
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
    manager: {
      value: cdktf.stringToHclTerraform(struct!.manager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleOsConfigGuestPoliciesPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigGuestPoliciesPackages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._manager !== undefined) {
      hasAnyValues = true;
      internalValueResult.manager = this._manager;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
      this._manager = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
      this._manager = value.manager;
      this._name = value.name;
    }
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // manager - computed: false, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
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

export class GoogleOsConfigGuestPoliciesPackagesList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigGuestPoliciesPackages[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigGuestPoliciesPackagesOutputReference {
    return new GoogleOsConfigGuestPoliciesPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesArtifactsGcs {
  /**
  * Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
  * this value would be my-bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#bucket GoogleOsConfigGuestPolicies#bucket}
  */
  readonly bucket?: string;
  /**
  * Must be provided if allowInsecure is false. Generation number of the Google Cloud Storage object.
  * https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be 1234567.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#generation GoogleOsConfigGuestPolicies#generation}
  */
  readonly generation?: number;
  /**
  * Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
  * this value would be foo/bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#object GoogleOsConfigGuestPolicies#object}
  */
  readonly object?: string;
}

export function googleOsConfigGuestPoliciesRecipesArtifactsGcsToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference | GoogleOsConfigGuestPoliciesRecipesArtifactsGcs): any {
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


export function googleOsConfigGuestPoliciesRecipesArtifactsGcsToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference | GoogleOsConfigGuestPoliciesRecipesArtifactsGcs): any {
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

export class GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesArtifactsGcs | undefined {
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesArtifactsGcs | undefined) {
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

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
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

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesArtifactsRemote {
  /**
  * Must be provided if allowInsecure is false. SHA256 checksum in hex format, to compare to the checksum of the artifact.
  * If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any
  * of the steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#check_sum GoogleOsConfigGuestPolicies#check_sum}
  */
  readonly checkSum?: string;
  /**
  * URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#uri GoogleOsConfigGuestPolicies#uri}
  */
  readonly uri?: string;
}

export function googleOsConfigGuestPoliciesRecipesArtifactsRemoteToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference | GoogleOsConfigGuestPoliciesRecipesArtifactsRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_sum: cdktf.stringToTerraform(struct!.checkSum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleOsConfigGuestPoliciesRecipesArtifactsRemoteToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference | GoogleOsConfigGuestPoliciesRecipesArtifactsRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_sum: {
      value: cdktf.stringToHclTerraform(struct!.checkSum),
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

export class GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesArtifactsRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkSum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkSum = this._checkSum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesArtifactsRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkSum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkSum = value.checkSum;
      this._uri = value.uri;
    }
  }

  // check_sum - computed: false, optional: true, required: false
  private _checkSum?: string; 
  public get checkSum() {
    return this.getStringAttribute('check_sum');
  }
  public set checkSum(value: string) {
    this._checkSum = value;
  }
  public resetCheckSum() {
    this._checkSum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSumInput() {
    return this._checkSum;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesArtifacts {
  /**
  * Defaults to false. When false, recipes are subject to validations based on the artifact type:
  * Remote: A checksum must be specified, and only protocols with transport-layer security are permitted.
  * GCS: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#allow_insecure GoogleOsConfigGuestPolicies#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * Id of the artifact, which the installation and update steps of this recipe can reference.
  * Artifacts in a recipe cannot have the same id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#gcs GoogleOsConfigGuestPolicies#gcs}
  */
  readonly gcs?: GoogleOsConfigGuestPoliciesRecipesArtifactsGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#remote GoogleOsConfigGuestPolicies#remote}
  */
  readonly remote?: GoogleOsConfigGuestPoliciesRecipesArtifactsRemote;
}

export function googleOsConfigGuestPoliciesRecipesArtifactsToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    id: cdktf.stringToTerraform(struct!.id),
    gcs: googleOsConfigGuestPoliciesRecipesArtifactsGcsToTerraform(struct!.gcs),
    remote: googleOsConfigGuestPoliciesRecipesArtifactsRemoteToTerraform(struct!.remote),
  }
}


export function googleOsConfigGuestPoliciesRecipesArtifactsToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifacts | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: googleOsConfigGuestPoliciesRecipesArtifactsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesArtifactsGcsList",
    },
    remote: {
      value: googleOsConfigGuestPoliciesRecipesArtifactsRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInsecure = undefined;
      this._id = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInsecure = value.allowInsecure;
      this._id = value.id;
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

  // gcs - computed: false, optional: true, required: false
  private _gcs = new GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: GoogleOsConfigGuestPoliciesRecipesArtifactsGcs) {
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
  private _remote = new GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: GoogleOsConfigGuestPoliciesRecipesArtifactsRemote) {
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

export class GoogleOsConfigGuestPoliciesRecipesArtifactsList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigGuestPoliciesRecipesArtifacts[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference {
    return new GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction {
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Directory to extract archive to. Defaults to / on Linux or C:\ on Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}
  */
  readonly destination?: string;
  /**
  * The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#type GoogleOsConfigGuestPolicies#type}
  */
  readonly type: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    destination: cdktf.stringToTerraform(struct!.destination),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
      this._destination = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
      this._destination = value.destination;
      this._type = value.type;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation {
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
  }
}


export function googleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy {
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The absolute path on the instance to put the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}
  */
  readonly destination: string;
  /**
  * Whether to allow this step to overwrite existing files.If this is false and the file already exists the file
  * is not overwritten and the step is considered a success. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#overwrite GoogleOsConfigGuestPolicies#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users
  * for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit
  * number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
  * bit corresponds to the execute permission. Default behavior is 755.
  * 
  * Below are some examples of permissions and their associated values:
  * read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#permissions GoogleOsConfigGuestPolicies#permissions}
  */
  readonly permissions?: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsFileCopyToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    destination: cdktf.stringToTerraform(struct!.destination),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function googleOsConfigGuestPoliciesRecipesInstallStepsFileCopyToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
      this._destination = undefined;
      this._overwrite = undefined;
      this._permissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
      this._destination = value.destination;
      this._overwrite = value.overwrite;
      this._permissions = value.permissions;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec {
  /**
  * A list of possible return values that the program can return to indicate a success. Defaults to [0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: string;
  /**
  * Arguments to be passed to the provided executable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#args GoogleOsConfigGuestPolicies#args}
  */
  readonly args?: string[];
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId?: string;
  /**
  * The absolute path of the file on the local filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#local_path GoogleOsConfigGuestPolicies#local_path}
  */
  readonly localPath?: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsFileExecToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.stringToTerraform(struct!.allowedExitCodes),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    local_path: cdktf.stringToTerraform(struct!.localPath),
  }
}


export function googleOsConfigGuestPoliciesRecipesInstallStepsFileExecToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_exit_codes: {
      value: cdktf.stringToHclTerraform(struct!.allowedExitCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._args = undefined;
      this._artifactId = undefined;
      this._localPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._args = value.args;
      this._artifactId = value.artifactId;
      this._localPath = value.localPath;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: string; 
  public get allowedExitCodes() {
    return this.getStringAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: string) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
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

  // artifact_id - computed: false, optional: true, required: false
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  public resetArtifactId() {
    this._artifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
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
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation {
  /**
  * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The flags to use when installing the MSI. Defaults to the install flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#flags GoogleOsConfigGuestPolicies#flags}
  */
  readonly flags?: string[];
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedExitCodes),
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
  }
}


export function googleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_exit_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedExitCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._artifactId = undefined;
      this._flags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._artifactId = value.artifactId;
      this._flags = value.flags;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation {
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
  }
}


export function googleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun {
  /**
  * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,
  * which likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#interpreter GoogleOsConfigGuestPolicies#interpreter}
  */
  readonly interpreter?: string;
  /**
  * The shell script to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#script GoogleOsConfigGuestPolicies#script}
  */
  readonly script: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsScriptRunToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedExitCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function googleOsConfigGuestPoliciesRecipesInstallStepsScriptRunToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_exit_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedExitCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    interpreter: {
      value: cdktf.stringToHclTerraform(struct!.interpreter),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._interpreter = undefined;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._interpreter = value.interpreter;
      this._script = value.script;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallSteps {
  /**
  * archive_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#archive_extraction GoogleOsConfigGuestPolicies#archive_extraction}
  */
  readonly archiveExtraction?: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction;
  /**
  * dpkg_installation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#dpkg_installation GoogleOsConfigGuestPolicies#dpkg_installation}
  */
  readonly dpkgInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation;
  /**
  * file_copy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#file_copy GoogleOsConfigGuestPolicies#file_copy}
  */
  readonly fileCopy?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy;
  /**
  * file_exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#file_exec GoogleOsConfigGuestPolicies#file_exec}
  */
  readonly fileExec?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec;
  /**
  * msi_installation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#msi_installation GoogleOsConfigGuestPolicies#msi_installation}
  */
  readonly msiInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation;
  /**
  * rpm_installation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#rpm_installation GoogleOsConfigGuestPolicies#rpm_installation}
  */
  readonly rpmInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation;
  /**
  * script_run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#script_run GoogleOsConfigGuestPolicies#script_run}
  */
  readonly scriptRun?: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_extraction: googleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionToTerraform(struct!.archiveExtraction),
    dpkg_installation: googleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationToTerraform(struct!.dpkgInstallation),
    file_copy: googleOsConfigGuestPoliciesRecipesInstallStepsFileCopyToTerraform(struct!.fileCopy),
    file_exec: googleOsConfigGuestPoliciesRecipesInstallStepsFileExecToTerraform(struct!.fileExec),
    msi_installation: googleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationToTerraform(struct!.msiInstallation),
    rpm_installation: googleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationToTerraform(struct!.rpmInstallation),
    script_run: googleOsConfigGuestPoliciesRecipesInstallStepsScriptRunToTerraform(struct!.scriptRun),
  }
}


export function googleOsConfigGuestPoliciesRecipesInstallStepsToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_extraction: {
      value: googleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionToHclTerraform(struct!.archiveExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionList",
    },
    dpkg_installation: {
      value: googleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationToHclTerraform(struct!.dpkgInstallation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationList",
    },
    file_copy: {
      value: googleOsConfigGuestPoliciesRecipesInstallStepsFileCopyToHclTerraform(struct!.fileCopy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyList",
    },
    file_exec: {
      value: googleOsConfigGuestPoliciesRecipesInstallStepsFileExecToHclTerraform(struct!.fileExec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecList",
    },
    msi_installation: {
      value: googleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationToHclTerraform(struct!.msiInstallation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationList",
    },
    rpm_installation: {
      value: googleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationToHclTerraform(struct!.rpmInstallation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationList",
    },
    script_run: {
      value: googleOsConfigGuestPoliciesRecipesInstallStepsScriptRunToHclTerraform(struct!.scriptRun),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveExtraction = this._archiveExtraction?.internalValue;
    }
    if (this._dpkgInstallation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpkgInstallation = this._dpkgInstallation?.internalValue;
    }
    if (this._fileCopy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCopy = this._fileCopy?.internalValue;
    }
    if (this._fileExec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExec = this._fileExec?.internalValue;
    }
    if (this._msiInstallation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msiInstallation = this._msiInstallation?.internalValue;
    }
    if (this._rpmInstallation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpmInstallation = this._rpmInstallation?.internalValue;
    }
    if (this._scriptRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptRun = this._scriptRun?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveExtraction.internalValue = undefined;
      this._dpkgInstallation.internalValue = undefined;
      this._fileCopy.internalValue = undefined;
      this._fileExec.internalValue = undefined;
      this._msiInstallation.internalValue = undefined;
      this._rpmInstallation.internalValue = undefined;
      this._scriptRun.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveExtraction.internalValue = value.archiveExtraction;
      this._dpkgInstallation.internalValue = value.dpkgInstallation;
      this._fileCopy.internalValue = value.fileCopy;
      this._fileExec.internalValue = value.fileExec;
      this._msiInstallation.internalValue = value.msiInstallation;
      this._rpmInstallation.internalValue = value.rpmInstallation;
      this._scriptRun.internalValue = value.scriptRun;
    }
  }

  // archive_extraction - computed: false, optional: true, required: false
  private _archiveExtraction = new GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference(this, "archive_extraction");
  public get archiveExtraction() {
    return this._archiveExtraction;
  }
  public putArchiveExtraction(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction) {
    this._archiveExtraction.internalValue = value;
  }
  public resetArchiveExtraction() {
    this._archiveExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveExtractionInput() {
    return this._archiveExtraction.internalValue;
  }

  // dpkg_installation - computed: false, optional: true, required: false
  private _dpkgInstallation = new GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference(this, "dpkg_installation");
  public get dpkgInstallation() {
    return this._dpkgInstallation;
  }
  public putDpkgInstallation(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation) {
    this._dpkgInstallation.internalValue = value;
  }
  public resetDpkgInstallation() {
    this._dpkgInstallation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpkgInstallationInput() {
    return this._dpkgInstallation.internalValue;
  }

  // file_copy - computed: false, optional: true, required: false
  private _fileCopy = new GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference(this, "file_copy");
  public get fileCopy() {
    return this._fileCopy;
  }
  public putFileCopy(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy) {
    this._fileCopy.internalValue = value;
  }
  public resetFileCopy() {
    this._fileCopy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCopyInput() {
    return this._fileCopy.internalValue;
  }

  // file_exec - computed: false, optional: true, required: false
  private _fileExec = new GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference(this, "file_exec");
  public get fileExec() {
    return this._fileExec;
  }
  public putFileExec(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec) {
    this._fileExec.internalValue = value;
  }
  public resetFileExec() {
    this._fileExec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExecInput() {
    return this._fileExec.internalValue;
  }

  // msi_installation - computed: false, optional: true, required: false
  private _msiInstallation = new GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference(this, "msi_installation");
  public get msiInstallation() {
    return this._msiInstallation;
  }
  public putMsiInstallation(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation) {
    this._msiInstallation.internalValue = value;
  }
  public resetMsiInstallation() {
    this._msiInstallation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiInstallationInput() {
    return this._msiInstallation.internalValue;
  }

  // rpm_installation - computed: false, optional: true, required: false
  private _rpmInstallation = new GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference(this, "rpm_installation");
  public get rpmInstallation() {
    return this._rpmInstallation;
  }
  public putRpmInstallation(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation) {
    this._rpmInstallation.internalValue = value;
  }
  public resetRpmInstallation() {
    this._rpmInstallation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpmInstallationInput() {
    return this._rpmInstallation.internalValue;
  }

  // script_run - computed: false, optional: true, required: false
  private _scriptRun = new GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference(this, "script_run");
  public get scriptRun() {
    return this._scriptRun;
  }
  public putScriptRun(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun) {
    this._scriptRun.internalValue = value;
  }
  public resetScriptRun() {
    this._scriptRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptRunInput() {
    return this._scriptRun.internalValue;
  }
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigGuestPoliciesRecipesInstallSteps[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference {
    return new GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction {
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Directory to extract archive to. Defaults to / on Linux or C:\ on Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}
  */
  readonly destination?: string;
  /**
  * The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#type GoogleOsConfigGuestPolicies#type}
  */
  readonly type: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    destination: cdktf.stringToTerraform(struct!.destination),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
      this._destination = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
      this._destination = value.destination;
      this._type = value.type;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation {
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
  }
}


export function googleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy {
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The absolute path on the instance to put the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}
  */
  readonly destination: string;
  /**
  * Whether to allow this step to overwrite existing files.If this is false and the file already exists the file
  * is not overwritten and the step is considered a success. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#overwrite GoogleOsConfigGuestPolicies#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users
  * for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit
  * number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
  * bit corresponds to the execute permission. Default behavior is 755.
  * 
  * Below are some examples of permissions and their associated values:
  * read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#permissions GoogleOsConfigGuestPolicies#permissions}
  */
  readonly permissions?: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    destination: cdktf.stringToTerraform(struct!.destination),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function googleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
      this._destination = undefined;
      this._overwrite = undefined;
      this._permissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
      this._destination = value.destination;
      this._overwrite = value.overwrite;
      this._permissions = value.permissions;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec {
  /**
  * A list of possible return values that the program can return to indicate a success. Defaults to [0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * Arguments to be passed to the provided executable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#args GoogleOsConfigGuestPolicies#args}
  */
  readonly args?: string[];
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId?: string;
  /**
  * The absolute path of the file on the local filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#local_path GoogleOsConfigGuestPolicies#local_path}
  */
  readonly localPath?: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsFileExecToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedExitCodes),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    local_path: cdktf.stringToTerraform(struct!.localPath),
  }
}


export function googleOsConfigGuestPoliciesRecipesUpdateStepsFileExecToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_exit_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedExitCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._args = undefined;
      this._artifactId = undefined;
      this._localPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._args = value.args;
      this._artifactId = value.artifactId;
      this._localPath = value.localPath;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
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

  // artifact_id - computed: false, optional: true, required: false
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  public resetArtifactId() {
    this._artifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
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
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation {
  /**
  * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The flags to use when installing the MSI. Defaults to the install flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#flags GoogleOsConfigGuestPolicies#flags}
  */
  readonly flags?: string[];
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedExitCodes),
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
  }
}


export function googleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_exit_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedExitCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._artifactId = undefined;
      this._flags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._artifactId = value.artifactId;
      this._flags = value.flags;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation {
  /**
  * The id of the relevant artifact in the recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
  }
}


export function googleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun {
  /**
  * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,
  * which likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#interpreter GoogleOsConfigGuestPolicies#interpreter}
  */
  readonly interpreter?: string;
  /**
  * The shell script to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#script GoogleOsConfigGuestPolicies#script}
  */
  readonly script: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedExitCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function googleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_exit_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedExitCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    interpreter: {
      value: cdktf.stringToHclTerraform(struct!.interpreter),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._interpreter = undefined;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._interpreter = value.interpreter;
      this._script = value.script;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateSteps {
  /**
  * archive_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#archive_extraction GoogleOsConfigGuestPolicies#archive_extraction}
  */
  readonly archiveExtraction?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction;
  /**
  * dpkg_installation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#dpkg_installation GoogleOsConfigGuestPolicies#dpkg_installation}
  */
  readonly dpkgInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation;
  /**
  * file_copy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#file_copy GoogleOsConfigGuestPolicies#file_copy}
  */
  readonly fileCopy?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy;
  /**
  * file_exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#file_exec GoogleOsConfigGuestPolicies#file_exec}
  */
  readonly fileExec?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec;
  /**
  * msi_installation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#msi_installation GoogleOsConfigGuestPolicies#msi_installation}
  */
  readonly msiInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation;
  /**
  * rpm_installation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#rpm_installation GoogleOsConfigGuestPolicies#rpm_installation}
  */
  readonly rpmInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation;
  /**
  * script_run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#script_run GoogleOsConfigGuestPolicies#script_run}
  */
  readonly scriptRun?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_extraction: googleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionToTerraform(struct!.archiveExtraction),
    dpkg_installation: googleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationToTerraform(struct!.dpkgInstallation),
    file_copy: googleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyToTerraform(struct!.fileCopy),
    file_exec: googleOsConfigGuestPoliciesRecipesUpdateStepsFileExecToTerraform(struct!.fileExec),
    msi_installation: googleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationToTerraform(struct!.msiInstallation),
    rpm_installation: googleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationToTerraform(struct!.rpmInstallation),
    script_run: googleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunToTerraform(struct!.scriptRun),
  }
}


export function googleOsConfigGuestPoliciesRecipesUpdateStepsToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_extraction: {
      value: googleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionToHclTerraform(struct!.archiveExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionList",
    },
    dpkg_installation: {
      value: googleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationToHclTerraform(struct!.dpkgInstallation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationList",
    },
    file_copy: {
      value: googleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyToHclTerraform(struct!.fileCopy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyList",
    },
    file_exec: {
      value: googleOsConfigGuestPoliciesRecipesUpdateStepsFileExecToHclTerraform(struct!.fileExec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecList",
    },
    msi_installation: {
      value: googleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationToHclTerraform(struct!.msiInstallation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationList",
    },
    rpm_installation: {
      value: googleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationToHclTerraform(struct!.rpmInstallation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationList",
    },
    script_run: {
      value: googleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunToHclTerraform(struct!.scriptRun),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveExtraction = this._archiveExtraction?.internalValue;
    }
    if (this._dpkgInstallation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpkgInstallation = this._dpkgInstallation?.internalValue;
    }
    if (this._fileCopy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCopy = this._fileCopy?.internalValue;
    }
    if (this._fileExec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExec = this._fileExec?.internalValue;
    }
    if (this._msiInstallation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msiInstallation = this._msiInstallation?.internalValue;
    }
    if (this._rpmInstallation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpmInstallation = this._rpmInstallation?.internalValue;
    }
    if (this._scriptRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptRun = this._scriptRun?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveExtraction.internalValue = undefined;
      this._dpkgInstallation.internalValue = undefined;
      this._fileCopy.internalValue = undefined;
      this._fileExec.internalValue = undefined;
      this._msiInstallation.internalValue = undefined;
      this._rpmInstallation.internalValue = undefined;
      this._scriptRun.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveExtraction.internalValue = value.archiveExtraction;
      this._dpkgInstallation.internalValue = value.dpkgInstallation;
      this._fileCopy.internalValue = value.fileCopy;
      this._fileExec.internalValue = value.fileExec;
      this._msiInstallation.internalValue = value.msiInstallation;
      this._rpmInstallation.internalValue = value.rpmInstallation;
      this._scriptRun.internalValue = value.scriptRun;
    }
  }

  // archive_extraction - computed: false, optional: true, required: false
  private _archiveExtraction = new GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference(this, "archive_extraction");
  public get archiveExtraction() {
    return this._archiveExtraction;
  }
  public putArchiveExtraction(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction) {
    this._archiveExtraction.internalValue = value;
  }
  public resetArchiveExtraction() {
    this._archiveExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveExtractionInput() {
    return this._archiveExtraction.internalValue;
  }

  // dpkg_installation - computed: false, optional: true, required: false
  private _dpkgInstallation = new GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference(this, "dpkg_installation");
  public get dpkgInstallation() {
    return this._dpkgInstallation;
  }
  public putDpkgInstallation(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation) {
    this._dpkgInstallation.internalValue = value;
  }
  public resetDpkgInstallation() {
    this._dpkgInstallation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpkgInstallationInput() {
    return this._dpkgInstallation.internalValue;
  }

  // file_copy - computed: false, optional: true, required: false
  private _fileCopy = new GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference(this, "file_copy");
  public get fileCopy() {
    return this._fileCopy;
  }
  public putFileCopy(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy) {
    this._fileCopy.internalValue = value;
  }
  public resetFileCopy() {
    this._fileCopy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCopyInput() {
    return this._fileCopy.internalValue;
  }

  // file_exec - computed: false, optional: true, required: false
  private _fileExec = new GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference(this, "file_exec");
  public get fileExec() {
    return this._fileExec;
  }
  public putFileExec(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec) {
    this._fileExec.internalValue = value;
  }
  public resetFileExec() {
    this._fileExec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExecInput() {
    return this._fileExec.internalValue;
  }

  // msi_installation - computed: false, optional: true, required: false
  private _msiInstallation = new GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference(this, "msi_installation");
  public get msiInstallation() {
    return this._msiInstallation;
  }
  public putMsiInstallation(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation) {
    this._msiInstallation.internalValue = value;
  }
  public resetMsiInstallation() {
    this._msiInstallation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiInstallationInput() {
    return this._msiInstallation.internalValue;
  }

  // rpm_installation - computed: false, optional: true, required: false
  private _rpmInstallation = new GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference(this, "rpm_installation");
  public get rpmInstallation() {
    return this._rpmInstallation;
  }
  public putRpmInstallation(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation) {
    this._rpmInstallation.internalValue = value;
  }
  public resetRpmInstallation() {
    this._rpmInstallation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpmInstallationInput() {
    return this._rpmInstallation.internalValue;
  }

  // script_run - computed: false, optional: true, required: false
  private _scriptRun = new GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference(this, "script_run");
  public get scriptRun() {
    return this._scriptRun;
  }
  public putScriptRun(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun) {
    this._scriptRun.internalValue = value;
  }
  public resetScriptRun() {
    this._scriptRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptRunInput() {
    return this._scriptRun.internalValue;
  }
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigGuestPoliciesRecipesUpdateSteps[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference {
    return new GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigGuestPoliciesRecipes {
  /**
  * Default is INSTALLED. The desired state the agent should maintain for this recipe.
  * 
  * INSTALLED: The software recipe is installed on the instance but won't be updated to new versions.
  * INSTALLED_KEEP_UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version,
  * if a higher version of the recipe is assigned to this instance.
  * REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. Default value: "INSTALLED" Possible values: ["INSTALLED", "UPDATED", "REMOVED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#desired_state GoogleOsConfigGuestPolicies#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.
  * Names are also used to identify resources which helps to determine whether guest policies have conflicts.
  * This means that requests to create multiple recipes with the same name and version are rejected since they
  * could potentially have conflicting assignments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}
  */
  readonly name: string;
  /**
  * The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#version GoogleOsConfigGuestPolicies#version}
  */
  readonly version?: string;
  /**
  * artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#artifacts GoogleOsConfigGuestPolicies#artifacts}
  */
  readonly artifacts?: GoogleOsConfigGuestPoliciesRecipesArtifacts[] | cdktf.IResolvable;
  /**
  * install_steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#install_steps GoogleOsConfigGuestPolicies#install_steps}
  */
  readonly installSteps?: GoogleOsConfigGuestPoliciesRecipesInstallSteps[] | cdktf.IResolvable;
  /**
  * update_steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#update_steps GoogleOsConfigGuestPolicies#update_steps}
  */
  readonly updateSteps?: GoogleOsConfigGuestPoliciesRecipesUpdateSteps[] | cdktf.IResolvable;
}

export function googleOsConfigGuestPoliciesRecipesToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    artifacts: cdktf.listMapper(googleOsConfigGuestPoliciesRecipesArtifactsToTerraform, true)(struct!.artifacts),
    install_steps: cdktf.listMapper(googleOsConfigGuestPoliciesRecipesInstallStepsToTerraform, true)(struct!.installSteps),
    update_steps: cdktf.listMapper(googleOsConfigGuestPoliciesRecipesUpdateStepsToTerraform, true)(struct!.updateSteps),
  }
}


export function googleOsConfigGuestPoliciesRecipesToHclTerraform(struct?: GoogleOsConfigGuestPoliciesRecipes | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifacts: {
      value: cdktf.listMapperHcl(googleOsConfigGuestPoliciesRecipesArtifactsToHclTerraform, true)(struct!.artifacts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesArtifactsList",
    },
    install_steps: {
      value: cdktf.listMapperHcl(googleOsConfigGuestPoliciesRecipesInstallStepsToHclTerraform, true)(struct!.installSteps),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesInstallStepsList",
    },
    update_steps: {
      value: cdktf.listMapperHcl(googleOsConfigGuestPoliciesRecipesUpdateStepsToHclTerraform, true)(struct!.updateSteps),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigGuestPoliciesRecipesUpdateStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigGuestPoliciesRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._artifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifacts = this._artifacts?.internalValue;
    }
    if (this._installSteps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installSteps = this._installSteps?.internalValue;
    }
    if (this._updateSteps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSteps = this._updateSteps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
      this._name = undefined;
      this._version = undefined;
      this._artifacts.internalValue = undefined;
      this._installSteps.internalValue = undefined;
      this._updateSteps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
      this._name = value.name;
      this._version = value.version;
      this._artifacts.internalValue = value.artifacts;
      this._installSteps.internalValue = value.installSteps;
      this._updateSteps.internalValue = value.updateSteps;
    }
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // artifacts - computed: false, optional: true, required: false
  private _artifacts = new GoogleOsConfigGuestPoliciesRecipesArtifactsList(this, "artifacts", false);
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: GoogleOsConfigGuestPoliciesRecipesArtifacts[] | cdktf.IResolvable) {
    this._artifacts.internalValue = value;
  }
  public resetArtifacts() {
    this._artifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // install_steps - computed: false, optional: true, required: false
  private _installSteps = new GoogleOsConfigGuestPoliciesRecipesInstallStepsList(this, "install_steps", false);
  public get installSteps() {
    return this._installSteps;
  }
  public putInstallSteps(value: GoogleOsConfigGuestPoliciesRecipesInstallSteps[] | cdktf.IResolvable) {
    this._installSteps.internalValue = value;
  }
  public resetInstallSteps() {
    this._installSteps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installStepsInput() {
    return this._installSteps.internalValue;
  }

  // update_steps - computed: false, optional: true, required: false
  private _updateSteps = new GoogleOsConfigGuestPoliciesRecipesUpdateStepsList(this, "update_steps", false);
  public get updateSteps() {
    return this._updateSteps;
  }
  public putUpdateSteps(value: GoogleOsConfigGuestPoliciesRecipesUpdateSteps[] | cdktf.IResolvable) {
    this._updateSteps.internalValue = value;
  }
  public resetUpdateSteps() {
    this._updateSteps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStepsInput() {
    return this._updateSteps.internalValue;
  }
}

export class GoogleOsConfigGuestPoliciesRecipesList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigGuestPoliciesRecipes[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigGuestPoliciesRecipesOutputReference {
    return new GoogleOsConfigGuestPoliciesRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigGuestPoliciesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#create GoogleOsConfigGuestPolicies#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#delete GoogleOsConfigGuestPolicies#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#update GoogleOsConfigGuestPolicies#update}
  */
  readonly update?: string;
}

export function googleOsConfigGuestPoliciesTimeoutsToTerraform(struct?: GoogleOsConfigGuestPoliciesTimeouts | cdktf.IResolvable): any {
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


export function googleOsConfigGuestPoliciesTimeoutsToHclTerraform(struct?: GoogleOsConfigGuestPoliciesTimeouts | cdktf.IResolvable): any {
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

export class GoogleOsConfigGuestPoliciesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies google_os_config_guest_policies}
*/
export class GoogleOsConfigGuestPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_os_config_guest_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleOsConfigGuestPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleOsConfigGuestPolicies to import
  * @param importFromId The id of the existing GoogleOsConfigGuestPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleOsConfigGuestPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_os_config_guest_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_guest_policies google_os_config_guest_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleOsConfigGuestPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleOsConfigGuestPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_guest_policies',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.18.1',
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
    this._etag = config.etag;
    this._guestPolicyId = config.guestPolicyId;
    this._id = config.id;
    this._project = config.project;
    this._assignment.internalValue = config.assignment;
    this._packageRepositories.internalValue = config.packageRepositories;
    this._packages.internalValue = config.packages;
    this._recipes.internalValue = config.recipes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // guest_policy_id - computed: false, optional: false, required: true
  private _guestPolicyId?: string; 
  public get guestPolicyId() {
    return this.getStringAttribute('guest_policy_id');
  }
  public set guestPolicyId(value: string) {
    this._guestPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestPolicyIdInput() {
    return this._guestPolicyId;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // assignment - computed: false, optional: false, required: true
  private _assignment = new GoogleOsConfigGuestPoliciesAssignmentOutputReference(this, "assignment");
  public get assignment() {
    return this._assignment;
  }
  public putAssignment(value: GoogleOsConfigGuestPoliciesAssignment) {
    this._assignment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment.internalValue;
  }

  // package_repositories - computed: false, optional: true, required: false
  private _packageRepositories = new GoogleOsConfigGuestPoliciesPackageRepositoriesList(this, "package_repositories", false);
  public get packageRepositories() {
    return this._packageRepositories;
  }
  public putPackageRepositories(value: GoogleOsConfigGuestPoliciesPackageRepositories[] | cdktf.IResolvable) {
    this._packageRepositories.internalValue = value;
  }
  public resetPackageRepositories() {
    this._packageRepositories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRepositoriesInput() {
    return this._packageRepositories.internalValue;
  }

  // packages - computed: false, optional: true, required: false
  private _packages = new GoogleOsConfigGuestPoliciesPackagesList(this, "packages", false);
  public get packages() {
    return this._packages;
  }
  public putPackages(value: GoogleOsConfigGuestPoliciesPackages[] | cdktf.IResolvable) {
    this._packages.internalValue = value;
  }
  public resetPackages() {
    this._packages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
  }

  // recipes - computed: false, optional: true, required: false
  private _recipes = new GoogleOsConfigGuestPoliciesRecipesList(this, "recipes", false);
  public get recipes() {
    return this._recipes;
  }
  public putRecipes(value: GoogleOsConfigGuestPoliciesRecipes[] | cdktf.IResolvable) {
    this._recipes.internalValue = value;
  }
  public resetRecipes() {
    this._recipes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleOsConfigGuestPoliciesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleOsConfigGuestPoliciesTimeouts) {
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
      etag: cdktf.stringToTerraform(this._etag),
      guest_policy_id: cdktf.stringToTerraform(this._guestPolicyId),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      assignment: googleOsConfigGuestPoliciesAssignmentToTerraform(this._assignment.internalValue),
      package_repositories: cdktf.listMapper(googleOsConfigGuestPoliciesPackageRepositoriesToTerraform, true)(this._packageRepositories.internalValue),
      packages: cdktf.listMapper(googleOsConfigGuestPoliciesPackagesToTerraform, true)(this._packages.internalValue),
      recipes: cdktf.listMapper(googleOsConfigGuestPoliciesRecipesToTerraform, true)(this._recipes.internalValue),
      timeouts: googleOsConfigGuestPoliciesTimeoutsToTerraform(this._timeouts.internalValue),
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
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_policy_id: {
        value: cdktf.stringToHclTerraform(this._guestPolicyId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment: {
        value: googleOsConfigGuestPoliciesAssignmentToHclTerraform(this._assignment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigGuestPoliciesAssignmentList",
      },
      package_repositories: {
        value: cdktf.listMapperHcl(googleOsConfigGuestPoliciesPackageRepositoriesToHclTerraform, true)(this._packageRepositories.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigGuestPoliciesPackageRepositoriesList",
      },
      packages: {
        value: cdktf.listMapperHcl(googleOsConfigGuestPoliciesPackagesToHclTerraform, true)(this._packages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigGuestPoliciesPackagesList",
      },
      recipes: {
        value: cdktf.listMapperHcl(googleOsConfigGuestPoliciesRecipesToHclTerraform, true)(this._recipes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigGuestPoliciesRecipesList",
      },
      timeouts: {
        value: googleOsConfigGuestPoliciesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleOsConfigGuestPoliciesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
