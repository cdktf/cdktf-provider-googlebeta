/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleOsConfigPatchDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the patch deployment. Length of the description is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#description GoogleOsConfigPatchDeployment#description}
  */
  readonly description?: string;
  /**
  * Duration of the patch. After the duration ends, the patch times out.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#duration GoogleOsConfigPatchDeployment#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name for the patch deployment in the project. When creating a name the following rules apply:
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  * * Must be unique within the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#patch_deployment_id GoogleOsConfigPatchDeployment#patch_deployment_id}
  */
  readonly patchDeploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#project GoogleOsConfigPatchDeployment#project}
  */
  readonly project?: string;
  /**
  * instance_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#instance_filter GoogleOsConfigPatchDeployment#instance_filter}
  */
  readonly instanceFilter: GoogleOsConfigPatchDeploymentInstanceFilter;
  /**
  * one_time_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#one_time_schedule GoogleOsConfigPatchDeployment#one_time_schedule}
  */
  readonly oneTimeSchedule?: GoogleOsConfigPatchDeploymentOneTimeSchedule;
  /**
  * patch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#patch_config GoogleOsConfigPatchDeployment#patch_config}
  */
  readonly patchConfig?: GoogleOsConfigPatchDeploymentPatchConfig;
  /**
  * recurring_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#recurring_schedule GoogleOsConfigPatchDeployment#recurring_schedule}
  */
  readonly recurringSchedule?: GoogleOsConfigPatchDeploymentRecurringSchedule;
  /**
  * rollout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#rollout GoogleOsConfigPatchDeployment#rollout}
  */
  readonly rollout?: GoogleOsConfigPatchDeploymentRollout;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#timeouts GoogleOsConfigPatchDeployment#timeouts}
  */
  readonly timeouts?: GoogleOsConfigPatchDeploymentTimeouts;
}
export interface GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels {
  /**
  * Compute Engine instance labels that must be present for a VM instance to be targeted by this filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#labels GoogleOsConfigPatchDeployment#labels}
  */
  readonly labels: { [key: string]: string };
}

export function googleOsConfigPatchDeploymentInstanceFilterGroupLabelsToTerraform(struct?: GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function googleOsConfigPatchDeploymentInstanceFilterGroupLabelsToHclTerraform(struct?: GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels | cdktf.IResolvable): any {
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

export class GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels | cdktf.IResolvable | undefined) {
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

export class GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference {
    return new GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOsConfigPatchDeploymentInstanceFilter {
  /**
  * Target all VM instances in the project. If true, no other criteria is permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#all GoogleOsConfigPatchDeployment#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group
  * VMs when targeting configs, for example prefix="prod-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#instance_name_prefixes GoogleOsConfigPatchDeployment#instance_name_prefixes}
  */
  readonly instanceNamePrefixes?: string[];
  /**
  * Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}',
  * 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or
  * 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#instances GoogleOsConfigPatchDeployment#instances}
  */
  readonly instances?: string[];
  /**
  * Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#zones GoogleOsConfigPatchDeployment#zones}
  */
  readonly zones?: string[];
  /**
  * group_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#group_labels GoogleOsConfigPatchDeployment#group_labels}
  */
  readonly groupLabels?: GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels[] | cdktf.IResolvable;
}

export function googleOsConfigPatchDeploymentInstanceFilterToTerraform(struct?: GoogleOsConfigPatchDeploymentInstanceFilterOutputReference | GoogleOsConfigPatchDeploymentInstanceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    instance_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceNamePrefixes),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    group_labels: cdktf.listMapper(googleOsConfigPatchDeploymentInstanceFilterGroupLabelsToTerraform, true)(struct!.groupLabels),
  }
}


export function googleOsConfigPatchDeploymentInstanceFilterToHclTerraform(struct?: GoogleOsConfigPatchDeploymentInstanceFilterOutputReference | GoogleOsConfigPatchDeploymentInstanceFilter): any {
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
      value: cdktf.listMapperHcl(googleOsConfigPatchDeploymentInstanceFilterGroupLabelsToHclTerraform, true)(struct!.groupLabels),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentInstanceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentInstanceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentInstanceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._instanceNamePrefixes = undefined;
      this._instances = undefined;
      this._zones = undefined;
      this._groupLabels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._instanceNamePrefixes = value.instanceNamePrefixes;
      this._instances = value.instances;
      this._zones = value.zones;
      this._groupLabels.internalValue = value.groupLabels;
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
  private _groupLabels = new GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList(this, "group_labels", false);
  public get groupLabels() {
    return this._groupLabels;
  }
  public putGroupLabels(value: GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels[] | cdktf.IResolvable) {
    this._groupLabels.internalValue = value;
  }
  public resetGroupLabels() {
    this._groupLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsInput() {
    return this._groupLabels.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentOneTimeSchedule {
  /**
  * The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,
  * accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#execute_time GoogleOsConfigPatchDeployment#execute_time}
  */
  readonly executeTime: string;
}

export function googleOsConfigPatchDeploymentOneTimeScheduleToTerraform(struct?: GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference | GoogleOsConfigPatchDeploymentOneTimeSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
  }
}


export function googleOsConfigPatchDeploymentOneTimeScheduleToHclTerraform(struct?: GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference | GoogleOsConfigPatchDeploymentOneTimeSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_time: {
      value: cdktf.stringToHclTerraform(struct!.executeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentOneTimeSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTime = this._executeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentOneTimeSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeTime = value.executeTime;
    }
  }

  // execute_time - computed: false, optional: false, required: true
  private _executeTime?: string; 
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }
  public set executeTime(value: string) {
    this._executeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeInput() {
    return this._executeTime;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigApt {
  /**
  * List of packages to exclude from update. These packages will be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of packages to be updated. These are the only packages that will be updated.
  * If these packages are not installed, they will be ignored. This field cannot be specified with
  * any other patch configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#exclusive_packages GoogleOsConfigPatchDeployment#exclusive_packages}
  */
  readonly exclusivePackages?: string[];
  /**
  * By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#type GoogleOsConfigPatchDeployment#type}
  */
  readonly type?: string;
}

export function googleOsConfigPatchDeploymentPatchConfigAptToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference | GoogleOsConfigPatchDeploymentPatchConfigApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    exclusive_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusivePackages),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigAptToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference | GoogleOsConfigPatchDeploymentPatchConfigApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclusive_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusivePackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._exclusivePackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusivePackages = this._exclusivePackages;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._exclusivePackages = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._exclusivePackages = value.exclusivePackages;
      this._type = value.type;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // exclusive_packages - computed: false, optional: true, required: false
  private _exclusivePackages?: string[]; 
  public get exclusivePackages() {
    return this.getListAttribute('exclusive_packages');
  }
  public set exclusivePackages(value: string[]) {
    this._exclusivePackages = value;
  }
  public resetExclusivePackages() {
    this._exclusivePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePackagesInput() {
    return this._exclusivePackages;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigGoo {
  /**
  * goo update settings. Use this setting to override the default goo patch rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#enabled GoogleOsConfigPatchDeployment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleOsConfigPatchDeploymentPatchConfigGooToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference | GoogleOsConfigPatchDeploymentPatchConfigGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigGooToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference | GoogleOsConfigPatchDeploymentPatchConfigGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigGoo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigGoo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}
  */
  readonly object: string;
}

export function googleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject): any {
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
    generation_number: {
      value: cdktf.stringToHclTerraform(struct!.generationNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationNumber = this._generationNumber;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generationNumber = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generationNumber = value.generationNumber;
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

  // generation_number - computed: false, optional: false, required: true
  private _generationNumber?: string; 
  public get generationNumber() {
    return this.getStringAttribute('generation_number');
  }
  public set generationNumber(value: string) {
    this._generationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationNumberInput() {
    return this._generationNumber;
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
export interface GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
  * be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject;
}

export function googleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: googleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_success_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedSuccessCodes),
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
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_object: {
      value: googleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToHclTerraform(struct!.gcsObject),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSuccessCodes = this._allowedSuccessCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcsObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObject = this._gcsObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSuccessCodes = undefined;
      this._interpreter = undefined;
      this._localPath = undefined;
      this._gcsObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSuccessCodes = value.allowedSuccessCodes;
      this._interpreter = value.interpreter;
      this._localPath = value.localPath;
      this._gcsObject.internalValue = value.gcsObject;
    }
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[]; 
  public get allowedSuccessCodes() {
    return this.getNumberListAttribute('allowed_success_codes');
  }
  public set allowedSuccessCodes(value: number[]) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes;
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

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject = new GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference(this, "gcs_object");
  public get gcsObject() {
    return this._gcsObject;
  }
  public putGcsObject(value: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject) {
    this._gcsObject.internalValue = value;
  }
  public resetGcsObject() {
    this._gcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}
  */
  readonly object: string;
}

export function googleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject): any {
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
    generation_number: {
      value: cdktf.stringToHclTerraform(struct!.generationNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationNumber = this._generationNumber;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generationNumber = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generationNumber = value.generationNumber;
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

  // generation_number - computed: false, optional: false, required: true
  private _generationNumber?: string; 
  public get generationNumber() {
    return this.getStringAttribute('generation_number');
  }
  public set generationNumber(value: string) {
    this._generationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationNumberInput() {
    return this._generationNumber;
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
export interface GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
  * be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject;
}

export function googleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: googleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_success_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedSuccessCodes),
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
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_object: {
      value: googleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToHclTerraform(struct!.gcsObject),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSuccessCodes = this._allowedSuccessCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcsObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObject = this._gcsObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSuccessCodes = undefined;
      this._interpreter = undefined;
      this._localPath = undefined;
      this._gcsObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSuccessCodes = value.allowedSuccessCodes;
      this._interpreter = value.interpreter;
      this._localPath = value.localPath;
      this._gcsObject.internalValue = value.gcsObject;
    }
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[]; 
  public get allowedSuccessCodes() {
    return this.getNumberListAttribute('allowed_success_codes');
  }
  public set allowedSuccessCodes(value: number[]) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes;
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

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject = new GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference(this, "gcs_object");
  public get gcsObject() {
    return this._gcsObject;
  }
  public putGcsObject(value: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject) {
    this._gcsObject.internalValue = value;
  }
  public resetGcsObject() {
    this._gcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigPostStep {
  /**
  * linux_exec_step_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#linux_exec_step_config GoogleOsConfigPatchDeployment#linux_exec_step_config}
  */
  readonly linuxExecStepConfig?: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig;
  /**
  * windows_exec_step_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#windows_exec_step_config GoogleOsConfigPatchDeployment#windows_exec_step_config}
  */
  readonly windowsExecStepConfig?: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig;
}

export function googleOsConfigPatchDeploymentPatchConfigPostStepToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux_exec_step_config: googleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToTerraform(struct!.linuxExecStepConfig),
    windows_exec_step_config: googleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToTerraform(struct!.windowsExecStepConfig),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPostStepToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPostStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linux_exec_step_config: {
      value: googleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToHclTerraform(struct!.linuxExecStepConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigList",
    },
    windows_exec_step_config: {
      value: googleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToHclTerraform(struct!.windowsExecStepConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPostStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linuxExecStepConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxExecStepConfig = this._linuxExecStepConfig?.internalValue;
    }
    if (this._windowsExecStepConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsExecStepConfig = this._windowsExecStepConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPostStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linuxExecStepConfig.internalValue = undefined;
      this._windowsExecStepConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linuxExecStepConfig.internalValue = value.linuxExecStepConfig;
      this._windowsExecStepConfig.internalValue = value.windowsExecStepConfig;
    }
  }

  // linux_exec_step_config - computed: false, optional: true, required: false
  private _linuxExecStepConfig = new GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference(this, "linux_exec_step_config");
  public get linuxExecStepConfig() {
    return this._linuxExecStepConfig;
  }
  public putLinuxExecStepConfig(value: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig) {
    this._linuxExecStepConfig.internalValue = value;
  }
  public resetLinuxExecStepConfig() {
    this._linuxExecStepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxExecStepConfigInput() {
    return this._linuxExecStepConfig.internalValue;
  }

  // windows_exec_step_config - computed: false, optional: true, required: false
  private _windowsExecStepConfig = new GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference(this, "windows_exec_step_config");
  public get windowsExecStepConfig() {
    return this._windowsExecStepConfig;
  }
  public putWindowsExecStepConfig(value: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig) {
    this._windowsExecStepConfig.internalValue = value;
  }
  public resetWindowsExecStepConfig() {
    this._windowsExecStepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsExecStepConfigInput() {
    return this._windowsExecStepConfig.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}
  */
  readonly object: string;
}

export function googleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject): any {
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
    generation_number: {
      value: cdktf.stringToHclTerraform(struct!.generationNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationNumber = this._generationNumber;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generationNumber = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generationNumber = value.generationNumber;
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

  // generation_number - computed: false, optional: false, required: true
  private _generationNumber?: string; 
  public get generationNumber() {
    return this.getStringAttribute('generation_number');
  }
  public set generationNumber(value: string) {
    this._generationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationNumberInput() {
    return this._generationNumber;
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
export interface GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
  * be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject;
}

export function googleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: googleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_success_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedSuccessCodes),
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
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_object: {
      value: googleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToHclTerraform(struct!.gcsObject),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSuccessCodes = this._allowedSuccessCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcsObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObject = this._gcsObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSuccessCodes = undefined;
      this._interpreter = undefined;
      this._localPath = undefined;
      this._gcsObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSuccessCodes = value.allowedSuccessCodes;
      this._interpreter = value.interpreter;
      this._localPath = value.localPath;
      this._gcsObject.internalValue = value.gcsObject;
    }
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[]; 
  public get allowedSuccessCodes() {
    return this.getNumberListAttribute('allowed_success_codes');
  }
  public set allowedSuccessCodes(value: number[]) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes;
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

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject = new GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference(this, "gcs_object");
  public get gcsObject() {
    return this._gcsObject;
  }
  public putGcsObject(value: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject) {
    this._gcsObject.internalValue = value;
  }
  public resetGcsObject() {
    this._gcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}
  */
  readonly object: string;
}

export function googleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject): any {
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
    generation_number: {
      value: cdktf.stringToHclTerraform(struct!.generationNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationNumber = this._generationNumber;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generationNumber = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generationNumber = value.generationNumber;
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

  // generation_number - computed: false, optional: false, required: true
  private _generationNumber?: string; 
  public get generationNumber() {
    return this.getStringAttribute('generation_number');
  }
  public set generationNumber(value: string) {
    this._generationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationNumberInput() {
    return this._generationNumber;
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
export interface GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
  * be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject;
}

export function googleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: googleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_success_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedSuccessCodes),
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
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_object: {
      value: googleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToHclTerraform(struct!.gcsObject),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSuccessCodes = this._allowedSuccessCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcsObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObject = this._gcsObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSuccessCodes = undefined;
      this._interpreter = undefined;
      this._localPath = undefined;
      this._gcsObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSuccessCodes = value.allowedSuccessCodes;
      this._interpreter = value.interpreter;
      this._localPath = value.localPath;
      this._gcsObject.internalValue = value.gcsObject;
    }
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[]; 
  public get allowedSuccessCodes() {
    return this.getNumberListAttribute('allowed_success_codes');
  }
  public set allowedSuccessCodes(value: number[]) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes;
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

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject = new GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference(this, "gcs_object");
  public get gcsObject() {
    return this._gcsObject;
  }
  public putGcsObject(value: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject) {
    this._gcsObject.internalValue = value;
  }
  public resetGcsObject() {
    this._gcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigPreStep {
  /**
  * linux_exec_step_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#linux_exec_step_config GoogleOsConfigPatchDeployment#linux_exec_step_config}
  */
  readonly linuxExecStepConfig?: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig;
  /**
  * windows_exec_step_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#windows_exec_step_config GoogleOsConfigPatchDeployment#windows_exec_step_config}
  */
  readonly windowsExecStepConfig?: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig;
}

export function googleOsConfigPatchDeploymentPatchConfigPreStepToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux_exec_step_config: googleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToTerraform(struct!.linuxExecStepConfig),
    windows_exec_step_config: googleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToTerraform(struct!.windowsExecStepConfig),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigPreStepToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference | GoogleOsConfigPatchDeploymentPatchConfigPreStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linux_exec_step_config: {
      value: googleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToHclTerraform(struct!.linuxExecStepConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigList",
    },
    windows_exec_step_config: {
      value: googleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToHclTerraform(struct!.windowsExecStepConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigPreStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linuxExecStepConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxExecStepConfig = this._linuxExecStepConfig?.internalValue;
    }
    if (this._windowsExecStepConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsExecStepConfig = this._windowsExecStepConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigPreStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linuxExecStepConfig.internalValue = undefined;
      this._windowsExecStepConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linuxExecStepConfig.internalValue = value.linuxExecStepConfig;
      this._windowsExecStepConfig.internalValue = value.windowsExecStepConfig;
    }
  }

  // linux_exec_step_config - computed: false, optional: true, required: false
  private _linuxExecStepConfig = new GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference(this, "linux_exec_step_config");
  public get linuxExecStepConfig() {
    return this._linuxExecStepConfig;
  }
  public putLinuxExecStepConfig(value: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig) {
    this._linuxExecStepConfig.internalValue = value;
  }
  public resetLinuxExecStepConfig() {
    this._linuxExecStepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxExecStepConfigInput() {
    return this._linuxExecStepConfig.internalValue;
  }

  // windows_exec_step_config - computed: false, optional: true, required: false
  private _windowsExecStepConfig = new GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference(this, "windows_exec_step_config");
  public get windowsExecStepConfig() {
    return this._windowsExecStepConfig;
  }
  public putWindowsExecStepConfig(value: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig) {
    this._windowsExecStepConfig.internalValue = value;
  }
  public resetWindowsExecStepConfig() {
    this._windowsExecStepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsExecStepConfigInput() {
    return this._windowsExecStepConfig.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate {
  /**
  * Only apply updates of these windows update classifications. If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#classifications GoogleOsConfigPatchDeployment#classifications}
  */
  readonly classifications?: string[];
  /**
  * List of KBs to exclude from update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of kbs to be updated. These are the only patches that will be updated.
  * This field must not be used with other patch configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#exclusive_patches GoogleOsConfigPatchDeployment#exclusive_patches}
  */
  readonly exclusivePatches?: string[];
}

export function googleOsConfigPatchDeploymentPatchConfigWindowsUpdateToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference | GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classifications),
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    exclusive_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusivePatches),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigWindowsUpdateToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference | GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classifications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclusive_patches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusivePatches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications;
    }
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._exclusivePatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusivePatches = this._exclusivePatches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classifications = undefined;
      this._excludes = undefined;
      this._exclusivePatches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classifications = value.classifications;
      this._excludes = value.excludes;
      this._exclusivePatches = value.exclusivePatches;
    }
  }

  // classifications - computed: false, optional: true, required: false
  private _classifications?: string[]; 
  public get classifications() {
    return this.getListAttribute('classifications');
  }
  public set classifications(value: string[]) {
    this._classifications = value;
  }
  public resetClassifications() {
    this._classifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // exclusive_patches - computed: false, optional: true, required: false
  private _exclusivePatches?: string[]; 
  public get exclusivePatches() {
    return this.getListAttribute('exclusive_patches');
  }
  public set exclusivePatches(value: string[]) {
    this._exclusivePatches = value;
  }
  public resetExclusivePatches() {
    this._exclusivePatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePatchesInput() {
    return this._exclusivePatches;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigYum {
  /**
  * List of packages to exclude from update. These packages will be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of packages to be updated. These are the only packages that will be updated.
  * If these packages are not installed, they will be ignored. This field cannot be specified with
  * any other patch configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#exclusive_packages GoogleOsConfigPatchDeployment#exclusive_packages}
  */
  readonly exclusivePackages?: string[];
  /**
  * Will cause patch to run yum update-minimal instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#minimal GoogleOsConfigPatchDeployment#minimal}
  */
  readonly minimal?: boolean | cdktf.IResolvable;
  /**
  * Adds the --security flag to yum update. Not supported on all platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#security GoogleOsConfigPatchDeployment#security}
  */
  readonly security?: boolean | cdktf.IResolvable;
}

export function googleOsConfigPatchDeploymentPatchConfigYumToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference | GoogleOsConfigPatchDeploymentPatchConfigYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    exclusive_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusivePackages),
    minimal: cdktf.booleanToTerraform(struct!.minimal),
    security: cdktf.booleanToTerraform(struct!.security),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigYumToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference | GoogleOsConfigPatchDeploymentPatchConfigYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclusive_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusivePackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    minimal: {
      value: cdktf.booleanToHclTerraform(struct!.minimal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security: {
      value: cdktf.booleanToHclTerraform(struct!.security),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._exclusivePackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusivePackages = this._exclusivePackages;
    }
    if (this._minimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimal = this._minimal;
    }
    if (this._security !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._exclusivePackages = undefined;
      this._minimal = undefined;
      this._security = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._exclusivePackages = value.exclusivePackages;
      this._minimal = value.minimal;
      this._security = value.security;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // exclusive_packages - computed: false, optional: true, required: false
  private _exclusivePackages?: string[]; 
  public get exclusivePackages() {
    return this.getListAttribute('exclusive_packages');
  }
  public set exclusivePackages(value: string[]) {
    this._exclusivePackages = value;
  }
  public resetExclusivePackages() {
    this._exclusivePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePackagesInput() {
    return this._exclusivePackages;
  }

  // minimal - computed: false, optional: true, required: false
  private _minimal?: boolean | cdktf.IResolvable; 
  public get minimal() {
    return this.getBooleanAttribute('minimal');
  }
  public set minimal(value: boolean | cdktf.IResolvable) {
    this._minimal = value;
  }
  public resetMinimal() {
    this._minimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalInput() {
    return this._minimal;
  }

  // security - computed: false, optional: true, required: false
  private _security?: boolean | cdktf.IResolvable; 
  public get security() {
    return this.getBooleanAttribute('security');
  }
  public set security(value: boolean | cdktf.IResolvable) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfigZypper {
  /**
  * Install only patches with these categories. Common categories include security, recommended, and feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#categories GoogleOsConfigPatchDeployment#categories}
  */
  readonly categories?: string[];
  /**
  * List of packages to exclude from update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.
  * This field must not be used with any other patch configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#exclusive_patches GoogleOsConfigPatchDeployment#exclusive_patches}
  */
  readonly exclusivePatches?: string[];
  /**
  * Install only patches with these severities. Common severities include critical, important, moderate, and low.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#severities GoogleOsConfigPatchDeployment#severities}
  */
  readonly severities?: string[];
  /**
  * Adds the --with-optional flag to zypper patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#with_optional GoogleOsConfigPatchDeployment#with_optional}
  */
  readonly withOptional?: boolean | cdktf.IResolvable;
  /**
  * Adds the --with-update flag, to zypper patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#with_update GoogleOsConfigPatchDeployment#with_update}
  */
  readonly withUpdate?: boolean | cdktf.IResolvable;
}

export function googleOsConfigPatchDeploymentPatchConfigZypperToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference | GoogleOsConfigPatchDeploymentPatchConfigZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    exclusive_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusivePatches),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    with_optional: cdktf.booleanToTerraform(struct!.withOptional),
    with_update: cdktf.booleanToTerraform(struct!.withUpdate),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigZypperToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference | GoogleOsConfigPatchDeploymentPatchConfigZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclusive_patches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusivePatches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    with_optional: {
      value: cdktf.booleanToHclTerraform(struct!.withOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    with_update: {
      value: cdktf.booleanToHclTerraform(struct!.withUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfigZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._exclusivePatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusivePatches = this._exclusivePatches;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._withOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.withOptional = this._withOptional;
    }
    if (this._withUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.withUpdate = this._withUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfigZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categories = undefined;
      this._excludes = undefined;
      this._exclusivePatches = undefined;
      this._severities = undefined;
      this._withOptional = undefined;
      this._withUpdate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categories = value.categories;
      this._excludes = value.excludes;
      this._exclusivePatches = value.exclusivePatches;
      this._severities = value.severities;
      this._withOptional = value.withOptional;
      this._withUpdate = value.withUpdate;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // exclusive_patches - computed: false, optional: true, required: false
  private _exclusivePatches?: string[]; 
  public get exclusivePatches() {
    return this.getListAttribute('exclusive_patches');
  }
  public set exclusivePatches(value: string[]) {
    this._exclusivePatches = value;
  }
  public resetExclusivePatches() {
    this._exclusivePatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePatchesInput() {
    return this._exclusivePatches;
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // with_optional - computed: false, optional: true, required: false
  private _withOptional?: boolean | cdktf.IResolvable; 
  public get withOptional() {
    return this.getBooleanAttribute('with_optional');
  }
  public set withOptional(value: boolean | cdktf.IResolvable) {
    this._withOptional = value;
  }
  public resetWithOptional() {
    this._withOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withOptionalInput() {
    return this._withOptional;
  }

  // with_update - computed: false, optional: true, required: false
  private _withUpdate?: boolean | cdktf.IResolvable; 
  public get withUpdate() {
    return this.getBooleanAttribute('with_update');
  }
  public set withUpdate(value: boolean | cdktf.IResolvable) {
    this._withUpdate = value;
  }
  public resetWithUpdate() {
    this._withUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withUpdateInput() {
    return this._withUpdate;
  }
}
export interface GoogleOsConfigPatchDeploymentPatchConfig {
  /**
  * Allows the patch job to run on Managed instance groups (MIGs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#mig_instances_allowed GoogleOsConfigPatchDeployment#mig_instances_allowed}
  */
  readonly migInstancesAllowed?: boolean | cdktf.IResolvable;
  /**
  * Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#reboot_config GoogleOsConfigPatchDeployment#reboot_config}
  */
  readonly rebootConfig?: string;
  /**
  * apt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#apt GoogleOsConfigPatchDeployment#apt}
  */
  readonly apt?: GoogleOsConfigPatchDeploymentPatchConfigApt;
  /**
  * goo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#goo GoogleOsConfigPatchDeployment#goo}
  */
  readonly goo?: GoogleOsConfigPatchDeploymentPatchConfigGoo;
  /**
  * post_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#post_step GoogleOsConfigPatchDeployment#post_step}
  */
  readonly postStep?: GoogleOsConfigPatchDeploymentPatchConfigPostStep;
  /**
  * pre_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#pre_step GoogleOsConfigPatchDeployment#pre_step}
  */
  readonly preStep?: GoogleOsConfigPatchDeploymentPatchConfigPreStep;
  /**
  * windows_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#windows_update GoogleOsConfigPatchDeployment#windows_update}
  */
  readonly windowsUpdate?: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate;
  /**
  * yum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#yum GoogleOsConfigPatchDeployment#yum}
  */
  readonly yum?: GoogleOsConfigPatchDeploymentPatchConfigYum;
  /**
  * zypper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#zypper GoogleOsConfigPatchDeployment#zypper}
  */
  readonly zypper?: GoogleOsConfigPatchDeploymentPatchConfigZypper;
}

export function googleOsConfigPatchDeploymentPatchConfigToTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mig_instances_allowed: cdktf.booleanToTerraform(struct!.migInstancesAllowed),
    reboot_config: cdktf.stringToTerraform(struct!.rebootConfig),
    apt: googleOsConfigPatchDeploymentPatchConfigAptToTerraform(struct!.apt),
    goo: googleOsConfigPatchDeploymentPatchConfigGooToTerraform(struct!.goo),
    post_step: googleOsConfigPatchDeploymentPatchConfigPostStepToTerraform(struct!.postStep),
    pre_step: googleOsConfigPatchDeploymentPatchConfigPreStepToTerraform(struct!.preStep),
    windows_update: googleOsConfigPatchDeploymentPatchConfigWindowsUpdateToTerraform(struct!.windowsUpdate),
    yum: googleOsConfigPatchDeploymentPatchConfigYumToTerraform(struct!.yum),
    zypper: googleOsConfigPatchDeploymentPatchConfigZypperToTerraform(struct!.zypper),
  }
}


export function googleOsConfigPatchDeploymentPatchConfigToHclTerraform(struct?: GoogleOsConfigPatchDeploymentPatchConfigOutputReference | GoogleOsConfigPatchDeploymentPatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mig_instances_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.migInstancesAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reboot_config: {
      value: cdktf.stringToHclTerraform(struct!.rebootConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apt: {
      value: googleOsConfigPatchDeploymentPatchConfigAptToHclTerraform(struct!.apt),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigAptList",
    },
    goo: {
      value: googleOsConfigPatchDeploymentPatchConfigGooToHclTerraform(struct!.goo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigGooList",
    },
    post_step: {
      value: googleOsConfigPatchDeploymentPatchConfigPostStepToHclTerraform(struct!.postStep),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPostStepList",
    },
    pre_step: {
      value: googleOsConfigPatchDeploymentPatchConfigPreStepToHclTerraform(struct!.preStep),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigPreStepList",
    },
    windows_update: {
      value: googleOsConfigPatchDeploymentPatchConfigWindowsUpdateToHclTerraform(struct!.windowsUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateList",
    },
    yum: {
      value: googleOsConfigPatchDeploymentPatchConfigYumToHclTerraform(struct!.yum),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigYumList",
    },
    zypper: {
      value: googleOsConfigPatchDeploymentPatchConfigZypperToHclTerraform(struct!.zypper),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigZypperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentPatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentPatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._migInstancesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.migInstancesAllowed = this._migInstancesAllowed;
    }
    if (this._rebootConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootConfig = this._rebootConfig;
    }
    if (this._apt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apt = this._apt?.internalValue;
    }
    if (this._goo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goo = this._goo?.internalValue;
    }
    if (this._postStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStep = this._postStep?.internalValue;
    }
    if (this._preStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStep = this._preStep?.internalValue;
    }
    if (this._windowsUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsUpdate = this._windowsUpdate?.internalValue;
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

  public set internalValue(value: GoogleOsConfigPatchDeploymentPatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._migInstancesAllowed = undefined;
      this._rebootConfig = undefined;
      this._apt.internalValue = undefined;
      this._goo.internalValue = undefined;
      this._postStep.internalValue = undefined;
      this._preStep.internalValue = undefined;
      this._windowsUpdate.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._migInstancesAllowed = value.migInstancesAllowed;
      this._rebootConfig = value.rebootConfig;
      this._apt.internalValue = value.apt;
      this._goo.internalValue = value.goo;
      this._postStep.internalValue = value.postStep;
      this._preStep.internalValue = value.preStep;
      this._windowsUpdate.internalValue = value.windowsUpdate;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // mig_instances_allowed - computed: false, optional: true, required: false
  private _migInstancesAllowed?: boolean | cdktf.IResolvable; 
  public get migInstancesAllowed() {
    return this.getBooleanAttribute('mig_instances_allowed');
  }
  public set migInstancesAllowed(value: boolean | cdktf.IResolvable) {
    this._migInstancesAllowed = value;
  }
  public resetMigInstancesAllowed() {
    this._migInstancesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migInstancesAllowedInput() {
    return this._migInstancesAllowed;
  }

  // reboot_config - computed: false, optional: true, required: false
  private _rebootConfig?: string; 
  public get rebootConfig() {
    return this.getStringAttribute('reboot_config');
  }
  public set rebootConfig(value: string) {
    this._rebootConfig = value;
  }
  public resetRebootConfig() {
    this._rebootConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootConfigInput() {
    return this._rebootConfig;
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: GoogleOsConfigPatchDeploymentPatchConfigApt) {
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
  private _goo = new GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference(this, "goo");
  public get goo() {
    return this._goo;
  }
  public putGoo(value: GoogleOsConfigPatchDeploymentPatchConfigGoo) {
    this._goo.internalValue = value;
  }
  public resetGoo() {
    this._goo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gooInput() {
    return this._goo.internalValue;
  }

  // post_step - computed: false, optional: true, required: false
  private _postStep = new GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference(this, "post_step");
  public get postStep() {
    return this._postStep;
  }
  public putPostStep(value: GoogleOsConfigPatchDeploymentPatchConfigPostStep) {
    this._postStep.internalValue = value;
  }
  public resetPostStep() {
    this._postStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStepInput() {
    return this._postStep.internalValue;
  }

  // pre_step - computed: false, optional: true, required: false
  private _preStep = new GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference(this, "pre_step");
  public get preStep() {
    return this._preStep;
  }
  public putPreStep(value: GoogleOsConfigPatchDeploymentPatchConfigPreStep) {
    this._preStep.internalValue = value;
  }
  public resetPreStep() {
    this._preStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStepInput() {
    return this._preStep.internalValue;
  }

  // windows_update - computed: false, optional: true, required: false
  private _windowsUpdate = new GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference(this, "windows_update");
  public get windowsUpdate() {
    return this._windowsUpdate;
  }
  public putWindowsUpdate(value: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate) {
    this._windowsUpdate.internalValue = value;
  }
  public resetWindowsUpdate() {
    this._windowsUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUpdateInput() {
    return this._windowsUpdate.internalValue;
  }

  // yum - computed: false, optional: true, required: false
  private _yum = new GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: GoogleOsConfigPatchDeploymentPatchConfigYum) {
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
  private _zypper = new GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: GoogleOsConfigPatchDeploymentPatchConfigZypper) {
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
export interface GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
  /**
  * A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#day_of_week GoogleOsConfigPatchDeployment#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#day_offset GoogleOsConfigPatchDeployment#day_offset}
  */
  readonly dayOffset?: number;
  /**
  * Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#week_ordinal GoogleOsConfigPatchDeployment#week_ordinal}
  */
  readonly weekOrdinal: number;
}

export function googleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    day_offset: cdktf.numberToTerraform(struct!.dayOffset),
    week_ordinal: cdktf.numberToTerraform(struct!.weekOrdinal),
  }
}


export function googleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToHclTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_offset: {
      value: cdktf.numberToHclTerraform(struct!.dayOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    week_ordinal: {
      value: cdktf.numberToHclTerraform(struct!.weekOrdinal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._dayOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOffset = this._dayOffset;
    }
    if (this._weekOrdinal !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOrdinal = this._weekOrdinal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._dayOffset = undefined;
      this._weekOrdinal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._dayOffset = value.dayOffset;
      this._weekOrdinal = value.weekOrdinal;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // day_offset - computed: false, optional: true, required: false
  private _dayOffset?: number; 
  public get dayOffset() {
    return this.getNumberAttribute('day_offset');
  }
  public set dayOffset(value: number) {
    this._dayOffset = value;
  }
  public resetDayOffset() {
    this._dayOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOffsetInput() {
    return this._dayOffset;
  }

  // week_ordinal - computed: false, optional: false, required: true
  private _weekOrdinal?: number; 
  public get weekOrdinal() {
    return this.getNumberAttribute('week_ordinal');
  }
  public set weekOrdinal(value: number) {
    this._weekOrdinal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOrdinalInput() {
    return this._weekOrdinal;
  }
}
export interface GoogleOsConfigPatchDeploymentRecurringScheduleMonthly {
  /**
  * One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
  * Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
  * will not run in February, April, June, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#month_day GoogleOsConfigPatchDeployment#month_day}
  */
  readonly monthDay?: number;
  /**
  * week_day_of_month block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#week_day_of_month GoogleOsConfigPatchDeployment#week_day_of_month}
  */
  readonly weekDayOfMonth?: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth;
}

export function googleOsConfigPatchDeploymentRecurringScheduleMonthlyToTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    month_day: cdktf.numberToTerraform(struct!.monthDay),
    week_day_of_month: googleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToTerraform(struct!.weekDayOfMonth),
  }
}


export function googleOsConfigPatchDeploymentRecurringScheduleMonthlyToHclTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    month_day: {
      value: cdktf.numberToHclTerraform(struct!.monthDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    week_day_of_month: {
      value: googleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToHclTerraform(struct!.weekDayOfMonth),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentRecurringScheduleMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monthDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthDay = this._monthDay;
    }
    if (this._weekDayOfMonth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDayOfMonth = this._weekDayOfMonth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentRecurringScheduleMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monthDay = undefined;
      this._weekDayOfMonth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monthDay = value.monthDay;
      this._weekDayOfMonth.internalValue = value.weekDayOfMonth;
    }
  }

  // month_day - computed: false, optional: true, required: false
  private _monthDay?: number; 
  public get monthDay() {
    return this.getNumberAttribute('month_day');
  }
  public set monthDay(value: number) {
    this._monthDay = value;
  }
  public resetMonthDay() {
    this._monthDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthDayInput() {
    return this._monthDay;
  }

  // week_day_of_month - computed: false, optional: true, required: false
  private _weekDayOfMonth = new GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference(this, "week_day_of_month");
  public get weekDayOfMonth() {
    return this._weekDayOfMonth;
  }
  public putWeekDayOfMonth(value: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth) {
    this._weekDayOfMonth.internalValue = value;
  }
  public resetWeekDayOfMonth() {
    this._weekDayOfMonth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayOfMonthInput() {
    return this._weekDayOfMonth.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#hours GoogleOsConfigPatchDeployment#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#minutes GoogleOsConfigPatchDeployment#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#nanos GoogleOsConfigPatchDeployment#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#seconds GoogleOsConfigPatchDeployment#seconds}
  */
  readonly seconds?: number;
}

export function googleOsConfigPatchDeploymentRecurringScheduleTimeOfDayToTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleOsConfigPatchDeploymentRecurringScheduleTimeOfDayToHclTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone {
  /**
  * IANA Time Zone Database time zone, e.g. "America/New_York".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IANA Time Zone Database version number, e.g. "2019a".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#version GoogleOsConfigPatchDeployment#version}
  */
  readonly version?: string;
}

export function googleOsConfigPatchDeploymentRecurringScheduleTimeZoneToTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleOsConfigPatchDeploymentRecurringScheduleTimeZoneToHclTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._version = value.version;
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
}
export interface GoogleOsConfigPatchDeploymentRecurringScheduleWeekly {
  /**
  * IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#day_of_week GoogleOsConfigPatchDeployment#day_of_week}
  */
  readonly dayOfWeek: string;
}

export function googleOsConfigPatchDeploymentRecurringScheduleWeeklyToTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function googleOsConfigPatchDeploymentRecurringScheduleWeeklyToHclTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference | GoogleOsConfigPatchDeploymentRecurringScheduleWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentRecurringScheduleWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentRecurringScheduleWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface GoogleOsConfigPatchDeploymentRecurringSchedule {
  /**
  * The end time at which a recurring patch deployment schedule is no longer active.
  * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#end_time GoogleOsConfigPatchDeployment#end_time}
  */
  readonly endTime?: string;
  /**
  * The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.
  * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#start_time GoogleOsConfigPatchDeployment#start_time}
  */
  readonly startTime?: string;
  /**
  * monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#monthly GoogleOsConfigPatchDeployment#monthly}
  */
  readonly monthly?: GoogleOsConfigPatchDeploymentRecurringScheduleMonthly;
  /**
  * time_of_day block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#time_of_day GoogleOsConfigPatchDeployment#time_of_day}
  */
  readonly timeOfDay: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay;
  /**
  * time_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#time_zone GoogleOsConfigPatchDeployment#time_zone}
  */
  readonly timeZone: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone;
  /**
  * weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#weekly GoogleOsConfigPatchDeployment#weekly}
  */
  readonly weekly?: GoogleOsConfigPatchDeploymentRecurringScheduleWeekly;
}

export function googleOsConfigPatchDeploymentRecurringScheduleToTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference | GoogleOsConfigPatchDeploymentRecurringSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    monthly: googleOsConfigPatchDeploymentRecurringScheduleMonthlyToTerraform(struct!.monthly),
    time_of_day: googleOsConfigPatchDeploymentRecurringScheduleTimeOfDayToTerraform(struct!.timeOfDay),
    time_zone: googleOsConfigPatchDeploymentRecurringScheduleTimeZoneToTerraform(struct!.timeZone),
    weekly: googleOsConfigPatchDeploymentRecurringScheduleWeeklyToTerraform(struct!.weekly),
  }
}


export function googleOsConfigPatchDeploymentRecurringScheduleToHclTerraform(struct?: GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference | GoogleOsConfigPatchDeploymentRecurringSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthly: {
      value: googleOsConfigPatchDeploymentRecurringScheduleMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyList",
    },
    time_of_day: {
      value: googleOsConfigPatchDeploymentRecurringScheduleTimeOfDayToHclTerraform(struct!.timeOfDay),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayList",
    },
    time_zone: {
      value: googleOsConfigPatchDeploymentRecurringScheduleTimeZoneToHclTerraform(struct!.timeZone),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneList",
    },
    weekly: {
      value: googleOsConfigPatchDeploymentRecurringScheduleWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentRecurringSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._timeOfDay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay?.internalValue;
    }
    if (this._timeZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentRecurringSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._monthly.internalValue = undefined;
      this._timeOfDay.internalValue = undefined;
      this._timeZone.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._monthly.internalValue = value.monthly;
      this._timeOfDay.internalValue = value.timeOfDay;
      this._timeZone.internalValue = value.timeZone;
      this._weekly.internalValue = value.weekly;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // last_execute_time - computed: true, optional: false, required: false
  public get lastExecuteTime() {
    return this.getStringAttribute('last_execute_time');
  }

  // next_execute_time - computed: true, optional: false, required: false
  public get nextExecuteTime() {
    return this.getStringAttribute('next_execute_time');
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: GoogleOsConfigPatchDeploymentRecurringScheduleMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // time_of_day - computed: false, optional: false, required: true
  private _timeOfDay = new GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference(this, "time_of_day");
  public get timeOfDay() {
    return this._timeOfDay;
  }
  public putTimeOfDay(value: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay) {
    this._timeOfDay.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay.internalValue;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone = new GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference(this, "time_zone");
  public get timeZone() {
    return this._timeZone;
  }
  public putTimeZone(value: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone) {
    this._timeZone.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: GoogleOsConfigPatchDeploymentRecurringScheduleWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentRolloutDisruptionBudget {
  /**
  * Specifies a fixed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#fixed GoogleOsConfigPatchDeployment#fixed}
  */
  readonly fixed?: number;
  /**
  * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#percentage GoogleOsConfigPatchDeployment#percentage}
  */
  readonly percentage?: number;
}

export function googleOsConfigPatchDeploymentRolloutDisruptionBudgetToTerraform(struct?: GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference | GoogleOsConfigPatchDeploymentRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function googleOsConfigPatchDeploymentRolloutDisruptionBudgetToHclTerraform(struct?: GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference | GoogleOsConfigPatchDeploymentRolloutDisruptionBudget): any {
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
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentRolloutDisruptionBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentRolloutDisruptionBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percentage = value.percentage;
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

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface GoogleOsConfigPatchDeploymentRollout {
  /**
  * Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#mode GoogleOsConfigPatchDeployment#mode}
  */
  readonly mode: string;
  /**
  * disruption_budget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#disruption_budget GoogleOsConfigPatchDeployment#disruption_budget}
  */
  readonly disruptionBudget: GoogleOsConfigPatchDeploymentRolloutDisruptionBudget;
}

export function googleOsConfigPatchDeploymentRolloutToTerraform(struct?: GoogleOsConfigPatchDeploymentRolloutOutputReference | GoogleOsConfigPatchDeploymentRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    disruption_budget: googleOsConfigPatchDeploymentRolloutDisruptionBudgetToTerraform(struct!.disruptionBudget),
  }
}


export function googleOsConfigPatchDeploymentRolloutToHclTerraform(struct?: GoogleOsConfigPatchDeploymentRolloutOutputReference | GoogleOsConfigPatchDeploymentRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disruption_budget: {
      value: googleOsConfigPatchDeploymentRolloutDisruptionBudgetToHclTerraform(struct!.disruptionBudget),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentRolloutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentRollout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._disruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptionBudget = this._disruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentRollout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._disruptionBudget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._disruptionBudget.internalValue = value.disruptionBudget;
    }
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

  // disruption_budget - computed: false, optional: false, required: true
  private _disruptionBudget = new GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference(this, "disruption_budget");
  public get disruptionBudget() {
    return this._disruptionBudget;
  }
  public putDisruptionBudget(value: GoogleOsConfigPatchDeploymentRolloutDisruptionBudget) {
    this._disruptionBudget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionBudgetInput() {
    return this._disruptionBudget.internalValue;
  }
}
export interface GoogleOsConfigPatchDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#create GoogleOsConfigPatchDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#delete GoogleOsConfigPatchDeployment#delete}
  */
  readonly delete?: string;
}

export function googleOsConfigPatchDeploymentTimeoutsToTerraform(struct?: GoogleOsConfigPatchDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleOsConfigPatchDeploymentTimeoutsToHclTerraform(struct?: GoogleOsConfigPatchDeploymentTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleOsConfigPatchDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleOsConfigPatchDeploymentTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigPatchDeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment google_os_config_patch_deployment}
*/
export class GoogleOsConfigPatchDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_os_config_patch_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleOsConfigPatchDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleOsConfigPatchDeployment to import
  * @param importFromId The id of the existing GoogleOsConfigPatchDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleOsConfigPatchDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_os_config_patch_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_os_config_patch_deployment google_os_config_patch_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleOsConfigPatchDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleOsConfigPatchDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_patch_deployment',
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
    this._duration = config.duration;
    this._id = config.id;
    this._patchDeploymentId = config.patchDeploymentId;
    this._project = config.project;
    this._instanceFilter.internalValue = config.instanceFilter;
    this._oneTimeSchedule.internalValue = config.oneTimeSchedule;
    this._patchConfig.internalValue = config.patchConfig;
    this._recurringSchedule.internalValue = config.recurringSchedule;
    this._rollout.internalValue = config.rollout;
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

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // last_execute_time - computed: true, optional: false, required: false
  public get lastExecuteTime() {
    return this.getStringAttribute('last_execute_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // patch_deployment_id - computed: false, optional: false, required: true
  private _patchDeploymentId?: string; 
  public get patchDeploymentId() {
    return this.getStringAttribute('patch_deployment_id');
  }
  public set patchDeploymentId(value: string) {
    this._patchDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchDeploymentIdInput() {
    return this._patchDeploymentId;
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

  // instance_filter - computed: false, optional: false, required: true
  private _instanceFilter = new GoogleOsConfigPatchDeploymentInstanceFilterOutputReference(this, "instance_filter");
  public get instanceFilter() {
    return this._instanceFilter;
  }
  public putInstanceFilter(value: GoogleOsConfigPatchDeploymentInstanceFilter) {
    this._instanceFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFilterInput() {
    return this._instanceFilter.internalValue;
  }

  // one_time_schedule - computed: false, optional: true, required: false
  private _oneTimeSchedule = new GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference(this, "one_time_schedule");
  public get oneTimeSchedule() {
    return this._oneTimeSchedule;
  }
  public putOneTimeSchedule(value: GoogleOsConfigPatchDeploymentOneTimeSchedule) {
    this._oneTimeSchedule.internalValue = value;
  }
  public resetOneTimeSchedule() {
    this._oneTimeSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeScheduleInput() {
    return this._oneTimeSchedule.internalValue;
  }

  // patch_config - computed: false, optional: true, required: false
  private _patchConfig = new GoogleOsConfigPatchDeploymentPatchConfigOutputReference(this, "patch_config");
  public get patchConfig() {
    return this._patchConfig;
  }
  public putPatchConfig(value: GoogleOsConfigPatchDeploymentPatchConfig) {
    this._patchConfig.internalValue = value;
  }
  public resetPatchConfig() {
    this._patchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchConfigInput() {
    return this._patchConfig.internalValue;
  }

  // recurring_schedule - computed: false, optional: true, required: false
  private _recurringSchedule = new GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference(this, "recurring_schedule");
  public get recurringSchedule() {
    return this._recurringSchedule;
  }
  public putRecurringSchedule(value: GoogleOsConfigPatchDeploymentRecurringSchedule) {
    this._recurringSchedule.internalValue = value;
  }
  public resetRecurringSchedule() {
    this._recurringSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringScheduleInput() {
    return this._recurringSchedule.internalValue;
  }

  // rollout - computed: false, optional: true, required: false
  private _rollout = new GoogleOsConfigPatchDeploymentRolloutOutputReference(this, "rollout");
  public get rollout() {
    return this._rollout;
  }
  public putRollout(value: GoogleOsConfigPatchDeploymentRollout) {
    this._rollout.internalValue = value;
  }
  public resetRollout() {
    this._rollout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleOsConfigPatchDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleOsConfigPatchDeploymentTimeouts) {
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
      duration: cdktf.stringToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      patch_deployment_id: cdktf.stringToTerraform(this._patchDeploymentId),
      project: cdktf.stringToTerraform(this._project),
      instance_filter: googleOsConfigPatchDeploymentInstanceFilterToTerraform(this._instanceFilter.internalValue),
      one_time_schedule: googleOsConfigPatchDeploymentOneTimeScheduleToTerraform(this._oneTimeSchedule.internalValue),
      patch_config: googleOsConfigPatchDeploymentPatchConfigToTerraform(this._patchConfig.internalValue),
      recurring_schedule: googleOsConfigPatchDeploymentRecurringScheduleToTerraform(this._recurringSchedule.internalValue),
      rollout: googleOsConfigPatchDeploymentRolloutToTerraform(this._rollout.internalValue),
      timeouts: googleOsConfigPatchDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
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
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
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
      patch_deployment_id: {
        value: cdktf.stringToHclTerraform(this._patchDeploymentId),
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
      instance_filter: {
        value: googleOsConfigPatchDeploymentInstanceFilterToHclTerraform(this._instanceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigPatchDeploymentInstanceFilterList",
      },
      one_time_schedule: {
        value: googleOsConfigPatchDeploymentOneTimeScheduleToHclTerraform(this._oneTimeSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigPatchDeploymentOneTimeScheduleList",
      },
      patch_config: {
        value: googleOsConfigPatchDeploymentPatchConfigToHclTerraform(this._patchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigPatchDeploymentPatchConfigList",
      },
      recurring_schedule: {
        value: googleOsConfigPatchDeploymentRecurringScheduleToHclTerraform(this._recurringSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigPatchDeploymentRecurringScheduleList",
      },
      rollout: {
        value: googleOsConfigPatchDeploymentRolloutToHclTerraform(this._rollout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleOsConfigPatchDeploymentRolloutList",
      },
      timeouts: {
        value: googleOsConfigPatchDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleOsConfigPatchDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
