/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleApigeeEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. API Proxy type supported by the environment. The type can be set when creating
  * the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#api_proxy_type GoogleApigeeEnvironment#api_proxy_type}
  */
  readonly apiProxyType?: string;
  /**
  * Optional. Deployment type supported by the environment. The deployment type can be
  * set when creating the environment and cannot be changed. When you enable archive
  * deployment, you will be prevented from performing a subset of actions within the
  * environment, including:
  * Managing the deployment of API proxy or shared flow revisions;
  * Creating, updating, or deleting resource files;
  * Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#deployment_type GoogleApigeeEnvironment#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Description of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#description GoogleApigeeEnvironment#description}
  */
  readonly description?: string;
  /**
  * Display name of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#display_name GoogleApigeeEnvironment#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#forward_proxy_uri GoogleApigeeEnvironment#forward_proxy_uri}
  */
  readonly forwardProxyUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#id GoogleApigeeEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource ID of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#name GoogleApigeeEnvironment#name}
  */
  readonly name: string;
  /**
  * The Apigee Organization associated with the Apigee environment,
  * in the format 'organizations/{{org_name}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#org_id GoogleApigeeEnvironment#org_id}
  */
  readonly orgId: string;
  /**
  * Types that can be selected for an Environment. Each of the types are
  * limited by capability and capacity. Refer to Apigee's public documentation
  * to understand about each of these types in details.
  * An Apigee org can support heterogeneous Environments. Possible values: ["ENVIRONMENT_TYPE_UNSPECIFIED", "BASE", "INTERMEDIATE", "COMPREHENSIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#type GoogleApigeeEnvironment#type}
  */
  readonly type?: string;
  /**
  * client_ip_resolution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#client_ip_resolution_config GoogleApigeeEnvironment#client_ip_resolution_config}
  */
  readonly clientIpResolutionConfig?: GoogleApigeeEnvironmentClientIpResolutionConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#node_config GoogleApigeeEnvironment#node_config}
  */
  readonly nodeConfig?: GoogleApigeeEnvironmentNodeConfig;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#properties GoogleApigeeEnvironment#properties}
  */
  readonly properties?: GoogleApigeeEnvironmentProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#timeouts GoogleApigeeEnvironment#timeouts}
  */
  readonly timeouts?: GoogleApigeeEnvironmentTimeouts;
}
export interface GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm {
  /**
  * The index of the ip in the header. Positive indices 0, 1, 2, 3 chooses indices from the left (first ips). Negative indices -1, -2, -3 chooses indices from the right (last ips).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#ip_header_index GoogleApigeeEnvironment#ip_header_index}
  */
  readonly ipHeaderIndex: number;
  /**
  * The name of the header to extract the client ip from. We are currently only supporting the X-Forwarded-For header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#ip_header_name GoogleApigeeEnvironment#ip_header_name}
  */
  readonly ipHeaderName: string;
}

export function googleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmToTerraform(struct?: GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference | GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_header_index: cdktf.numberToTerraform(struct!.ipHeaderIndex),
    ip_header_name: cdktf.stringToTerraform(struct!.ipHeaderName),
  }
}


export function googleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmToHclTerraform(struct?: GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference | GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_header_index: {
      value: cdktf.numberToHclTerraform(struct!.ipHeaderIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_header_name: {
      value: cdktf.stringToHclTerraform(struct!.ipHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipHeaderIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipHeaderIndex = this._ipHeaderIndex;
    }
    if (this._ipHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipHeaderName = this._ipHeaderName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipHeaderIndex = undefined;
      this._ipHeaderName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipHeaderIndex = value.ipHeaderIndex;
      this._ipHeaderName = value.ipHeaderName;
    }
  }

  // ip_header_index - computed: false, optional: false, required: true
  private _ipHeaderIndex?: number; 
  public get ipHeaderIndex() {
    return this.getNumberAttribute('ip_header_index');
  }
  public set ipHeaderIndex(value: number) {
    this._ipHeaderIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHeaderIndexInput() {
    return this._ipHeaderIndex;
  }

  // ip_header_name - computed: false, optional: false, required: true
  private _ipHeaderName?: string; 
  public get ipHeaderName() {
    return this.getStringAttribute('ip_header_name');
  }
  public set ipHeaderName(value: string) {
    this._ipHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHeaderNameInput() {
    return this._ipHeaderName;
  }
}
export interface GoogleApigeeEnvironmentClientIpResolutionConfig {
  /**
  * header_index_algorithm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#header_index_algorithm GoogleApigeeEnvironment#header_index_algorithm}
  */
  readonly headerIndexAlgorithm?: GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm;
}

export function googleApigeeEnvironmentClientIpResolutionConfigToTerraform(struct?: GoogleApigeeEnvironmentClientIpResolutionConfigOutputReference | GoogleApigeeEnvironmentClientIpResolutionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_index_algorithm: googleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmToTerraform(struct!.headerIndexAlgorithm),
  }
}


export function googleApigeeEnvironmentClientIpResolutionConfigToHclTerraform(struct?: GoogleApigeeEnvironmentClientIpResolutionConfigOutputReference | GoogleApigeeEnvironmentClientIpResolutionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_index_algorithm: {
      value: googleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmToHclTerraform(struct!.headerIndexAlgorithm),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeEnvironmentClientIpResolutionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeEnvironmentClientIpResolutionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerIndexAlgorithm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerIndexAlgorithm = this._headerIndexAlgorithm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeEnvironmentClientIpResolutionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerIndexAlgorithm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerIndexAlgorithm.internalValue = value.headerIndexAlgorithm;
    }
  }

  // header_index_algorithm - computed: false, optional: true, required: false
  private _headerIndexAlgorithm = new GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference(this, "header_index_algorithm");
  public get headerIndexAlgorithm() {
    return this._headerIndexAlgorithm;
  }
  public putHeaderIndexAlgorithm(value: GoogleApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm) {
    this._headerIndexAlgorithm.internalValue = value;
  }
  public resetHeaderIndexAlgorithm() {
    this._headerIndexAlgorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerIndexAlgorithmInput() {
    return this._headerIndexAlgorithm.internalValue;
  }
}
export interface GoogleApigeeEnvironmentNodeConfig {
  /**
  * The maximum total number of gateway nodes that the is reserved for all instances that
  * has the specified environment. If not specified, the default is determined by the
  * recommended maximum number of nodes for that gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#max_node_count GoogleApigeeEnvironment#max_node_count}
  */
  readonly maxNodeCount?: string;
  /**
  * The minimum total number of gateway nodes that the is reserved for all instances that
  * has the specified environment. If not specified, the default is determined by the
  * recommended minimum number of nodes for that gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#min_node_count GoogleApigeeEnvironment#min_node_count}
  */
  readonly minNodeCount?: string;
}

export function googleApigeeEnvironmentNodeConfigToTerraform(struct?: GoogleApigeeEnvironmentNodeConfigOutputReference | GoogleApigeeEnvironmentNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.stringToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.stringToTerraform(struct!.minNodeCount),
  }
}


export function googleApigeeEnvironmentNodeConfigToHclTerraform(struct?: GoogleApigeeEnvironmentNodeConfigOutputReference | GoogleApigeeEnvironmentNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_node_count: {
      value: cdktf.stringToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_node_count: {
      value: cdktf.stringToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeEnvironmentNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeEnvironmentNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeEnvironmentNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // current_aggregate_node_count - computed: true, optional: false, required: false
  public get currentAggregateNodeCount() {
    return this.getStringAttribute('current_aggregate_node_count');
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: string; 
  public get maxNodeCount() {
    return this.getStringAttribute('max_node_count');
  }
  public set maxNodeCount(value: string) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: string; 
  public get minNodeCount() {
    return this.getStringAttribute('min_node_count');
  }
  public set minNodeCount(value: string) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface GoogleApigeeEnvironmentPropertiesProperty {
  /**
  * The property key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#name GoogleApigeeEnvironment#name}
  */
  readonly name?: string;
  /**
  * The property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#value GoogleApigeeEnvironment#value}
  */
  readonly value?: string;
}

export function googleApigeeEnvironmentPropertiesPropertyToTerraform(struct?: GoogleApigeeEnvironmentPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleApigeeEnvironmentPropertiesPropertyToHclTerraform(struct?: GoogleApigeeEnvironmentPropertiesProperty | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeEnvironmentPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeEnvironmentPropertiesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeEnvironmentPropertiesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleApigeeEnvironmentPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeEnvironmentPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeEnvironmentPropertiesPropertyOutputReference {
    return new GoogleApigeeEnvironmentPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeEnvironmentProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#property GoogleApigeeEnvironment#property}
  */
  readonly property?: GoogleApigeeEnvironmentPropertiesProperty[] | cdktf.IResolvable;
}

export function googleApigeeEnvironmentPropertiesToTerraform(struct?: GoogleApigeeEnvironmentPropertiesOutputReference | GoogleApigeeEnvironmentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(googleApigeeEnvironmentPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function googleApigeeEnvironmentPropertiesToHclTerraform(struct?: GoogleApigeeEnvironmentPropertiesOutputReference | GoogleApigeeEnvironmentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(googleApigeeEnvironmentPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeEnvironmentPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeEnvironmentPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeEnvironmentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeEnvironmentProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property.internalValue = value.property;
    }
  }

  // property - computed: false, optional: true, required: false
  private _property = new GoogleApigeeEnvironmentPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: GoogleApigeeEnvironmentPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface GoogleApigeeEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#create GoogleApigeeEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#delete GoogleApigeeEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#update GoogleApigeeEnvironment#update}
  */
  readonly update?: string;
}

export function googleApigeeEnvironmentTimeoutsToTerraform(struct?: GoogleApigeeEnvironmentTimeouts | cdktf.IResolvable): any {
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


export function googleApigeeEnvironmentTimeoutsToHclTerraform(struct?: GoogleApigeeEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class GoogleApigeeEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleApigeeEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApigeeEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment google_apigee_environment}
*/
export class GoogleApigeeEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleApigeeEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleApigeeEnvironment to import
  * @param importFromId The id of the existing GoogleApigeeEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleApigeeEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_environment google_apigee_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApigeeEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleApigeeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_environment',
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
    this._apiProxyType = config.apiProxyType;
    this._deploymentType = config.deploymentType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._forwardProxyUri = config.forwardProxyUri;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._type = config.type;
    this._clientIpResolutionConfig.internalValue = config.clientIpResolutionConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._properties.internalValue = config.properties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_proxy_type - computed: true, optional: true, required: false
  private _apiProxyType?: string; 
  public get apiProxyType() {
    return this.getStringAttribute('api_proxy_type');
  }
  public set apiProxyType(value: string) {
    this._apiProxyType = value;
  }
  public resetApiProxyType() {
    this._apiProxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProxyTypeInput() {
    return this._apiProxyType;
  }

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // forward_proxy_uri - computed: false, optional: true, required: false
  private _forwardProxyUri?: string; 
  public get forwardProxyUri() {
    return this.getStringAttribute('forward_proxy_uri');
  }
  public set forwardProxyUri(value: string) {
    this._forwardProxyUri = value;
  }
  public resetForwardProxyUri() {
    this._forwardProxyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyUriInput() {
    return this._forwardProxyUri;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // type - computed: true, optional: true, required: false
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

  // client_ip_resolution_config - computed: false, optional: true, required: false
  private _clientIpResolutionConfig = new GoogleApigeeEnvironmentClientIpResolutionConfigOutputReference(this, "client_ip_resolution_config");
  public get clientIpResolutionConfig() {
    return this._clientIpResolutionConfig;
  }
  public putClientIpResolutionConfig(value: GoogleApigeeEnvironmentClientIpResolutionConfig) {
    this._clientIpResolutionConfig.internalValue = value;
  }
  public resetClientIpResolutionConfig() {
    this._clientIpResolutionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpResolutionConfigInput() {
    return this._clientIpResolutionConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new GoogleApigeeEnvironmentNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GoogleApigeeEnvironmentNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new GoogleApigeeEnvironmentPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: GoogleApigeeEnvironmentProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApigeeEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApigeeEnvironmentTimeouts) {
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
      api_proxy_type: cdktf.stringToTerraform(this._apiProxyType),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      forward_proxy_uri: cdktf.stringToTerraform(this._forwardProxyUri),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      type: cdktf.stringToTerraform(this._type),
      client_ip_resolution_config: googleApigeeEnvironmentClientIpResolutionConfigToTerraform(this._clientIpResolutionConfig.internalValue),
      node_config: googleApigeeEnvironmentNodeConfigToTerraform(this._nodeConfig.internalValue),
      properties: googleApigeeEnvironmentPropertiesToTerraform(this._properties.internalValue),
      timeouts: googleApigeeEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_proxy_type: {
        value: cdktf.stringToHclTerraform(this._apiProxyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_uri: {
        value: cdktf.stringToHclTerraform(this._forwardProxyUri),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ip_resolution_config: {
        value: googleApigeeEnvironmentClientIpResolutionConfigToHclTerraform(this._clientIpResolutionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApigeeEnvironmentClientIpResolutionConfigList",
      },
      node_config: {
        value: googleApigeeEnvironmentNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApigeeEnvironmentNodeConfigList",
      },
      properties: {
        value: googleApigeeEnvironmentPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApigeeEnvironmentPropertiesList",
      },
      timeouts: {
        value: googleApigeeEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleApigeeEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
