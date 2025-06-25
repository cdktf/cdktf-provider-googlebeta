/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseAppHostingDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Backend that this Domain is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#backend GoogleFirebaseAppHostingDomain#backend}
  */
  readonly backend: string;
  /**
  * Id of the domain to create.
  * Must be a valid domain name, such as "foo.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#domain_id GoogleFirebaseAppHostingDomain#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#id GoogleFirebaseAppHostingDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the Backend that this Domain is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#location GoogleFirebaseAppHostingDomain#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#project GoogleFirebaseAppHostingDomain#project}
  */
  readonly project?: string;
  /**
  * serve block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#serve GoogleFirebaseAppHostingDomain#serve}
  */
  readonly serve?: GoogleFirebaseAppHostingDomainServe;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#timeouts GoogleFirebaseAppHostingDomain#timeouts}
  */
  readonly timeouts?: GoogleFirebaseAppHostingDomainTimeouts;
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatusIssues {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusIssuesToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusIssuesToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatusIssues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatusIssues | undefined) {
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

export class GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError | undefined) {
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

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords | undefined) {
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

  // relevant_state - computed: true, optional: false, required: false
  public get relevantState() {
    return this.getListAttribute('relevant_state');
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

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_error - computed: true, optional: false, required: false
  private _checkError = new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList(this, "check_error", false);
  public get checkError() {
    return this._checkError;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // records - computed: true, optional: false, required: false
  private _records = new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError | undefined) {
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

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords | undefined) {
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

  // relevant_state - computed: true, optional: false, required: false
  public get relevantState() {
    return this.getListAttribute('relevant_state');
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

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_error - computed: true, optional: false, required: false
  private _checkError = new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList(this, "check_error", false);
  public get checkError() {
    return this._checkError;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // records - computed: true, optional: false, required: false
  private _records = new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates | undefined) {
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
  private _desired = new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList(this, "desired", false);
  public get desired() {
    return this._desired;
  }

  // discovered - computed: true, optional: false, required: false
  private _discovered = new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList(this, "discovered", false);
  public get discovered() {
    return this._discovered;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainCustomDomainStatus {
}

export function googleFirebaseAppHostingDomainCustomDomainStatusToTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingDomainCustomDomainStatusToHclTerraform(struct?: GoogleFirebaseAppHostingDomainCustomDomainStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingDomainCustomDomainStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainCustomDomainStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_state - computed: true, optional: false, required: false
  public get certState() {
    return this.getStringAttribute('cert_state');
  }

  // host_state - computed: true, optional: false, required: false
  public get hostState() {
    return this.getStringAttribute('host_state');
  }

  // issues - computed: true, optional: false, required: false
  private _issues = new GoogleFirebaseAppHostingDomainCustomDomainStatusIssuesList(this, "issues", false);
  public get issues() {
    return this._issues;
  }

  // ownership_state - computed: true, optional: false, required: false
  public get ownershipState() {
    return this.getStringAttribute('ownership_state');
  }

  // required_dns_updates - computed: true, optional: false, required: false
  private _requiredDnsUpdates = new GoogleFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList(this, "required_dns_updates", false);
  public get requiredDnsUpdates() {
    return this._requiredDnsUpdates;
  }
}

export class GoogleFirebaseAppHostingDomainCustomDomainStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference {
    return new GoogleFirebaseAppHostingDomainCustomDomainStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingDomainServeRedirect {
  /**
  * The status code to use in a redirect response. Must be a valid HTTP 3XX
  * status code. Defaults to 302 if not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#status GoogleFirebaseAppHostingDomain#status}
  */
  readonly status?: string;
  /**
  * The URI of the redirect's intended destination. This URI will be
  * prepended to the original request path. URI without a scheme are
  * assumed to be HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#uri GoogleFirebaseAppHostingDomain#uri}
  */
  readonly uri: string;
}

export function googleFirebaseAppHostingDomainServeRedirectToTerraform(struct?: GoogleFirebaseAppHostingDomainServeRedirectOutputReference | GoogleFirebaseAppHostingDomainServeRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleFirebaseAppHostingDomainServeRedirectToHclTerraform(struct?: GoogleFirebaseAppHostingDomainServeRedirectOutputReference | GoogleFirebaseAppHostingDomainServeRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class GoogleFirebaseAppHostingDomainServeRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAppHostingDomainServeRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainServeRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
      this._uri = value.uri;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
export interface GoogleFirebaseAppHostingDomainServe {
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#redirect GoogleFirebaseAppHostingDomain#redirect}
  */
  readonly redirect?: GoogleFirebaseAppHostingDomainServeRedirect;
}

export function googleFirebaseAppHostingDomainServeToTerraform(struct?: GoogleFirebaseAppHostingDomainServeOutputReference | GoogleFirebaseAppHostingDomainServe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect: googleFirebaseAppHostingDomainServeRedirectToTerraform(struct!.redirect),
  }
}


export function googleFirebaseAppHostingDomainServeToHclTerraform(struct?: GoogleFirebaseAppHostingDomainServeOutputReference | GoogleFirebaseAppHostingDomainServe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect: {
      value: googleFirebaseAppHostingDomainServeRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseAppHostingDomainServeRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAppHostingDomainServeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAppHostingDomainServe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingDomainServe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirect.internalValue = value.redirect;
    }
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new GoogleFirebaseAppHostingDomainServeRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: GoogleFirebaseAppHostingDomainServeRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}
export interface GoogleFirebaseAppHostingDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#create GoogleFirebaseAppHostingDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#delete GoogleFirebaseAppHostingDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#update GoogleFirebaseAppHostingDomain#update}
  */
  readonly update?: string;
}

export function googleFirebaseAppHostingDomainTimeoutsToTerraform(struct?: GoogleFirebaseAppHostingDomainTimeouts | cdktf.IResolvable): any {
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


export function googleFirebaseAppHostingDomainTimeoutsToHclTerraform(struct?: GoogleFirebaseAppHostingDomainTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirebaseAppHostingDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseAppHostingDomainTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirebaseAppHostingDomainTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain google_firebase_app_hosting_domain}
*/
export class GoogleFirebaseAppHostingDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_app_hosting_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseAppHostingDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseAppHostingDomain to import
  * @param importFromId The id of the existing GoogleFirebaseAppHostingDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseAppHostingDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_app_hosting_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_domain google_firebase_app_hosting_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseAppHostingDomainConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseAppHostingDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_app_hosting_domain',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.41.0',
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
    this._backend = config.backend;
    this._domainId = config.domainId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._serve.internalValue = config.serve;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_domain_status - computed: true, optional: false, required: false
  private _customDomainStatus = new GoogleFirebaseAppHostingDomainCustomDomainStatusList(this, "custom_domain_status", false);
  public get customDomainStatus() {
    return this._customDomainStatus;
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
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

  // purge_time - computed: true, optional: false, required: false
  public get purgeTime() {
    return this.getStringAttribute('purge_time');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // serve - computed: false, optional: true, required: false
  private _serve = new GoogleFirebaseAppHostingDomainServeOutputReference(this, "serve");
  public get serve() {
    return this._serve;
  }
  public putServe(value: GoogleFirebaseAppHostingDomainServe) {
    this._serve.internalValue = value;
  }
  public resetServe() {
    this._serve.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveInput() {
    return this._serve.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseAppHostingDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseAppHostingDomainTimeouts) {
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
      backend: cdktf.stringToTerraform(this._backend),
      domain_id: cdktf.stringToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      serve: googleFirebaseAppHostingDomainServeToTerraform(this._serve.internalValue),
      timeouts: googleFirebaseAppHostingDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serve: {
        value: googleFirebaseAppHostingDomainServeToHclTerraform(this._serve.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseAppHostingDomainServeList",
      },
      timeouts: {
        value: googleFirebaseAppHostingDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseAppHostingDomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
