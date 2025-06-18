/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleStorageBatchOperationsJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to 'true', the storage batch operation job will not be deleted and new job will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#delete_protection GoogleStorageBatchOperationsJob#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#job_id GoogleStorageBatchOperationsJob#job_id}
  */
  readonly jobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}
  */
  readonly project?: string;
  /**
  * bucket_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#bucket_list GoogleStorageBatchOperationsJob#bucket_list}
  */
  readonly bucketList?: GoogleStorageBatchOperationsJobBucketListStruct;
  /**
  * delete_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#delete_object GoogleStorageBatchOperationsJob#delete_object}
  */
  readonly deleteObject?: GoogleStorageBatchOperationsJobDeleteObject;
  /**
  * put_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#put_metadata GoogleStorageBatchOperationsJob#put_metadata}
  */
  readonly putMetadata?: GoogleStorageBatchOperationsJobPutMetadata;
  /**
  * put_object_hold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#put_object_hold GoogleStorageBatchOperationsJob#put_object_hold}
  */
  readonly putObjectHold?: GoogleStorageBatchOperationsJobPutObjectHold;
  /**
  * rewrite_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#rewrite_object GoogleStorageBatchOperationsJob#rewrite_object}
  */
  readonly rewriteObject?: GoogleStorageBatchOperationsJobRewriteObject;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#timeouts GoogleStorageBatchOperationsJob#timeouts}
  */
  readonly timeouts?: GoogleStorageBatchOperationsJobTimeouts;
}
export interface GoogleStorageBatchOperationsJobBucketListBucketsManifest {
  /**
  * Specifies objects in a manifest file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#manifest_location GoogleStorageBatchOperationsJob#manifest_location}
  */
  readonly manifestLocation?: string;
}

export function googleStorageBatchOperationsJobBucketListBucketsManifestToTerraform(struct?: GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference | GoogleStorageBatchOperationsJobBucketListBucketsManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifest_location: cdktf.stringToTerraform(struct!.manifestLocation),
  }
}


export function googleStorageBatchOperationsJobBucketListBucketsManifestToHclTerraform(struct?: GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference | GoogleStorageBatchOperationsJobBucketListBucketsManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manifest_location: {
      value: cdktf.stringToHclTerraform(struct!.manifestLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobBucketListBucketsManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestLocation = this._manifestLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBatchOperationsJobBucketListBucketsManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manifestLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manifestLocation = value.manifestLocation;
    }
  }

  // manifest_location - computed: false, optional: true, required: false
  private _manifestLocation?: string; 
  public get manifestLocation() {
    return this.getStringAttribute('manifest_location');
  }
  public set manifestLocation(value: string) {
    this._manifestLocation = value;
  }
  public resetManifestLocation() {
    this._manifestLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestLocationInput() {
    return this._manifestLocation;
  }
}
export interface GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#included_object_prefixes GoogleStorageBatchOperationsJob#included_object_prefixes}
  */
  readonly includedObjectPrefixes?: string[];
}

export function googleStorageBatchOperationsJobBucketListBucketsPrefixListStructToTerraform(struct?: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference | GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_object_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedObjectPrefixes),
  }
}


export function googleStorageBatchOperationsJobBucketListBucketsPrefixListStructToHclTerraform(struct?: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference | GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    included_object_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedObjectPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedObjectPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedObjectPrefixes = this._includedObjectPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedObjectPrefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedObjectPrefixes = value.includedObjectPrefixes;
    }
  }

  // included_object_prefixes - computed: false, optional: true, required: false
  private _includedObjectPrefixes?: string[]; 
  public get includedObjectPrefixes() {
    return this.getListAttribute('included_object_prefixes');
  }
  public set includedObjectPrefixes(value: string[]) {
    this._includedObjectPrefixes = value;
  }
  public resetIncludedObjectPrefixes() {
    this._includedObjectPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedObjectPrefixesInput() {
    return this._includedObjectPrefixes;
  }
}
export interface GoogleStorageBatchOperationsJobBucketListBuckets {
  /**
  * Bucket name for the objects to be transformed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#bucket GoogleStorageBatchOperationsJob#bucket}
  */
  readonly bucket: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#manifest GoogleStorageBatchOperationsJob#manifest}
  */
  readonly manifest?: GoogleStorageBatchOperationsJobBucketListBucketsManifest;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#prefix_list GoogleStorageBatchOperationsJob#prefix_list}
  */
  readonly prefixList?: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct;
}

export function googleStorageBatchOperationsJobBucketListBucketsToTerraform(struct?: GoogleStorageBatchOperationsJobBucketListBucketsOutputReference | GoogleStorageBatchOperationsJobBucketListBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    manifest: googleStorageBatchOperationsJobBucketListBucketsManifestToTerraform(struct!.manifest),
    prefix_list: googleStorageBatchOperationsJobBucketListBucketsPrefixListStructToTerraform(struct!.prefixList),
  }
}


export function googleStorageBatchOperationsJobBucketListBucketsToHclTerraform(struct?: GoogleStorageBatchOperationsJobBucketListBucketsOutputReference | GoogleStorageBatchOperationsJobBucketListBuckets): any {
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
    manifest: {
      value: googleStorageBatchOperationsJobBucketListBucketsManifestToHclTerraform(struct!.manifest),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageBatchOperationsJobBucketListBucketsManifestList",
    },
    prefix_list: {
      value: googleStorageBatchOperationsJobBucketListBucketsPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBatchOperationsJobBucketListBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobBucketListBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._manifest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifest = this._manifest?.internalValue;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBatchOperationsJobBucketListBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._manifest.internalValue = undefined;
      this._prefixList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._manifest.internalValue = value.manifest;
      this._prefixList.internalValue = value.prefixList;
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

  // manifest - computed: false, optional: true, required: false
  private _manifest = new GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: GoogleStorageBatchOperationsJobBucketListBucketsManifest) {
    this._manifest.internalValue = value;
  }
  public resetManifest() {
    this._manifest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}
export interface GoogleStorageBatchOperationsJobBucketListStruct {
  /**
  * buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#buckets GoogleStorageBatchOperationsJob#buckets}
  */
  readonly buckets: GoogleStorageBatchOperationsJobBucketListBuckets;
}

export function googleStorageBatchOperationsJobBucketListStructToTerraform(struct?: GoogleStorageBatchOperationsJobBucketListStructOutputReference | GoogleStorageBatchOperationsJobBucketListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: googleStorageBatchOperationsJobBucketListBucketsToTerraform(struct!.buckets),
  }
}


export function googleStorageBatchOperationsJobBucketListStructToHclTerraform(struct?: GoogleStorageBatchOperationsJobBucketListStructOutputReference | GoogleStorageBatchOperationsJobBucketListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buckets: {
      value: googleStorageBatchOperationsJobBucketListBucketsToHclTerraform(struct!.buckets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageBatchOperationsJobBucketListBucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBatchOperationsJobBucketListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobBucketListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBatchOperationsJobBucketListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buckets.internalValue = value.buckets;
    }
  }

  // buckets - computed: false, optional: false, required: true
  private _buckets = new GoogleStorageBatchOperationsJobBucketListBucketsOutputReference(this, "buckets");
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: GoogleStorageBatchOperationsJobBucketListBuckets) {
    this._buckets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }
}
export interface GoogleStorageBatchOperationsJobDeleteObject {
  /**
  * enable flag to permanently delete object and all object versions if versioning is enabled on bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#permanent_object_deletion_enabled GoogleStorageBatchOperationsJob#permanent_object_deletion_enabled}
  */
  readonly permanentObjectDeletionEnabled: boolean | cdktf.IResolvable;
}

export function googleStorageBatchOperationsJobDeleteObjectToTerraform(struct?: GoogleStorageBatchOperationsJobDeleteObjectOutputReference | GoogleStorageBatchOperationsJobDeleteObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permanent_object_deletion_enabled: cdktf.booleanToTerraform(struct!.permanentObjectDeletionEnabled),
  }
}


export function googleStorageBatchOperationsJobDeleteObjectToHclTerraform(struct?: GoogleStorageBatchOperationsJobDeleteObjectOutputReference | GoogleStorageBatchOperationsJobDeleteObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permanent_object_deletion_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.permanentObjectDeletionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBatchOperationsJobDeleteObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobDeleteObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permanentObjectDeletionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanentObjectDeletionEnabled = this._permanentObjectDeletionEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBatchOperationsJobDeleteObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permanentObjectDeletionEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permanentObjectDeletionEnabled = value.permanentObjectDeletionEnabled;
    }
  }

  // permanent_object_deletion_enabled - computed: false, optional: false, required: true
  private _permanentObjectDeletionEnabled?: boolean | cdktf.IResolvable; 
  public get permanentObjectDeletionEnabled() {
    return this.getBooleanAttribute('permanent_object_deletion_enabled');
  }
  public set permanentObjectDeletionEnabled(value: boolean | cdktf.IResolvable) {
    this._permanentObjectDeletionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentObjectDeletionEnabledInput() {
    return this._permanentObjectDeletionEnabled;
  }
}
export interface GoogleStorageBatchOperationsJobPutMetadata {
  /**
  * Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#cache_control GoogleStorageBatchOperationsJob#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Content-Disposition of the object data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#content_disposition GoogleStorageBatchOperationsJob#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Content Encoding of the object data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#content_encoding GoogleStorageBatchOperationsJob#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Content-Language of the object data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#content_language GoogleStorageBatchOperationsJob#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Content-Type of the object data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#content_type GoogleStorageBatchOperationsJob#content_type}
  */
  readonly contentType?: string;
  /**
  * User-provided metadata, in key/value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#custom_metadata GoogleStorageBatchOperationsJob#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * Updates the objects fixed custom time metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#custom_time GoogleStorageBatchOperationsJob#custom_time}
  */
  readonly customTime?: string;
}

export function googleStorageBatchOperationsJobPutMetadataToTerraform(struct?: GoogleStorageBatchOperationsJobPutMetadataOutputReference | GoogleStorageBatchOperationsJobPutMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_control: cdktf.stringToTerraform(struct!.cacheControl),
    content_disposition: cdktf.stringToTerraform(struct!.contentDisposition),
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
    content_language: cdktf.stringToTerraform(struct!.contentLanguage),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customMetadata),
    custom_time: cdktf.stringToTerraform(struct!.customTime),
  }
}


export function googleStorageBatchOperationsJobPutMetadataToHclTerraform(struct?: GoogleStorageBatchOperationsJobPutMetadataOutputReference | GoogleStorageBatchOperationsJobPutMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_control: {
      value: cdktf.stringToHclTerraform(struct!.cacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_disposition: {
      value: cdktf.stringToHclTerraform(struct!.contentDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.contentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_language: {
      value: cdktf.stringToHclTerraform(struct!.contentLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_time: {
      value: cdktf.stringToHclTerraform(struct!.customTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBatchOperationsJobPutMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobPutMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheControl = this._cacheControl;
    }
    if (this._contentDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDisposition = this._contentDisposition;
    }
    if (this._contentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentEncoding = this._contentEncoding;
    }
    if (this._contentLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLanguage = this._contentLanguage;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._customMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetadata = this._customMetadata;
    }
    if (this._customTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTime = this._customTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBatchOperationsJobPutMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheControl = undefined;
      this._contentDisposition = undefined;
      this._contentEncoding = undefined;
      this._contentLanguage = undefined;
      this._contentType = undefined;
      this._customMetadata = undefined;
      this._customTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheControl = value.cacheControl;
      this._contentDisposition = value.contentDisposition;
      this._contentEncoding = value.contentEncoding;
      this._contentLanguage = value.contentLanguage;
      this._contentType = value.contentType;
      this._customMetadata = value.customMetadata;
      this._customTime = value.customTime;
    }
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // custom_metadata - computed: false, optional: true, required: false
  private _customMetadata?: { [key: string]: string }; 
  public get customMetadata() {
    return this.getStringMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: string }) {
    this._customMetadata = value;
  }
  public resetCustomMetadata() {
    this._customMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
  }

  // custom_time - computed: false, optional: true, required: false
  private _customTime?: string; 
  public get customTime() {
    return this.getStringAttribute('custom_time');
  }
  public set customTime(value: string) {
    this._customTime = value;
  }
  public resetCustomTime() {
    this._customTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeInput() {
    return this._customTime;
  }
}
export interface GoogleStorageBatchOperationsJobPutObjectHold {
  /**
  * set/unset to update event based hold for objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#event_based_hold GoogleStorageBatchOperationsJob#event_based_hold}
  */
  readonly eventBasedHold?: string;
  /**
  * set/unset to update temporary based hold for objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#temporary_hold GoogleStorageBatchOperationsJob#temporary_hold}
  */
  readonly temporaryHold?: string;
}

export function googleStorageBatchOperationsJobPutObjectHoldToTerraform(struct?: GoogleStorageBatchOperationsJobPutObjectHoldOutputReference | GoogleStorageBatchOperationsJobPutObjectHold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_based_hold: cdktf.stringToTerraform(struct!.eventBasedHold),
    temporary_hold: cdktf.stringToTerraform(struct!.temporaryHold),
  }
}


export function googleStorageBatchOperationsJobPutObjectHoldToHclTerraform(struct?: GoogleStorageBatchOperationsJobPutObjectHoldOutputReference | GoogleStorageBatchOperationsJobPutObjectHold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_based_hold: {
      value: cdktf.stringToHclTerraform(struct!.eventBasedHold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_hold: {
      value: cdktf.stringToHclTerraform(struct!.temporaryHold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBatchOperationsJobPutObjectHoldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobPutObjectHold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventBasedHold !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBasedHold = this._eventBasedHold;
    }
    if (this._temporaryHold !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryHold = this._temporaryHold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBatchOperationsJobPutObjectHold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventBasedHold = undefined;
      this._temporaryHold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventBasedHold = value.eventBasedHold;
      this._temporaryHold = value.temporaryHold;
    }
  }

  // event_based_hold - computed: false, optional: true, required: false
  private _eventBasedHold?: string; 
  public get eventBasedHold() {
    return this.getStringAttribute('event_based_hold');
  }
  public set eventBasedHold(value: string) {
    this._eventBasedHold = value;
  }
  public resetEventBasedHold() {
    this._eventBasedHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBasedHoldInput() {
    return this._eventBasedHold;
  }

  // temporary_hold - computed: false, optional: true, required: false
  private _temporaryHold?: string; 
  public get temporaryHold() {
    return this.getStringAttribute('temporary_hold');
  }
  public set temporaryHold(value: string) {
    this._temporaryHold = value;
  }
  public resetTemporaryHold() {
    this._temporaryHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryHoldInput() {
    return this._temporaryHold;
  }
}
export interface GoogleStorageBatchOperationsJobRewriteObject {
  /**
  * valid kms key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#kms_key GoogleStorageBatchOperationsJob#kms_key}
  */
  readonly kmsKey: string;
}

export function googleStorageBatchOperationsJobRewriteObjectToTerraform(struct?: GoogleStorageBatchOperationsJobRewriteObjectOutputReference | GoogleStorageBatchOperationsJobRewriteObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function googleStorageBatchOperationsJobRewriteObjectToHclTerraform(struct?: GoogleStorageBatchOperationsJobRewriteObjectOutputReference | GoogleStorageBatchOperationsJobRewriteObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBatchOperationsJobRewriteObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobRewriteObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBatchOperationsJobRewriteObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface GoogleStorageBatchOperationsJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#create GoogleStorageBatchOperationsJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#delete GoogleStorageBatchOperationsJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#update GoogleStorageBatchOperationsJob#update}
  */
  readonly update?: string;
}

export function googleStorageBatchOperationsJobTimeoutsToTerraform(struct?: GoogleStorageBatchOperationsJobTimeouts | cdktf.IResolvable): any {
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


export function googleStorageBatchOperationsJobTimeoutsToHclTerraform(struct?: GoogleStorageBatchOperationsJobTimeouts | cdktf.IResolvable): any {
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

export class GoogleStorageBatchOperationsJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleStorageBatchOperationsJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleStorageBatchOperationsJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job google_storage_batch_operations_job}
*/
export class GoogleStorageBatchOperationsJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_batch_operations_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleStorageBatchOperationsJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleStorageBatchOperationsJob to import
  * @param importFromId The id of the existing GoogleStorageBatchOperationsJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleStorageBatchOperationsJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_batch_operations_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job google_storage_batch_operations_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleStorageBatchOperationsJobConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleStorageBatchOperationsJobConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_storage_batch_operations_job',
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
    this._deleteProtection = config.deleteProtection;
    this._id = config.id;
    this._jobId = config.jobId;
    this._project = config.project;
    this._bucketList.internalValue = config.bucketList;
    this._deleteObject.internalValue = config.deleteObject;
    this._putMetadata.internalValue = config.putMetadata;
    this._putObjectHold.internalValue = config.putObjectHold;
    this._rewriteObject.internalValue = config.rewriteObject;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // complete_time - computed: true, optional: false, required: false
  public get completeTime() {
    return this.getStringAttribute('complete_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // job_id - computed: false, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
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

  // schedule_time - computed: true, optional: false, required: false
  public get scheduleTime() {
    return this.getStringAttribute('schedule_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // bucket_list - computed: false, optional: true, required: false
  private _bucketList = new GoogleStorageBatchOperationsJobBucketListStructOutputReference(this, "bucket_list");
  public get bucketList() {
    return this._bucketList;
  }
  public putBucketList(value: GoogleStorageBatchOperationsJobBucketListStruct) {
    this._bucketList.internalValue = value;
  }
  public resetBucketList() {
    this._bucketList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketListInput() {
    return this._bucketList.internalValue;
  }

  // delete_object - computed: false, optional: true, required: false
  private _deleteObject = new GoogleStorageBatchOperationsJobDeleteObjectOutputReference(this, "delete_object");
  public get deleteObject() {
    return this._deleteObject;
  }
  public putDeleteObject(value: GoogleStorageBatchOperationsJobDeleteObject) {
    this._deleteObject.internalValue = value;
  }
  public resetDeleteObject() {
    this._deleteObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObjectInput() {
    return this._deleteObject.internalValue;
  }

  // put_metadata - computed: false, optional: true, required: false
  private _putMetadata = new GoogleStorageBatchOperationsJobPutMetadataOutputReference(this, "put_metadata");
  public get putMetadata() {
    return this._putMetadata;
  }
  public putPutMetadata(value: GoogleStorageBatchOperationsJobPutMetadata) {
    this._putMetadata.internalValue = value;
  }
  public resetPutMetadata() {
    this._putMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putMetadataInput() {
    return this._putMetadata.internalValue;
  }

  // put_object_hold - computed: false, optional: true, required: false
  private _putObjectHold = new GoogleStorageBatchOperationsJobPutObjectHoldOutputReference(this, "put_object_hold");
  public get putObjectHold() {
    return this._putObjectHold;
  }
  public putPutObjectHold(value: GoogleStorageBatchOperationsJobPutObjectHold) {
    this._putObjectHold.internalValue = value;
  }
  public resetPutObjectHold() {
    this._putObjectHold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putObjectHoldInput() {
    return this._putObjectHold.internalValue;
  }

  // rewrite_object - computed: false, optional: true, required: false
  private _rewriteObject = new GoogleStorageBatchOperationsJobRewriteObjectOutputReference(this, "rewrite_object");
  public get rewriteObject() {
    return this._rewriteObject;
  }
  public putRewriteObject(value: GoogleStorageBatchOperationsJobRewriteObject) {
    this._rewriteObject.internalValue = value;
  }
  public resetRewriteObject() {
    this._rewriteObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteObjectInput() {
    return this._rewriteObject.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleStorageBatchOperationsJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleStorageBatchOperationsJobTimeouts) {
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
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      project: cdktf.stringToTerraform(this._project),
      bucket_list: googleStorageBatchOperationsJobBucketListStructToTerraform(this._bucketList.internalValue),
      delete_object: googleStorageBatchOperationsJobDeleteObjectToTerraform(this._deleteObject.internalValue),
      put_metadata: googleStorageBatchOperationsJobPutMetadataToTerraform(this._putMetadata.internalValue),
      put_object_hold: googleStorageBatchOperationsJobPutObjectHoldToTerraform(this._putObjectHold.internalValue),
      rewrite_object: googleStorageBatchOperationsJobRewriteObjectToTerraform(this._rewriteObject.internalValue),
      timeouts: googleStorageBatchOperationsJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
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
      bucket_list: {
        value: googleStorageBatchOperationsJobBucketListStructToHclTerraform(this._bucketList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBatchOperationsJobBucketListStructList",
      },
      delete_object: {
        value: googleStorageBatchOperationsJobDeleteObjectToHclTerraform(this._deleteObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBatchOperationsJobDeleteObjectList",
      },
      put_metadata: {
        value: googleStorageBatchOperationsJobPutMetadataToHclTerraform(this._putMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBatchOperationsJobPutMetadataList",
      },
      put_object_hold: {
        value: googleStorageBatchOperationsJobPutObjectHoldToHclTerraform(this._putObjectHold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBatchOperationsJobPutObjectHoldList",
      },
      rewrite_object: {
        value: googleStorageBatchOperationsJobRewriteObjectToHclTerraform(this._rewriteObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBatchOperationsJobRewriteObjectList",
      },
      timeouts: {
        value: googleStorageBatchOperationsJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleStorageBatchOperationsJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
