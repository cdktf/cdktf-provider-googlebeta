/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleStorageControlProjectIntelligenceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#edition_config GoogleStorageControlProjectIntelligenceConfig#edition_config}
  */
  readonly editionConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#id GoogleStorageControlProjectIntelligenceConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the GCP project. For GCP project, this field can be project name or project number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#name GoogleStorageControlProjectIntelligenceConfig#name}
  */
  readonly name: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#filter GoogleStorageControlProjectIntelligenceConfig#filter}
  */
  readonly filter?: GoogleStorageControlProjectIntelligenceConfigFilter;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#timeouts GoogleStorageControlProjectIntelligenceConfig#timeouts}
  */
  readonly timeouts?: GoogleStorageControlProjectIntelligenceConfigTimeouts;
}
export interface GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig {
}

export function googleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigToTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigToHclTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_edition - computed: true, optional: false, required: false
  public get effectiveEdition() {
    return this.getStringAttribute('effective_edition');
  }

  // intelligence_config - computed: true, optional: false, required: false
  public get intelligenceConfig() {
    return this.getStringAttribute('intelligence_config');
  }
}

export class GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference {
    return new GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleStorageControlProjectIntelligenceConfigTrialConfig {
}

export function googleStorageControlProjectIntelligenceConfigTrialConfigToTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigTrialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleStorageControlProjectIntelligenceConfigTrialConfigToHclTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigTrialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleStorageControlProjectIntelligenceConfigTrialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectIntelligenceConfigTrialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
}

export class GoogleStorageControlProjectIntelligenceConfigTrialConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference {
    return new GoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets {
  /**
  * List of bucket id regexes to exclude in the storage intelligence plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#bucket_id_regexes GoogleStorageControlProjectIntelligenceConfig#bucket_id_regexes}
  */
  readonly bucketIdRegexes: string[];
}

export function googleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsToTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference | GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_id_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bucketIdRegexes),
  }
}


export function googleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsToHclTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference | GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_id_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bucketIdRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketIdRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketIdRegexes = this._bucketIdRegexes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketIdRegexes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketIdRegexes = value.bucketIdRegexes;
    }
  }

  // bucket_id_regexes - computed: false, optional: false, required: true
  private _bucketIdRegexes?: string[]; 
  public get bucketIdRegexes() {
    return this.getListAttribute('bucket_id_regexes');
  }
  public set bucketIdRegexes(value: string[]) {
    this._bucketIdRegexes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdRegexesInput() {
    return this._bucketIdRegexes;
  }
}
export interface GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations {
  /**
  * List of locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#locations GoogleStorageControlProjectIntelligenceConfig#locations}
  */
  readonly locations: string[];
}

export function googleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsToTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference | GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function googleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsToHclTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference | GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets {
  /**
  * List of bucket id regexes to exclude in the storage intelligence plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#bucket_id_regexes GoogleStorageControlProjectIntelligenceConfig#bucket_id_regexes}
  */
  readonly bucketIdRegexes: string[];
}

export function googleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsToTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference | GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_id_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bucketIdRegexes),
  }
}


export function googleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsToHclTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference | GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_id_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bucketIdRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketIdRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketIdRegexes = this._bucketIdRegexes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketIdRegexes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketIdRegexes = value.bucketIdRegexes;
    }
  }

  // bucket_id_regexes - computed: false, optional: false, required: true
  private _bucketIdRegexes?: string[]; 
  public get bucketIdRegexes() {
    return this.getListAttribute('bucket_id_regexes');
  }
  public set bucketIdRegexes(value: string[]) {
    this._bucketIdRegexes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdRegexesInput() {
    return this._bucketIdRegexes;
  }
}
export interface GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations {
  /**
  * List of locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#locations GoogleStorageControlProjectIntelligenceConfig#locations}
  */
  readonly locations: string[];
}

export function googleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsToTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference | GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function googleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsToHclTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference | GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface GoogleStorageControlProjectIntelligenceConfigFilter {
  /**
  * excluded_cloud_storage_buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#excluded_cloud_storage_buckets GoogleStorageControlProjectIntelligenceConfig#excluded_cloud_storage_buckets}
  */
  readonly excludedCloudStorageBuckets?: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets;
  /**
  * excluded_cloud_storage_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#excluded_cloud_storage_locations GoogleStorageControlProjectIntelligenceConfig#excluded_cloud_storage_locations}
  */
  readonly excludedCloudStorageLocations?: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations;
  /**
  * included_cloud_storage_buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#included_cloud_storage_buckets GoogleStorageControlProjectIntelligenceConfig#included_cloud_storage_buckets}
  */
  readonly includedCloudStorageBuckets?: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets;
  /**
  * included_cloud_storage_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#included_cloud_storage_locations GoogleStorageControlProjectIntelligenceConfig#included_cloud_storage_locations}
  */
  readonly includedCloudStorageLocations?: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations;
}

export function googleStorageControlProjectIntelligenceConfigFilterToTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterOutputReference | GoogleStorageControlProjectIntelligenceConfigFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cloud_storage_buckets: googleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsToTerraform(struct!.excludedCloudStorageBuckets),
    excluded_cloud_storage_locations: googleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsToTerraform(struct!.excludedCloudStorageLocations),
    included_cloud_storage_buckets: googleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsToTerraform(struct!.includedCloudStorageBuckets),
    included_cloud_storage_locations: googleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsToTerraform(struct!.includedCloudStorageLocations),
  }
}


export function googleStorageControlProjectIntelligenceConfigFilterToHclTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigFilterOutputReference | GoogleStorageControlProjectIntelligenceConfigFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_cloud_storage_buckets: {
      value: googleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsToHclTerraform(struct!.excludedCloudStorageBuckets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList",
    },
    excluded_cloud_storage_locations: {
      value: googleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsToHclTerraform(struct!.excludedCloudStorageLocations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList",
    },
    included_cloud_storage_buckets: {
      value: googleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsToHclTerraform(struct!.includedCloudStorageBuckets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList",
    },
    included_cloud_storage_locations: {
      value: googleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsToHclTerraform(struct!.includedCloudStorageLocations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageControlProjectIntelligenceConfigFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageControlProjectIntelligenceConfigFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCloudStorageBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCloudStorageBuckets = this._excludedCloudStorageBuckets?.internalValue;
    }
    if (this._excludedCloudStorageLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCloudStorageLocations = this._excludedCloudStorageLocations?.internalValue;
    }
    if (this._includedCloudStorageBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCloudStorageBuckets = this._includedCloudStorageBuckets?.internalValue;
    }
    if (this._includedCloudStorageLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCloudStorageLocations = this._includedCloudStorageLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectIntelligenceConfigFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedCloudStorageBuckets.internalValue = undefined;
      this._excludedCloudStorageLocations.internalValue = undefined;
      this._includedCloudStorageBuckets.internalValue = undefined;
      this._includedCloudStorageLocations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedCloudStorageBuckets.internalValue = value.excludedCloudStorageBuckets;
      this._excludedCloudStorageLocations.internalValue = value.excludedCloudStorageLocations;
      this._includedCloudStorageBuckets.internalValue = value.includedCloudStorageBuckets;
      this._includedCloudStorageLocations.internalValue = value.includedCloudStorageLocations;
    }
  }

  // excluded_cloud_storage_buckets - computed: false, optional: true, required: false
  private _excludedCloudStorageBuckets = new GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(this, "excluded_cloud_storage_buckets");
  public get excludedCloudStorageBuckets() {
    return this._excludedCloudStorageBuckets;
  }
  public putExcludedCloudStorageBuckets(value: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets) {
    this._excludedCloudStorageBuckets.internalValue = value;
  }
  public resetExcludedCloudStorageBuckets() {
    this._excludedCloudStorageBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCloudStorageBucketsInput() {
    return this._excludedCloudStorageBuckets.internalValue;
  }

  // excluded_cloud_storage_locations - computed: false, optional: true, required: false
  private _excludedCloudStorageLocations = new GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(this, "excluded_cloud_storage_locations");
  public get excludedCloudStorageLocations() {
    return this._excludedCloudStorageLocations;
  }
  public putExcludedCloudStorageLocations(value: GoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations) {
    this._excludedCloudStorageLocations.internalValue = value;
  }
  public resetExcludedCloudStorageLocations() {
    this._excludedCloudStorageLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCloudStorageLocationsInput() {
    return this._excludedCloudStorageLocations.internalValue;
  }

  // included_cloud_storage_buckets - computed: false, optional: true, required: false
  private _includedCloudStorageBuckets = new GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(this, "included_cloud_storage_buckets");
  public get includedCloudStorageBuckets() {
    return this._includedCloudStorageBuckets;
  }
  public putIncludedCloudStorageBuckets(value: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets) {
    this._includedCloudStorageBuckets.internalValue = value;
  }
  public resetIncludedCloudStorageBuckets() {
    this._includedCloudStorageBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCloudStorageBucketsInput() {
    return this._includedCloudStorageBuckets.internalValue;
  }

  // included_cloud_storage_locations - computed: false, optional: true, required: false
  private _includedCloudStorageLocations = new GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(this, "included_cloud_storage_locations");
  public get includedCloudStorageLocations() {
    return this._includedCloudStorageLocations;
  }
  public putIncludedCloudStorageLocations(value: GoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations) {
    this._includedCloudStorageLocations.internalValue = value;
  }
  public resetIncludedCloudStorageLocations() {
    this._includedCloudStorageLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCloudStorageLocationsInput() {
    return this._includedCloudStorageLocations.internalValue;
  }
}
export interface GoogleStorageControlProjectIntelligenceConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#create GoogleStorageControlProjectIntelligenceConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#delete GoogleStorageControlProjectIntelligenceConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#update GoogleStorageControlProjectIntelligenceConfig#update}
  */
  readonly update?: string;
}

export function googleStorageControlProjectIntelligenceConfigTimeoutsToTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigTimeouts | cdktf.IResolvable): any {
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


export function googleStorageControlProjectIntelligenceConfigTimeoutsToHclTerraform(struct?: GoogleStorageControlProjectIntelligenceConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleStorageControlProjectIntelligenceConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleStorageControlProjectIntelligenceConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleStorageControlProjectIntelligenceConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config google_storage_control_project_intelligence_config}
*/
export class GoogleStorageControlProjectIntelligenceConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_control_project_intelligence_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleStorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleStorageControlProjectIntelligenceConfig to import
  * @param importFromId The id of the existing GoogleStorageControlProjectIntelligenceConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleStorageControlProjectIntelligenceConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_control_project_intelligence_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_storage_control_project_intelligence_config google_storage_control_project_intelligence_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleStorageControlProjectIntelligenceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleStorageControlProjectIntelligenceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_control_project_intelligence_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.35.0',
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
    this._editionConfig = config.editionConfig;
    this._id = config.id;
    this._name = config.name;
    this._filter.internalValue = config.filter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edition_config - computed: true, optional: true, required: false
  private _editionConfig?: string; 
  public get editionConfig() {
    return this.getStringAttribute('edition_config');
  }
  public set editionConfig(value: string) {
    this._editionConfig = value;
  }
  public resetEditionConfig() {
    this._editionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionConfigInput() {
    return this._editionConfig;
  }

  // effective_intelligence_config - computed: true, optional: false, required: false
  private _effectiveIntelligenceConfig = new GoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList(this, "effective_intelligence_config", false);
  public get effectiveIntelligenceConfig() {
    return this._effectiveIntelligenceConfig;
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

  // trial_config - computed: true, optional: false, required: false
  private _trialConfig = new GoogleStorageControlProjectIntelligenceConfigTrialConfigList(this, "trial_config", false);
  public get trialConfig() {
    return this._trialConfig;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleStorageControlProjectIntelligenceConfigFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleStorageControlProjectIntelligenceConfigFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleStorageControlProjectIntelligenceConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleStorageControlProjectIntelligenceConfigTimeouts) {
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
      edition_config: cdktf.stringToTerraform(this._editionConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      filter: googleStorageControlProjectIntelligenceConfigFilterToTerraform(this._filter.internalValue),
      timeouts: googleStorageControlProjectIntelligenceConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edition_config: {
        value: cdktf.stringToHclTerraform(this._editionConfig),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: googleStorageControlProjectIntelligenceConfigFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageControlProjectIntelligenceConfigFilterList",
      },
      timeouts: {
        value: googleStorageControlProjectIntelligenceConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleStorageControlProjectIntelligenceConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
