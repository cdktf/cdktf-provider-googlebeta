/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseHostingCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * A field that lets you specify which SSL certificate type Hosting creates
  * for your domain name. Spark plan 'CustomDomain's only have access to the
  * 'GROUPED' cert type, while Blaze plan can select any option. Possible values: ["GROUPED", "PROJECT_GROUPED", "DEDICATED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#cert_preference GoogleFirebaseHostingCustomDomain#cert_preference}
  */
  readonly certPreference?: string;
  /**
  * The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#custom_domain GoogleFirebaseHostingCustomDomain#custom_domain}
  */
  readonly customDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}
  */
  readonly project?: string;
  /**
  * A domain name that this CustomDomain should direct traffic towards. If
  * specified, Hosting will respond to requests against this CustomDomain
  * with an HTTP 301 code, and route traffic to the specified 'redirect_target'
  * instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#redirect_target GoogleFirebaseHostingCustomDomain#redirect_target}
  */
  readonly redirectTarget?: string;
  /**
  * The ID of the site in which to create this custom domain association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#site_id GoogleFirebaseHostingCustomDomain#site_id}
  */
  readonly siteId: string;
  /**
  * If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'.
  * If false, Terraform will not wait for DNS records on the 'CustomDomain'. Any issues in
  * the 'CustomDomain' will be returned and stored in the Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#wait_dns_verification GoogleFirebaseHostingCustomDomain#wait_dns_verification}
  */
  readonly waitDnsVerification?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#timeouts GoogleFirebaseHostingCustomDomain#timeouts}
  */
  readonly timeouts?: GoogleFirebaseHostingCustomDomainTimeouts;
}
export interface GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords {
}

export function googleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsToTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // required_action - computed: true, optional: false, required: false
  public get requiredAction() {
    return this.getStringAttribute('required_action');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference {
    return new GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired {
}

export function googleFirebaseHostingCustomDomainCertVerificationDnsDesiredToTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainCertVerificationDnsDesiredToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // records - computed: true, optional: false, required: false
  private _records = new GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference {
    return new GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords {
}

export function googleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsToTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // required_action - computed: true, optional: false, required: false
  public get requiredAction() {
    return this.getStringAttribute('required_action');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference {
    return new GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered {
}

export function googleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredToTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // records - computed: true, optional: false, required: false
  private _records = new GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference {
    return new GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainCertVerificationDns {
}

export function googleFirebaseHostingCustomDomainCertVerificationDnsToTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainCertVerificationDnsToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainCertVerificationDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainCertVerificationDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_time - computed: true, optional: false, required: false
  public get checkTime() {
    return this.getStringAttribute('check_time');
  }

  // desired - computed: true, optional: false, required: false
  private _desired = new GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList(this, "desired", false);
  public get desired() {
    return this._desired;
  }

  // discovered - computed: true, optional: false, required: false
  private _discovered = new GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList(this, "discovered", false);
  public get discovered() {
    return this._discovered;
  }
}

export class GoogleFirebaseHostingCustomDomainCertVerificationDnsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference {
    return new GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainCertVerificationHttp {
}

export function googleFirebaseHostingCustomDomainCertVerificationHttpToTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainCertVerificationHttpToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerificationHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainCertVerificationHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainCertVerificationHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired - computed: true, optional: false, required: false
  public get desired() {
    return this.getStringAttribute('desired');
  }

  // discovered - computed: true, optional: false, required: false
  public get discovered() {
    return this.getStringAttribute('discovered');
  }

  // last_check_time - computed: true, optional: false, required: false
  public get lastCheckTime() {
    return this.getStringAttribute('last_check_time');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class GoogleFirebaseHostingCustomDomainCertVerificationHttpList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference {
    return new GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainCertVerification {
}

export function googleFirebaseHostingCustomDomainCertVerificationToTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainCertVerificationToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainCertVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainCertVerificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainCertVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainCertVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new GoogleFirebaseHostingCustomDomainCertVerificationDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // http - computed: true, optional: false, required: false
  private _http = new GoogleFirebaseHostingCustomDomainCertVerificationHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
}

export class GoogleFirebaseHostingCustomDomainCertVerificationList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainCertVerificationOutputReference {
    return new GoogleFirebaseHostingCustomDomainCertVerificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainCert {
}

export function googleFirebaseHostingCustomDomainCertToTerraform(struct?: GoogleFirebaseHostingCustomDomainCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainCertToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // verification - computed: true, optional: false, required: false
  private _verification = new GoogleFirebaseHostingCustomDomainCertVerificationList(this, "verification", false);
  public get verification() {
    return this._verification;
  }
}

export class GoogleFirebaseHostingCustomDomainCertList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainCertOutputReference {
    return new GoogleFirebaseHostingCustomDomainCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainIssues {
}

export function googleFirebaseHostingCustomDomainIssuesToTerraform(struct?: GoogleFirebaseHostingCustomDomainIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainIssuesToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainIssuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainIssues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainIssues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleFirebaseHostingCustomDomainIssuesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainIssuesOutputReference {
    return new GoogleFirebaseHostingCustomDomainIssuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords {
}

export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsToTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // required_action - computed: true, optional: false, required: false
  public get requiredAction() {
    return this.getStringAttribute('required_action');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference {
    return new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired {
}

export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredToTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // records - computed: true, optional: false, required: false
  private _records = new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference {
    return new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords {
}

export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsToTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // required_action - computed: true, optional: false, required: false
  public get requiredAction() {
    return this.getStringAttribute('required_action');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference {
    return new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered {
}

export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredToTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // records - computed: true, optional: false, required: false
  private _records = new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference {
    return new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainRequiredDnsUpdates {
}

export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesToTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseHostingCustomDomainRequiredDnsUpdatesToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainRequiredDnsUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingCustomDomainRequiredDnsUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_time - computed: true, optional: false, required: false
  public get checkTime() {
    return this.getStringAttribute('check_time');
  }

  // desired - computed: true, optional: false, required: false
  private _desired = new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList(this, "desired", false);
  public get desired() {
    return this._desired;
  }

  // discovered - computed: true, optional: false, required: false
  private _discovered = new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList(this, "discovered", false);
  public get discovered() {
    return this._discovered;
  }
}

export class GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference {
    return new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingCustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#create GoogleFirebaseHostingCustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#delete GoogleFirebaseHostingCustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#update GoogleFirebaseHostingCustomDomain#update}
  */
  readonly update?: string;
}

export function googleFirebaseHostingCustomDomainTimeoutsToTerraform(struct?: GoogleFirebaseHostingCustomDomainTimeouts | cdktf.IResolvable): any {
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


export function googleFirebaseHostingCustomDomainTimeoutsToHclTerraform(struct?: GoogleFirebaseHostingCustomDomainTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirebaseHostingCustomDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseHostingCustomDomainTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirebaseHostingCustomDomainTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain google_firebase_hosting_custom_domain}
*/
export class GoogleFirebaseHostingCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_hosting_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseHostingCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseHostingCustomDomain to import
  * @param importFromId The id of the existing GoogleFirebaseHostingCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseHostingCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_hosting_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain google_firebase_hosting_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseHostingCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseHostingCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_hosting_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.15.0',
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
    this._certPreference = config.certPreference;
    this._customDomain = config.customDomain;
    this._id = config.id;
    this._project = config.project;
    this._redirectTarget = config.redirectTarget;
    this._siteId = config.siteId;
    this._waitDnsVerification = config.waitDnsVerification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert - computed: true, optional: false, required: false
  private _cert = new GoogleFirebaseHostingCustomDomainCertList(this, "cert", false);
  public get cert() {
    return this._cert;
  }

  // cert_preference - computed: true, optional: true, required: false
  private _certPreference?: string; 
  public get certPreference() {
    return this.getStringAttribute('cert_preference');
  }
  public set certPreference(value: string) {
    this._certPreference = value;
  }
  public resetCertPreference() {
    this._certPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPreferenceInput() {
    return this._certPreference;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_domain - computed: false, optional: false, required: true
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // host_state - computed: true, optional: false, required: false
  public get hostState() {
    return this.getStringAttribute('host_state');
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

  // issues - computed: true, optional: false, required: false
  private _issues = new GoogleFirebaseHostingCustomDomainIssuesList(this, "issues", false);
  public get issues() {
    return this._issues;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ownership_state - computed: true, optional: false, required: false
  public get ownershipState() {
    return this.getStringAttribute('ownership_state');
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

  // redirect_target - computed: false, optional: true, required: false
  private _redirectTarget?: string; 
  public get redirectTarget() {
    return this.getStringAttribute('redirect_target');
  }
  public set redirectTarget(value: string) {
    this._redirectTarget = value;
  }
  public resetRedirectTarget() {
    this._redirectTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTargetInput() {
    return this._redirectTarget;
  }

  // required_dns_updates - computed: true, optional: false, required: false
  private _requiredDnsUpdates = new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList(this, "required_dns_updates", false);
  public get requiredDnsUpdates() {
    return this._requiredDnsUpdates;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // wait_dns_verification - computed: false, optional: true, required: false
  private _waitDnsVerification?: boolean | cdktf.IResolvable; 
  public get waitDnsVerification() {
    return this.getBooleanAttribute('wait_dns_verification');
  }
  public set waitDnsVerification(value: boolean | cdktf.IResolvable) {
    this._waitDnsVerification = value;
  }
  public resetWaitDnsVerification() {
    this._waitDnsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitDnsVerificationInput() {
    return this._waitDnsVerification;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseHostingCustomDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseHostingCustomDomainTimeouts) {
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
      cert_preference: cdktf.stringToTerraform(this._certPreference),
      custom_domain: cdktf.stringToTerraform(this._customDomain),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      redirect_target: cdktf.stringToTerraform(this._redirectTarget),
      site_id: cdktf.stringToTerraform(this._siteId),
      wait_dns_verification: cdktf.booleanToTerraform(this._waitDnsVerification),
      timeouts: googleFirebaseHostingCustomDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_preference: {
        value: cdktf.stringToHclTerraform(this._certPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domain: {
        value: cdktf.stringToHclTerraform(this._customDomain),
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
      redirect_target: {
        value: cdktf.stringToHclTerraform(this._redirectTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_dns_verification: {
        value: cdktf.booleanToHclTerraform(this._waitDnsVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: googleFirebaseHostingCustomDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseHostingCustomDomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
