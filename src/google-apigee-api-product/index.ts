/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleApigeeApiProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the proxy.pathsuffix variable.
  * The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the apiResources element is defined to be /forecastrss and the base path defined for the API proxy is /weather, then only requests to /weather/forecastrss are permitted by the API product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#api_resources GoogleApigeeApiProduct#api_resources}
  */
  readonly apiResources?: string[];
  /**
  * Flag that specifies how API keys are approved to access the APIs defined by the API product.
  * Valid values are 'auto' or 'manual'. Possible values: ["auto", "manual"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#approval_type GoogleApigeeApiProduct#approval_type}
  */
  readonly approvalType?: string;
  /**
  * Description of the API product. Include key information about the API product that is not captured by other fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#description GoogleApigeeApiProduct#description}
  */
  readonly description?: string;
  /**
  * Name displayed in the UI or developer portal to developers registering for API access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#display_name GoogleApigeeApiProduct#display_name}
  */
  readonly displayName: string;
  /**
  * Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected.
  * By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#environments GoogleApigeeApiProduct#environments}
  */
  readonly environments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#id GoogleApigeeApiProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Internal name of the API product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}
  */
  readonly name: string;
  /**
  * The Apigee Organization associated with the Apigee API product,
  * in the format 'organizations/{{org_name}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#org_id GoogleApigeeApiProduct#org_id}
  */
  readonly orgId: string;
  /**
  * Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies.
  * Apigee rejects requests to API proxies that are not listed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#proxies GoogleApigeeApiProduct#proxies}
  */
  readonly proxies?: string[];
  /**
  * Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit.
  * For example, a quota of 50, for a quotaInterval of 12 and a quotaTimeUnit of hours means 50 requests are allowed every 12 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}
  */
  readonly quota?: string;
  /**
  * Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. Possible values: ["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#quota_counter_scope GoogleApigeeApiProduct#quota_counter_scope}
  */
  readonly quotaCounterScope?: string;
  /**
  * Time interval over which the number of request messages is calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#quota_interval GoogleApigeeApiProduct#quota_interval}
  */
  readonly quotaInterval?: string;
  /**
  * Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#quota_time_unit GoogleApigeeApiProduct#quota_time_unit}
  */
  readonly quotaTimeUnit?: string;
  /**
  * Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#scopes GoogleApigeeApiProduct#scopes}
  */
  readonly scopes?: string[];
  /**
  * Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#space GoogleApigeeApiProduct#space}
  */
  readonly space?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}
  */
  readonly attributes?: GoogleApigeeApiProductAttributes[] | cdktf.IResolvable;
  /**
  * graphql_operation_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#graphql_operation_group GoogleApigeeApiProduct#graphql_operation_group}
  */
  readonly graphqlOperationGroup?: GoogleApigeeApiProductGraphqlOperationGroup;
  /**
  * grpc_operation_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#grpc_operation_group GoogleApigeeApiProduct#grpc_operation_group}
  */
  readonly grpcOperationGroup?: GoogleApigeeApiProductGrpcOperationGroup;
  /**
  * operation_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operation_group GoogleApigeeApiProduct#operation_group}
  */
  readonly operationGroup?: GoogleApigeeApiProductOperationGroup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#timeouts GoogleApigeeApiProduct#timeouts}
  */
  readonly timeouts?: GoogleApigeeApiProductTimeouts;
}
export interface GoogleApigeeApiProductAttributes {
  /**
  * Key of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}
  */
  readonly name?: string;
  /**
  * Value of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}
  */
  readonly value?: string;
}

export function googleApigeeApiProductAttributesToTerraform(struct?: GoogleApigeeApiProductAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleApigeeApiProductAttributesToHclTerraform(struct?: GoogleApigeeApiProductAttributes | cdktf.IResolvable): any {
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

export class GoogleApigeeApiProductAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApigeeApiProductAttributes | cdktf.IResolvable | undefined) {
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

export class GoogleApigeeApiProductAttributesList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductAttributes[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductAttributesOutputReference {
    return new GoogleApigeeApiProductAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes {
  /**
  * Key of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}
  */
  readonly name?: string;
  /**
  * Value of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}
  */
  readonly value?: string;
}

export function googleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesToTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesToHclTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes | cdktf.IResolvable): any {
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

export class GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes | cdktf.IResolvable | undefined) {
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

export class GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference {
    return new GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations {
  /**
  * GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operation GoogleApigeeApiProduct#operation}
  */
  readonly operation?: string;
  /**
  * Required. GraphQL operation types. Valid values include query or mutation.
  * Note: Apigee does not currently support subscription types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operation_types GoogleApigeeApiProduct#operation_types}
  */
  readonly operationTypes?: string[];
}

export function googleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsToTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    operation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operationTypes),
  }
}


export function googleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsToHclTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operationTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._operationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationTypes = this._operationTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._operationTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._operationTypes = value.operationTypes;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // operation_types - computed: false, optional: true, required: false
  private _operationTypes?: string[]; 
  public get operationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_types'));
  }
  public set operationTypes(value: string[]) {
    this._operationTypes = value;
  }
  public resetOperationTypes() {
    this._operationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypesInput() {
    return this._operationTypes;
  }
}

export class GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference {
    return new GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota {
  /**
  * Required. Time interval over which the number of request messages is calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}
  */
  readonly interval?: string;
  /**
  * Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}
  */
  readonly limit?: string;
  /**
  * Time unit defined for the interval. Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}
  */
  readonly timeUnit?: string;
}

export function googleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaToTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    limit: cdktf.stringToTerraform(struct!.limit),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function googleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaToHclTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._limit = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._limit = value.limit;
      this._timeUnit = value.timeUnit;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs {
  /**
  * Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}
  */
  readonly apiSource?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}
  */
  readonly attributes?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operations GoogleApigeeApiProduct#operations}
  */
  readonly operations?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}
  */
  readonly quota?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota;
}

export function googleApigeeApiProductGraphqlOperationGroupOperationConfigsToTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_source: cdktf.stringToTerraform(struct!.apiSource),
    attributes: cdktf.listMapper(googleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesToTerraform, true)(struct!.attributes),
    operations: cdktf.listMapper(googleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsToTerraform, true)(struct!.operations),
    quota: googleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaToTerraform(struct!.quota),
  }
}


export function googleApigeeApiProductGraphqlOperationGroupOperationConfigsToHclTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_source: {
      value: cdktf.stringToHclTerraform(struct!.apiSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(googleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesToHclTerraform, true)(struct!.attributes),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList",
    },
    quota: {
      value: googleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaToHclTerraform(struct!.quota),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSource = this._apiSource;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSource = undefined;
      this._attributes.internalValue = undefined;
      this._operations.internalValue = undefined;
      this._quota.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSource = value.apiSource;
      this._attributes.internalValue = value.attributes;
      this._operations.internalValue = value.operations;
      this._quota.internalValue = value.quota;
    }
  }

  // api_source - computed: false, optional: true, required: false
  private _apiSource?: string; 
  public get apiSource() {
    return this.getStringAttribute('api_source');
  }
  public set apiSource(value: string) {
    this._apiSource = value;
  }
  public resetApiSource() {
    this._apiSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSourceInput() {
    return this._apiSource;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList(this, "operations", true);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }
}

export class GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference {
    return new GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductGraphqlOperationGroup {
  /**
  * Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operation_config_type GoogleApigeeApiProduct#operation_config_type}
  */
  readonly operationConfigType?: string;
  /**
  * operation_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}
  */
  readonly operationConfigs?: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs[] | cdktf.IResolvable;
}

export function googleApigeeApiProductGraphqlOperationGroupToTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOutputReference | GoogleApigeeApiProductGraphqlOperationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation_config_type: cdktf.stringToTerraform(struct!.operationConfigType),
    operation_configs: cdktf.listMapper(googleApigeeApiProductGraphqlOperationGroupOperationConfigsToTerraform, true)(struct!.operationConfigs),
  }
}


export function googleApigeeApiProductGraphqlOperationGroupToHclTerraform(struct?: GoogleApigeeApiProductGraphqlOperationGroupOutputReference | GoogleApigeeApiProductGraphqlOperationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation_config_type: {
      value: cdktf.stringToHclTerraform(struct!.operationConfigType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_configs: {
      value: cdktf.listMapperHcl(googleApigeeApiProductGraphqlOperationGroupOperationConfigsToHclTerraform, true)(struct!.operationConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductGraphqlOperationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeApiProductGraphqlOperationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationConfigType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationConfigType = this._operationConfigType;
    }
    if (this._operationConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationConfigs = this._operationConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductGraphqlOperationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operationConfigType = undefined;
      this._operationConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operationConfigType = value.operationConfigType;
      this._operationConfigs.internalValue = value.operationConfigs;
    }
  }

  // operation_config_type - computed: false, optional: true, required: false
  private _operationConfigType?: string; 
  public get operationConfigType() {
    return this.getStringAttribute('operation_config_type');
  }
  public set operationConfigType(value: string) {
    this._operationConfigType = value;
  }
  public resetOperationConfigType() {
    this._operationConfigType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationConfigTypeInput() {
    return this._operationConfigType;
  }

  // operation_configs - computed: false, optional: true, required: false
  private _operationConfigs = new GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList(this, "operation_configs", true);
  public get operationConfigs() {
    return this._operationConfigs;
  }
  public putOperationConfigs(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs[] | cdktf.IResolvable) {
    this._operationConfigs.internalValue = value;
  }
  public resetOperationConfigs() {
    this._operationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationConfigsInput() {
    return this._operationConfigs.internalValue;
  }
}
export interface GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes {
  /**
  * Key of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}
  */
  readonly name?: string;
  /**
  * Value of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}
  */
  readonly value?: string;
}

export function googleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesToTerraform(struct?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesToHclTerraform(struct?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes | cdktf.IResolvable): any {
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

export class GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes | cdktf.IResolvable | undefined) {
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

export class GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference {
    return new GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota {
  /**
  * Required. Time interval over which the number of request messages is calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}
  */
  readonly interval?: string;
  /**
  * Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}
  */
  readonly limit?: string;
  /**
  * Time unit defined for the interval. Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}
  */
  readonly timeUnit?: string;
}

export function googleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaToTerraform(struct?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference | GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    limit: cdktf.stringToTerraform(struct!.limit),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function googleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaToHclTerraform(struct?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference | GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._limit = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._limit = value.limit;
      this._timeUnit = value.timeUnit;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface GoogleApigeeApiProductGrpcOperationGroupOperationConfigs {
  /**
  * Required. Name of the API proxy with which the gRPC operation and quota are associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}
  */
  readonly apiSource?: string;
  /**
  * List of unqualified gRPC method names for the proxy to which quota will be applied. If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy.
  * 
  * Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"].
  * 
  * Note: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#methods GoogleApigeeApiProduct#methods}
  */
  readonly methods?: string[];
  /**
  * Required. gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#service GoogleApigeeApiProduct#service}
  */
  readonly service?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}
  */
  readonly attributes?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}
  */
  readonly quota?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota;
}

export function googleApigeeApiProductGrpcOperationGroupOperationConfigsToTerraform(struct?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_source: cdktf.stringToTerraform(struct!.apiSource),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    service: cdktf.stringToTerraform(struct!.service),
    attributes: cdktf.listMapper(googleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesToTerraform, true)(struct!.attributes),
    quota: googleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaToTerraform(struct!.quota),
  }
}


export function googleApigeeApiProductGrpcOperationGroupOperationConfigsToHclTerraform(struct?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_source: {
      value: cdktf.stringToHclTerraform(struct!.apiSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(googleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesToHclTerraform, true)(struct!.attributes),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList",
    },
    quota: {
      value: googleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaToHclTerraform(struct!.quota),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductGrpcOperationGroupOperationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSource = this._apiSource;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductGrpcOperationGroupOperationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSource = undefined;
      this._methods = undefined;
      this._service = undefined;
      this._attributes.internalValue = undefined;
      this._quota.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSource = value.apiSource;
      this._methods = value.methods;
      this._service = value.service;
      this._attributes.internalValue = value.attributes;
      this._quota.internalValue = value.quota;
    }
  }

  // api_source - computed: false, optional: true, required: false
  private _apiSource?: string; 
  public get apiSource() {
    return this.getStringAttribute('api_source');
  }
  public set apiSource(value: string) {
    this._apiSource = value;
  }
  public resetApiSource() {
    this._apiSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSourceInput() {
    return this._apiSource;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }
}

export class GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductGrpcOperationGroupOperationConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference {
    return new GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductGrpcOperationGroup {
  /**
  * operation_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}
  */
  readonly operationConfigs?: GoogleApigeeApiProductGrpcOperationGroupOperationConfigs[] | cdktf.IResolvable;
}

export function googleApigeeApiProductGrpcOperationGroupToTerraform(struct?: GoogleApigeeApiProductGrpcOperationGroupOutputReference | GoogleApigeeApiProductGrpcOperationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation_configs: cdktf.listMapper(googleApigeeApiProductGrpcOperationGroupOperationConfigsToTerraform, true)(struct!.operationConfigs),
  }
}


export function googleApigeeApiProductGrpcOperationGroupToHclTerraform(struct?: GoogleApigeeApiProductGrpcOperationGroupOutputReference | GoogleApigeeApiProductGrpcOperationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation_configs: {
      value: cdktf.listMapperHcl(googleApigeeApiProductGrpcOperationGroupOperationConfigsToHclTerraform, true)(struct!.operationConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductGrpcOperationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeApiProductGrpcOperationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationConfigs = this._operationConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductGrpcOperationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operationConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operationConfigs.internalValue = value.operationConfigs;
    }
  }

  // operation_configs - computed: false, optional: true, required: false
  private _operationConfigs = new GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList(this, "operation_configs", true);
  public get operationConfigs() {
    return this._operationConfigs;
  }
  public putOperationConfigs(value: GoogleApigeeApiProductGrpcOperationGroupOperationConfigs[] | cdktf.IResolvable) {
    this._operationConfigs.internalValue = value;
  }
  public resetOperationConfigs() {
    this._operationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationConfigsInput() {
    return this._operationConfigs.internalValue;
  }
}
export interface GoogleApigeeApiProductOperationGroupOperationConfigsAttributes {
  /**
  * Key of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}
  */
  readonly name?: string;
  /**
  * Value of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}
  */
  readonly value?: string;
}

export function googleApigeeApiProductOperationGroupOperationConfigsAttributesToTerraform(struct?: GoogleApigeeApiProductOperationGroupOperationConfigsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleApigeeApiProductOperationGroupOperationConfigsAttributesToHclTerraform(struct?: GoogleApigeeApiProductOperationGroupOperationConfigsAttributes | cdktf.IResolvable): any {
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

export class GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductOperationGroupOperationConfigsAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApigeeApiProductOperationGroupOperationConfigsAttributes | cdktf.IResolvable | undefined) {
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

export class GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference {
    return new GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductOperationGroupOperationConfigsOperations {
  /**
  * Methods refers to the REST verbs, when none specified, all verb types are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#methods GoogleApigeeApiProduct#methods}
  */
  readonly methods?: string[];
  /**
  * Required. REST resource path associated with the API proxy or remote service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#resource GoogleApigeeApiProduct#resource}
  */
  readonly resource?: string;
}

export function googleApigeeApiProductOperationGroupOperationConfigsOperationsToTerraform(struct?: GoogleApigeeApiProductOperationGroupOperationConfigsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function googleApigeeApiProductOperationGroupOperationConfigsOperationsToHclTerraform(struct?: GoogleApigeeApiProductOperationGroupOperationConfigsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductOperationGroupOperationConfigsOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductOperationGroupOperationConfigsOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._resource = value.resource;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}

export class GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductOperationGroupOperationConfigsOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference {
    return new GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductOperationGroupOperationConfigsQuota {
  /**
  * Required. Time interval over which the number of request messages is calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}
  */
  readonly interval?: string;
  /**
  * Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}
  */
  readonly limit?: string;
  /**
  * Time unit defined for the interval. Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}
  */
  readonly timeUnit?: string;
}

export function googleApigeeApiProductOperationGroupOperationConfigsQuotaToTerraform(struct?: GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference | GoogleApigeeApiProductOperationGroupOperationConfigsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    limit: cdktf.stringToTerraform(struct!.limit),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function googleApigeeApiProductOperationGroupOperationConfigsQuotaToHclTerraform(struct?: GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference | GoogleApigeeApiProductOperationGroupOperationConfigsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeApiProductOperationGroupOperationConfigsQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductOperationGroupOperationConfigsQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._limit = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._limit = value.limit;
      this._timeUnit = value.timeUnit;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface GoogleApigeeApiProductOperationGroupOperationConfigs {
  /**
  * Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}
  */
  readonly apiSource?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}
  */
  readonly attributes?: GoogleApigeeApiProductOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operations GoogleApigeeApiProduct#operations}
  */
  readonly operations?: GoogleApigeeApiProductOperationGroupOperationConfigsOperations[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}
  */
  readonly quota?: GoogleApigeeApiProductOperationGroupOperationConfigsQuota;
}

export function googleApigeeApiProductOperationGroupOperationConfigsToTerraform(struct?: GoogleApigeeApiProductOperationGroupOperationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_source: cdktf.stringToTerraform(struct!.apiSource),
    attributes: cdktf.listMapper(googleApigeeApiProductOperationGroupOperationConfigsAttributesToTerraform, true)(struct!.attributes),
    operations: cdktf.listMapper(googleApigeeApiProductOperationGroupOperationConfigsOperationsToTerraform, true)(struct!.operations),
    quota: googleApigeeApiProductOperationGroupOperationConfigsQuotaToTerraform(struct!.quota),
  }
}


export function googleApigeeApiProductOperationGroupOperationConfigsToHclTerraform(struct?: GoogleApigeeApiProductOperationGroupOperationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_source: {
      value: cdktf.stringToHclTerraform(struct!.apiSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(googleApigeeApiProductOperationGroupOperationConfigsAttributesToHclTerraform, true)(struct!.attributes),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleApigeeApiProductOperationGroupOperationConfigsOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList",
    },
    quota: {
      value: googleApigeeApiProductOperationGroupOperationConfigsQuotaToHclTerraform(struct!.quota),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeApiProductOperationGroupOperationConfigsQuotaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeApiProductOperationGroupOperationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSource = this._apiSource;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductOperationGroupOperationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSource = undefined;
      this._attributes.internalValue = undefined;
      this._operations.internalValue = undefined;
      this._quota.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSource = value.apiSource;
      this._attributes.internalValue = value.attributes;
      this._operations.internalValue = value.operations;
      this._quota.internalValue = value.quota;
    }
  }

  // api_source - computed: false, optional: true, required: false
  private _apiSource?: string; 
  public get apiSource() {
    return this.getStringAttribute('api_source');
  }
  public set apiSource(value: string) {
    this._apiSource = value;
  }
  public resetApiSource() {
    this._apiSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSourceInput() {
    return this._apiSource;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GoogleApigeeApiProductOperationGroupOperationConfigsAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleApigeeApiProductOperationGroupOperationConfigsOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: GoogleApigeeApiProductOperationGroupOperationConfigsQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }
}

export class GoogleApigeeApiProductOperationGroupOperationConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeApiProductOperationGroupOperationConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference {
    return new GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeApiProductOperationGroup {
  /**
  * Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operation_config_type GoogleApigeeApiProduct#operation_config_type}
  */
  readonly operationConfigType?: string;
  /**
  * operation_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}
  */
  readonly operationConfigs?: GoogleApigeeApiProductOperationGroupOperationConfigs[] | cdktf.IResolvable;
}

export function googleApigeeApiProductOperationGroupToTerraform(struct?: GoogleApigeeApiProductOperationGroupOutputReference | GoogleApigeeApiProductOperationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation_config_type: cdktf.stringToTerraform(struct!.operationConfigType),
    operation_configs: cdktf.listMapper(googleApigeeApiProductOperationGroupOperationConfigsToTerraform, true)(struct!.operationConfigs),
  }
}


export function googleApigeeApiProductOperationGroupToHclTerraform(struct?: GoogleApigeeApiProductOperationGroupOutputReference | GoogleApigeeApiProductOperationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation_config_type: {
      value: cdktf.stringToHclTerraform(struct!.operationConfigType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_configs: {
      value: cdktf.listMapperHcl(googleApigeeApiProductOperationGroupOperationConfigsToHclTerraform, true)(struct!.operationConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleApigeeApiProductOperationGroupOperationConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeApiProductOperationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeApiProductOperationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationConfigType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationConfigType = this._operationConfigType;
    }
    if (this._operationConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationConfigs = this._operationConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeApiProductOperationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operationConfigType = undefined;
      this._operationConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operationConfigType = value.operationConfigType;
      this._operationConfigs.internalValue = value.operationConfigs;
    }
  }

  // operation_config_type - computed: false, optional: true, required: false
  private _operationConfigType?: string; 
  public get operationConfigType() {
    return this.getStringAttribute('operation_config_type');
  }
  public set operationConfigType(value: string) {
    this._operationConfigType = value;
  }
  public resetOperationConfigType() {
    this._operationConfigType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationConfigTypeInput() {
    return this._operationConfigType;
  }

  // operation_configs - computed: false, optional: true, required: false
  private _operationConfigs = new GoogleApigeeApiProductOperationGroupOperationConfigsList(this, "operation_configs", true);
  public get operationConfigs() {
    return this._operationConfigs;
  }
  public putOperationConfigs(value: GoogleApigeeApiProductOperationGroupOperationConfigs[] | cdktf.IResolvable) {
    this._operationConfigs.internalValue = value;
  }
  public resetOperationConfigs() {
    this._operationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationConfigsInput() {
    return this._operationConfigs.internalValue;
  }
}
export interface GoogleApigeeApiProductTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#create GoogleApigeeApiProduct#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#delete GoogleApigeeApiProduct#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#update GoogleApigeeApiProduct#update}
  */
  readonly update?: string;
}

export function googleApigeeApiProductTimeoutsToTerraform(struct?: GoogleApigeeApiProductTimeouts | cdktf.IResolvable): any {
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


export function googleApigeeApiProductTimeoutsToHclTerraform(struct?: GoogleApigeeApiProductTimeouts | cdktf.IResolvable): any {
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

export class GoogleApigeeApiProductTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleApigeeApiProductTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApigeeApiProductTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product google_apigee_api_product}
*/
export class GoogleApigeeApiProduct extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_api_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleApigeeApiProduct resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleApigeeApiProduct to import
  * @param importFromId The id of the existing GoogleApigeeApiProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleApigeeApiProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_api_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_api_product google_apigee_api_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApigeeApiProductConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleApigeeApiProductConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_api_product',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.47.0',
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
    this._apiResources = config.apiResources;
    this._approvalType = config.approvalType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._environments = config.environments;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._proxies = config.proxies;
    this._quota = config.quota;
    this._quotaCounterScope = config.quotaCounterScope;
    this._quotaInterval = config.quotaInterval;
    this._quotaTimeUnit = config.quotaTimeUnit;
    this._scopes = config.scopes;
    this._space = config.space;
    this._attributes.internalValue = config.attributes;
    this._graphqlOperationGroup.internalValue = config.graphqlOperationGroup;
    this._grpcOperationGroup.internalValue = config.grpcOperationGroup;
    this._operationGroup.internalValue = config.operationGroup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_resources - computed: false, optional: true, required: false
  private _apiResources?: string[]; 
  public get apiResources() {
    return cdktf.Fn.tolist(this.getListAttribute('api_resources'));
  }
  public set apiResources(value: string[]) {
    this._apiResources = value;
  }
  public resetApiResources() {
    this._apiResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiResourcesInput() {
    return this._apiResources;
  }

  // approval_type - computed: false, optional: true, required: false
  private _approvalType?: string; 
  public get approvalType() {
    return this.getStringAttribute('approval_type');
  }
  public set approvalType(value: string) {
    this._approvalType = value;
  }
  public resetApprovalType() {
    this._approvalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalTypeInput() {
    return this._approvalType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
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

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
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

  // proxies - computed: false, optional: true, required: false
  private _proxies?: string[]; 
  public get proxies() {
    return cdktf.Fn.tolist(this.getListAttribute('proxies'));
  }
  public set proxies(value: string[]) {
    this._proxies = value;
  }
  public resetProxies() {
    this._proxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: string; 
  public get quota() {
    return this.getStringAttribute('quota');
  }
  public set quota(value: string) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // quota_counter_scope - computed: false, optional: true, required: false
  private _quotaCounterScope?: string; 
  public get quotaCounterScope() {
    return this.getStringAttribute('quota_counter_scope');
  }
  public set quotaCounterScope(value: string) {
    this._quotaCounterScope = value;
  }
  public resetQuotaCounterScope() {
    this._quotaCounterScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaCounterScopeInput() {
    return this._quotaCounterScope;
  }

  // quota_interval - computed: false, optional: true, required: false
  private _quotaInterval?: string; 
  public get quotaInterval() {
    return this.getStringAttribute('quota_interval');
  }
  public set quotaInterval(value: string) {
    this._quotaInterval = value;
  }
  public resetQuotaInterval() {
    this._quotaInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaIntervalInput() {
    return this._quotaInterval;
  }

  // quota_time_unit - computed: false, optional: true, required: false
  private _quotaTimeUnit?: string; 
  public get quotaTimeUnit() {
    return this.getStringAttribute('quota_time_unit');
  }
  public set quotaTimeUnit(value: string) {
    this._quotaTimeUnit = value;
  }
  public resetQuotaTimeUnit() {
    this._quotaTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaTimeUnitInput() {
    return this._quotaTimeUnit;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // space - computed: false, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new GoogleApigeeApiProductAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GoogleApigeeApiProductAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // graphql_operation_group - computed: false, optional: true, required: false
  private _graphqlOperationGroup = new GoogleApigeeApiProductGraphqlOperationGroupOutputReference(this, "graphql_operation_group");
  public get graphqlOperationGroup() {
    return this._graphqlOperationGroup;
  }
  public putGraphqlOperationGroup(value: GoogleApigeeApiProductGraphqlOperationGroup) {
    this._graphqlOperationGroup.internalValue = value;
  }
  public resetGraphqlOperationGroup() {
    this._graphqlOperationGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlOperationGroupInput() {
    return this._graphqlOperationGroup.internalValue;
  }

  // grpc_operation_group - computed: false, optional: true, required: false
  private _grpcOperationGroup = new GoogleApigeeApiProductGrpcOperationGroupOutputReference(this, "grpc_operation_group");
  public get grpcOperationGroup() {
    return this._grpcOperationGroup;
  }
  public putGrpcOperationGroup(value: GoogleApigeeApiProductGrpcOperationGroup) {
    this._grpcOperationGroup.internalValue = value;
  }
  public resetGrpcOperationGroup() {
    this._grpcOperationGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcOperationGroupInput() {
    return this._grpcOperationGroup.internalValue;
  }

  // operation_group - computed: false, optional: true, required: false
  private _operationGroup = new GoogleApigeeApiProductOperationGroupOutputReference(this, "operation_group");
  public get operationGroup() {
    return this._operationGroup;
  }
  public putOperationGroup(value: GoogleApigeeApiProductOperationGroup) {
    this._operationGroup.internalValue = value;
  }
  public resetOperationGroup() {
    this._operationGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationGroupInput() {
    return this._operationGroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApigeeApiProductTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApigeeApiProductTimeouts) {
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
      api_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiResources),
      approval_type: cdktf.stringToTerraform(this._approvalType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      proxies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proxies),
      quota: cdktf.stringToTerraform(this._quota),
      quota_counter_scope: cdktf.stringToTerraform(this._quotaCounterScope),
      quota_interval: cdktf.stringToTerraform(this._quotaInterval),
      quota_time_unit: cdktf.stringToTerraform(this._quotaTimeUnit),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      space: cdktf.stringToTerraform(this._space),
      attributes: cdktf.listMapper(googleApigeeApiProductAttributesToTerraform, true)(this._attributes.internalValue),
      graphql_operation_group: googleApigeeApiProductGraphqlOperationGroupToTerraform(this._graphqlOperationGroup.internalValue),
      grpc_operation_group: googleApigeeApiProductGrpcOperationGroupToTerraform(this._grpcOperationGroup.internalValue),
      operation_group: googleApigeeApiProductOperationGroupToTerraform(this._operationGroup.internalValue),
      timeouts: googleApigeeApiProductTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiResources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      approval_type: {
        value: cdktf.stringToHclTerraform(this._approvalType),
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
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      proxies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proxies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      quota: {
        value: cdktf.stringToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_counter_scope: {
        value: cdktf.stringToHclTerraform(this._quotaCounterScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_interval: {
        value: cdktf.stringToHclTerraform(this._quotaInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_time_unit: {
        value: cdktf.stringToHclTerraform(this._quotaTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.listMapperHcl(googleApigeeApiProductAttributesToHclTerraform, true)(this._attributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleApigeeApiProductAttributesList",
      },
      graphql_operation_group: {
        value: googleApigeeApiProductGraphqlOperationGroupToHclTerraform(this._graphqlOperationGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApigeeApiProductGraphqlOperationGroupList",
      },
      grpc_operation_group: {
        value: googleApigeeApiProductGrpcOperationGroupToHclTerraform(this._grpcOperationGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApigeeApiProductGrpcOperationGroupList",
      },
      operation_group: {
        value: googleApigeeApiProductOperationGroupToHclTerraform(this._operationGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApigeeApiProductOperationGroupList",
      },
      timeouts: {
        value: googleApigeeApiProductTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleApigeeApiProductTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
