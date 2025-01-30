/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIntegrationConnectorsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * connectorVersion of the Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#connector_version GoogleIntegrationConnectorsConnection#connector_version}
  */
  readonly connectorVersion: string;
  /**
  * An arbitrary description for the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#description GoogleIntegrationConnectorsConnection#description}
  */
  readonly description?: string;
  /**
  * Eventing enablement type. Will be nil if eventing is not enabled. Possible values: ["EVENTING_AND_CONNECTION", "ONLY_EVENTING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#eventing_enablement_type GoogleIntegrationConnectorsConnection#eventing_enablement_type}
  */
  readonly eventingEnablementType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#id GoogleIntegrationConnectorsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user provided metadata.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#labels GoogleIntegrationConnectorsConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location in which Connection needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#location GoogleIntegrationConnectorsConnection#location}
  */
  readonly location: string;
  /**
  * Name of Connection needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#name GoogleIntegrationConnectorsConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#project GoogleIntegrationConnectorsConnection#project}
  */
  readonly project?: string;
  /**
  * Service account needed for runtime plane to access Google Cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#service_account GoogleIntegrationConnectorsConnection#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Suspended indicates if a user has suspended a connection or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#suspended GoogleIntegrationConnectorsConnection#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#auth_config GoogleIntegrationConnectorsConnection#auth_config}
  */
  readonly authConfig?: GoogleIntegrationConnectorsConnectionAuthConfig;
  /**
  * config_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#config_variable GoogleIntegrationConnectorsConnection#config_variable}
  */
  readonly configVariable?: GoogleIntegrationConnectorsConnectionConfigVariable[] | cdktf.IResolvable;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#destination_config GoogleIntegrationConnectorsConnection#destination_config}
  */
  readonly destinationConfig?: GoogleIntegrationConnectorsConnectionDestinationConfig[] | cdktf.IResolvable;
  /**
  * eventing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#eventing_config GoogleIntegrationConnectorsConnection#eventing_config}
  */
  readonly eventingConfig?: GoogleIntegrationConnectorsConnectionEventingConfig;
  /**
  * lock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#lock_config GoogleIntegrationConnectorsConnection#lock_config}
  */
  readonly lockConfig?: GoogleIntegrationConnectorsConnectionLockConfig;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#log_config GoogleIntegrationConnectorsConnection#log_config}
  */
  readonly logConfig?: GoogleIntegrationConnectorsConnectionLogConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#node_config GoogleIntegrationConnectorsConnection#node_config}
  */
  readonly nodeConfig?: GoogleIntegrationConnectorsConnectionNodeConfig;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#ssl_config GoogleIntegrationConnectorsConnection#ssl_config}
  */
  readonly sslConfig?: GoogleIntegrationConnectorsConnectionSslConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#timeouts GoogleIntegrationConnectorsConnection#timeouts}
  */
  readonly timeouts?: GoogleIntegrationConnectorsConnectionTimeouts;
}
export interface GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfig {
}

export function googleIntegrationConnectorsConnectionConnectorVersionInfraConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleIntegrationConnectorsConnectionConnectorVersionInfraConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ratelimit_threshold - computed: true, optional: false, required: false
  public get ratelimitThreshold() {
    return this.getStringAttribute('ratelimit_threshold');
  }
}

export class GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfigOutputReference {
    return new GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatus {
}

export function googleIntegrationConnectorsConnectionEventingRuntimeDataStatusToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleIntegrationConnectorsConnectionEventingRuntimeDataStatusToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatusOutputReference {
    return new GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingRuntimeData {
}

export function googleIntegrationConnectorsConnectionEventingRuntimeDataToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingRuntimeData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleIntegrationConnectorsConnectionEventingRuntimeDataToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingRuntimeData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleIntegrationConnectorsConnectionEventingRuntimeDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingRuntimeData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingRuntimeData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events_listener_endpoint - computed: true, optional: false, required: false
  public get eventsListenerEndpoint() {
    return this.getStringAttribute('events_listener_endpoint');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleIntegrationConnectorsConnectionEventingRuntimeDataStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}

export class GoogleIntegrationConnectorsConnectionEventingRuntimeDataList extends cdktf.ComplexList {

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
  public get(index: number): GoogleIntegrationConnectorsConnectionEventingRuntimeDataOutputReference {
    return new GoogleIntegrationConnectorsConnectionEventingRuntimeDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionStatus {
}

export function googleIntegrationConnectorsConnectionStatusToTerraform(struct?: GoogleIntegrationConnectorsConnectionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleIntegrationConnectorsConnectionStatusToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleIntegrationConnectorsConnectionStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class GoogleIntegrationConnectorsConnectionStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleIntegrationConnectorsConnectionStatusOutputReference {
    return new GoogleIntegrationConnectorsConnectionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The
  * expected format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#kms_key_name GoogleIntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encryption Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#type GoogleIntegrationConnectorsConnection#type}
  */
  readonly type: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
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

export class GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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
export interface GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariable {
  /**
  * Boolean Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#boolean_value GoogleIntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#integer_value GoogleIntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#key GoogleIntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#string_value GoogleIntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#encryption_key_value GoogleIntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_value GoogleIntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue;
}

export function googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableList extends cdktf.ComplexList {
  public internalValue? : GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariable[] | cdktf.IResolvable

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
  public get(index: number): GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableOutputReference {
    return new GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow {
  /**
  * Auth URL for Authorization Code Flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#auth_uri GoogleIntegrationConnectorsConnection#auth_uri}
  */
  readonly authUri?: string;
  /**
  * Client ID for user-provided OAuth app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_id GoogleIntegrationConnectorsConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Whether to enable PKCE when the user performs the auth code flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#enable_pkce GoogleIntegrationConnectorsConnection#enable_pkce}
  */
  readonly enablePkce?: boolean | cdktf.IResolvable;
  /**
  * Scopes the connection will request when the user performs the auth code flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#scopes GoogleIntegrationConnectorsConnection#scopes}
  */
  readonly scopes?: string[];
  /**
  * client_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_secret GoogleIntegrationConnectorsConnection#client_secret}
  */
  readonly clientSecret?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret;
}

export function googleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_uri: cdktf.stringToTerraform(struct!.authUri),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    enable_pkce: cdktf.booleanToTerraform(struct!.enablePkce),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    client_secret: googleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretToTerraform(struct!.clientSecret),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_uri: {
      value: cdktf.stringToHclTerraform(struct!.authUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pkce: {
      value: cdktf.booleanToHclTerraform(struct!.enablePkce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_secret: {
      value: googleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUri = this._authUri;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._enablePkce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePkce = this._enablePkce;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authUri = undefined;
      this._clientId = undefined;
      this._enablePkce = undefined;
      this._scopes = undefined;
      this._clientSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authUri = value.authUri;
      this._clientId = value.clientId;
      this._enablePkce = value.enablePkce;
      this._scopes = value.scopes;
      this._clientSecret.internalValue = value.clientSecret;
    }
  }

  // auth_uri - computed: false, optional: true, required: false
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  public resetAuthUri() {
    this._authUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // enable_pkce - computed: false, optional: true, required: false
  private _enablePkce?: boolean | cdktf.IResolvable; 
  public get enablePkce() {
    return this.getBooleanAttribute('enable_pkce');
  }
  public set enablePkce(value: boolean | cdktf.IResolvable) {
    this._enablePkce = value;
  }
  public resetEnablePkce() {
    this._enablePkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePkceInput() {
    return this._enablePkce;
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

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials {
  /**
  * Secret version of Password for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_id GoogleIntegrationConnectorsConnection#client_id}
  */
  readonly clientId: string;
  /**
  * client_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_secret GoogleIntegrationConnectorsConnection#client_secret}
  */
  readonly clientSecret?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret;
}

export function googleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: googleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretToTerraform(struct!.clientSecret),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: googleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims {
  /**
  * Value for the "aud" claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#audience GoogleIntegrationConnectorsConnection#audience}
  */
  readonly audience?: string;
  /**
  * Value for the "iss" claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#issuer GoogleIntegrationConnectorsConnection#issuer}
  */
  readonly issuer?: string;
  /**
  * Value for the "sub" claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#subject GoogleIntegrationConnectorsConnection#subject}
  */
  readonly subject?: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearer {
  /**
  * client_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_key GoogleIntegrationConnectorsConnection#client_key}
  */
  readonly clientKey?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#jwt_claims GoogleIntegrationConnectorsConnection#jwt_claims}
  */
  readonly jwtClaims?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims;
}

export function googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_key: googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyToTerraform(struct!.clientKey),
    jwt_claims: googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsToTerraform(struct!.jwtClaims),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_key: {
      value: googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyToHclTerraform(struct!.clientKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyList",
    },
    jwt_claims: {
      value: googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsToHclTerraform(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientKey.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientKey.internalValue = value.clientKey;
      this._jwtClaims.internalValue = value.jwtClaims;
    }
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey = new GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyOutputReference(this, "client_key");
  public get clientKey() {
    return this._clientKey;
  }
  public putClientKey(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey) {
    this._clientKey.internalValue = value;
  }
  public resetClientKey() {
    this._clientKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsOutputReference(this, "jwt_claims");
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKey {
  /**
  * Format of SSH Client cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#cert_type GoogleIntegrationConnectorsConnection#cert_type}
  */
  readonly certType?: string;
  /**
  * The user account used to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#username GoogleIntegrationConnectorsConnection#username}
  */
  readonly username: string;
  /**
  * ssh_client_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#ssh_client_cert GoogleIntegrationConnectorsConnection#ssh_client_cert}
  */
  readonly sshClientCert?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert;
  /**
  * ssh_client_cert_pass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#ssh_client_cert_pass GoogleIntegrationConnectorsConnection#ssh_client_cert_pass}
  */
  readonly sshClientCertPass?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass;
}

export function googleIntegrationConnectorsConnectionAuthConfigSshPublicKeyToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeyOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_type: cdktf.stringToTerraform(struct!.certType),
    username: cdktf.stringToTerraform(struct!.username),
    ssh_client_cert: googleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertToTerraform(struct!.sshClientCert),
    ssh_client_cert_pass: googleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassToTerraform(struct!.sshClientCertPass),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigSshPublicKeyToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeyOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_type: {
      value: cdktf.stringToHclTerraform(struct!.certType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_client_cert: {
      value: googleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertToHclTerraform(struct!.sshClientCert),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertList",
    },
    ssh_client_cert_pass: {
      value: googleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassToHclTerraform(struct!.sshClientCertPass),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certType = this._certType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._sshClientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshClientCert = this._sshClientCert?.internalValue;
    }
    if (this._sshClientCertPass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshClientCertPass = this._sshClientCertPass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certType = undefined;
      this._username = undefined;
      this._sshClientCert.internalValue = undefined;
      this._sshClientCertPass.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certType = value.certType;
      this._username = value.username;
      this._sshClientCert.internalValue = value.sshClientCert;
      this._sshClientCertPass.internalValue = value.sshClientCertPass;
    }
  }

  // cert_type - computed: false, optional: true, required: false
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // ssh_client_cert - computed: false, optional: true, required: false
  private _sshClientCert = new GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertOutputReference(this, "ssh_client_cert");
  public get sshClientCert() {
    return this._sshClientCert;
  }
  public putSshClientCert(value: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert) {
    this._sshClientCert.internalValue = value;
  }
  public resetSshClientCert() {
    this._sshClientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshClientCertInput() {
    return this._sshClientCert.internalValue;
  }

  // ssh_client_cert_pass - computed: false, optional: true, required: false
  private _sshClientCertPass = new GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassOutputReference(this, "ssh_client_cert_pass");
  public get sshClientCertPass() {
    return this._sshClientCertPass;
  }
  public putSshClientCertPass(value: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass) {
    this._sshClientCertPass.internalValue = value;
  }
  public resetSshClientCertPass() {
    this._sshClientCertPass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshClientCertPassInput() {
    return this._sshClientCertPass.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPassword {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfigUserPassword {
  /**
  * Username for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#username GoogleIntegrationConnectorsConnection#username}
  */
  readonly username: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#password GoogleIntegrationConnectorsConnection#password}
  */
  readonly password?: GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPassword;
}

export function googleIntegrationConnectorsConnectionAuthConfigUserPasswordToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: googleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordToTerraform(struct!.password),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigUserPasswordToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordOutputReference | GoogleIntegrationConnectorsConnectionAuthConfigUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: googleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfigUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfigUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: true, required: false
  private _password = new GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionAuthConfig {
  /**
  * The type of authentication configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#auth_key GoogleIntegrationConnectorsConnection#auth_key}
  */
  readonly authKey?: string;
  /**
  * authType of the Connection Possible values: ["AUTH_TYPE_UNSPECIFIED", "USER_PASSWORD", "OAUTH2_JWT_BEARER", "OAUTH2_CLIENT_CREDENTIALS", "SSH_PUBLIC_KEY", "OAUTH2_AUTH_CODE_FLOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#auth_type GoogleIntegrationConnectorsConnection#auth_type}
  */
  readonly authType: string;
  /**
  * additional_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#additional_variable GoogleIntegrationConnectorsConnection#additional_variable}
  */
  readonly additionalVariable?: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariable[] | cdktf.IResolvable;
  /**
  * oauth2_auth_code_flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#oauth2_auth_code_flow GoogleIntegrationConnectorsConnection#oauth2_auth_code_flow}
  */
  readonly oauth2AuthCodeFlow?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow;
  /**
  * oauth2_client_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#oauth2_client_credentials GoogleIntegrationConnectorsConnection#oauth2_client_credentials}
  */
  readonly oauth2ClientCredentials?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials;
  /**
  * oauth2_jwt_bearer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#oauth2_jwt_bearer GoogleIntegrationConnectorsConnection#oauth2_jwt_bearer}
  */
  readonly oauth2JwtBearer?: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearer;
  /**
  * ssh_public_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#ssh_public_key GoogleIntegrationConnectorsConnection#ssh_public_key}
  */
  readonly sshPublicKey?: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKey;
  /**
  * user_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#user_password GoogleIntegrationConnectorsConnection#user_password}
  */
  readonly userPassword?: GoogleIntegrationConnectorsConnectionAuthConfigUserPassword;
}

export function googleIntegrationConnectorsConnectionAuthConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOutputReference | GoogleIntegrationConnectorsConnectionAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    additional_variable: cdktf.listMapper(googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableToTerraform, true)(struct!.additionalVariable),
    oauth2_auth_code_flow: googleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowToTerraform(struct!.oauth2AuthCodeFlow),
    oauth2_client_credentials: googleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsToTerraform(struct!.oauth2ClientCredentials),
    oauth2_jwt_bearer: googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerToTerraform(struct!.oauth2JwtBearer),
    ssh_public_key: googleIntegrationConnectorsConnectionAuthConfigSshPublicKeyToTerraform(struct!.sshPublicKey),
    user_password: googleIntegrationConnectorsConnectionAuthConfigUserPasswordToTerraform(struct!.userPassword),
  }
}


export function googleIntegrationConnectorsConnectionAuthConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionAuthConfigOutputReference | GoogleIntegrationConnectorsConnectionAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_variable: {
      value: cdktf.listMapperHcl(googleIntegrationConnectorsConnectionAuthConfigAdditionalVariableToHclTerraform, true)(struct!.additionalVariable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableList",
    },
    oauth2_auth_code_flow: {
      value: googleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowToHclTerraform(struct!.oauth2AuthCodeFlow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowList",
    },
    oauth2_client_credentials: {
      value: googleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsToHclTerraform(struct!.oauth2ClientCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsList",
    },
    oauth2_jwt_bearer: {
      value: googleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerToHclTerraform(struct!.oauth2JwtBearer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerList",
    },
    ssh_public_key: {
      value: googleIntegrationConnectorsConnectionAuthConfigSshPublicKeyToHclTerraform(struct!.sshPublicKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeyList",
    },
    user_password: {
      value: googleIntegrationConnectorsConnectionAuthConfigUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._additionalVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariable = this._additionalVariable?.internalValue;
    }
    if (this._oauth2AuthCodeFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2AuthCodeFlow = this._oauth2AuthCodeFlow?.internalValue;
    }
    if (this._oauth2ClientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientCredentials = this._oauth2ClientCredentials?.internalValue;
    }
    if (this._oauth2JwtBearer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2JwtBearer = this._oauth2JwtBearer?.internalValue;
    }
    if (this._sshPublicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey?.internalValue;
    }
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authKey = undefined;
      this._authType = undefined;
      this._additionalVariable.internalValue = undefined;
      this._oauth2AuthCodeFlow.internalValue = undefined;
      this._oauth2ClientCredentials.internalValue = undefined;
      this._oauth2JwtBearer.internalValue = undefined;
      this._sshPublicKey.internalValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authKey = value.authKey;
      this._authType = value.authType;
      this._additionalVariable.internalValue = value.additionalVariable;
      this._oauth2AuthCodeFlow.internalValue = value.oauth2AuthCodeFlow;
      this._oauth2ClientCredentials.internalValue = value.oauth2ClientCredentials;
      this._oauth2JwtBearer.internalValue = value.oauth2JwtBearer;
      this._sshPublicKey.internalValue = value.sshPublicKey;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // additional_variable - computed: false, optional: true, required: false
  private _additionalVariable = new GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariableList(this, "additional_variable", false);
  public get additionalVariable() {
    return this._additionalVariable;
  }
  public putAdditionalVariable(value: GoogleIntegrationConnectorsConnectionAuthConfigAdditionalVariable[] | cdktf.IResolvable) {
    this._additionalVariable.internalValue = value;
  }
  public resetAdditionalVariable() {
    this._additionalVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableInput() {
    return this._additionalVariable.internalValue;
  }

  // oauth2_auth_code_flow - computed: false, optional: true, required: false
  private _oauth2AuthCodeFlow = new GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowOutputReference(this, "oauth2_auth_code_flow");
  public get oauth2AuthCodeFlow() {
    return this._oauth2AuthCodeFlow;
  }
  public putOauth2AuthCodeFlow(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow) {
    this._oauth2AuthCodeFlow.internalValue = value;
  }
  public resetOauth2AuthCodeFlow() {
    this._oauth2AuthCodeFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthCodeFlowInput() {
    return this._oauth2AuthCodeFlow.internalValue;
  }

  // oauth2_client_credentials - computed: false, optional: true, required: false
  private _oauth2ClientCredentials = new GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsOutputReference(this, "oauth2_client_credentials");
  public get oauth2ClientCredentials() {
    return this._oauth2ClientCredentials;
  }
  public putOauth2ClientCredentials(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials) {
    this._oauth2ClientCredentials.internalValue = value;
  }
  public resetOauth2ClientCredentials() {
    this._oauth2ClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientCredentialsInput() {
    return this._oauth2ClientCredentials.internalValue;
  }

  // oauth2_jwt_bearer - computed: false, optional: true, required: false
  private _oauth2JwtBearer = new GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearerOutputReference(this, "oauth2_jwt_bearer");
  public get oauth2JwtBearer() {
    return this._oauth2JwtBearer;
  }
  public putOauth2JwtBearer(value: GoogleIntegrationConnectorsConnectionAuthConfigOauth2JwtBearer) {
    this._oauth2JwtBearer.internalValue = value;
  }
  public resetOauth2JwtBearer() {
    this._oauth2JwtBearer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2JwtBearerInput() {
    return this._oauth2JwtBearer.internalValue;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey = new GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKeyOutputReference(this, "ssh_public_key");
  public get sshPublicKey() {
    return this._sshPublicKey;
  }
  public putSshPublicKey(value: GoogleIntegrationConnectorsConnectionAuthConfigSshPublicKey) {
    this._sshPublicKey.internalValue = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey.internalValue;
  }

  // user_password - computed: false, optional: true, required: false
  private _userPassword = new GoogleIntegrationConnectorsConnectionAuthConfigUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: GoogleIntegrationConnectorsConnectionAuthConfigUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The
  * expected format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#kms_key_name GoogleIntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encryption Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#type GoogleIntegrationConnectorsConnection#type}
  */
  readonly type: string;
}

export function googleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
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

export class GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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
export interface GoogleIntegrationConnectorsConnectionConfigVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionConfigVariableSecretValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionConfigVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionConfigVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionConfigVariableSecretValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionConfigVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionConfigVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionConfigVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionConfigVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionConfigVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionConfigVariable {
  /**
  * Boolean Value of configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#boolean_value GoogleIntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#integer_value GoogleIntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#key GoogleIntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#string_value GoogleIntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#encryption_key_value GoogleIntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_value GoogleIntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: GoogleIntegrationConnectorsConnectionConfigVariableSecretValue;
}

export function googleIntegrationConnectorsConnectionConfigVariableToTerraform(struct?: GoogleIntegrationConnectorsConnectionConfigVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: googleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: googleIntegrationConnectorsConnectionConfigVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function googleIntegrationConnectorsConnectionConfigVariableToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionConfigVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: googleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: googleIntegrationConnectorsConnectionConfigVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionConfigVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionConfigVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionConfigVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionConfigVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: GoogleIntegrationConnectorsConnectionConfigVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new GoogleIntegrationConnectorsConnectionConfigVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: GoogleIntegrationConnectorsConnectionConfigVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class GoogleIntegrationConnectorsConnectionConfigVariableList extends cdktf.ComplexList {
  public internalValue? : GoogleIntegrationConnectorsConnectionConfigVariable[] | cdktf.IResolvable

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
  public get(index: number): GoogleIntegrationConnectorsConnectionConfigVariableOutputReference {
    return new GoogleIntegrationConnectorsConnectionConfigVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionDestinationConfigDestination {
  /**
  * For publicly routable host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#host GoogleIntegrationConnectorsConnection#host}
  */
  readonly host?: string;
  /**
  * The port is the target port number that is accepted by the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#port GoogleIntegrationConnectorsConnection#port}
  */
  readonly port?: number;
  /**
  * PSC service attachments. Format: projects/* /regions/* /serviceAttachments/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#service_attachment GoogleIntegrationConnectorsConnection#service_attachment}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly serviceAttachment?: string;
}

export function googleIntegrationConnectorsConnectionDestinationConfigDestinationToTerraform(struct?: GoogleIntegrationConnectorsConnectionDestinationConfigDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    service_attachment: cdktf.stringToTerraform(struct!.serviceAttachment),
  }
}


export function googleIntegrationConnectorsConnectionDestinationConfigDestinationToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionDestinationConfigDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_attachment: {
      value: cdktf.stringToHclTerraform(struct!.serviceAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionDestinationConfigDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionDestinationConfigDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachment = this._serviceAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionDestinationConfigDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._serviceAttachment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._serviceAttachment = value.serviceAttachment;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_attachment - computed: false, optional: true, required: false
  private _serviceAttachment?: string; 
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
  public set serviceAttachment(value: string) {
    this._serviceAttachment = value;
  }
  public resetServiceAttachment() {
    this._serviceAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment;
  }
}

export class GoogleIntegrationConnectorsConnectionDestinationConfigDestinationList extends cdktf.ComplexList {
  public internalValue? : GoogleIntegrationConnectorsConnectionDestinationConfigDestination[] | cdktf.IResolvable

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
  public get(index: number): GoogleIntegrationConnectorsConnectionDestinationConfigDestinationOutputReference {
    return new GoogleIntegrationConnectorsConnectionDestinationConfigDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionDestinationConfig {
  /**
  * The key is the destination identifier that is supported by the Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#key GoogleIntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#destination GoogleIntegrationConnectorsConnection#destination}
  */
  readonly destination?: GoogleIntegrationConnectorsConnectionDestinationConfigDestination[] | cdktf.IResolvable;
}

export function googleIntegrationConnectorsConnectionDestinationConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    destination: cdktf.listMapper(googleIntegrationConnectorsConnectionDestinationConfigDestinationToTerraform, true)(struct!.destination),
  }
}


export function googleIntegrationConnectorsConnectionDestinationConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.listMapperHcl(googleIntegrationConnectorsConnectionDestinationConfigDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionDestinationConfigDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionDestinationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._destination.internalValue = value.destination;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new GoogleIntegrationConnectorsConnectionDestinationConfigDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: GoogleIntegrationConnectorsConnectionDestinationConfigDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}

export class GoogleIntegrationConnectorsConnectionDestinationConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleIntegrationConnectorsConnectionDestinationConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleIntegrationConnectorsConnectionDestinationConfigOutputReference {
    return new GoogleIntegrationConnectorsConnectionDestinationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The
  * expected format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#kms_key_name GoogleIntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encryption Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#type GoogleIntegrationConnectorsConnection#type}
  */
  readonly type?: string;
}

export function googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
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

export class GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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
export interface GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariable {
  /**
  * Boolean Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#boolean_value GoogleIntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#integer_value GoogleIntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#key GoogleIntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#string_value GoogleIntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#encryption_key_value GoogleIntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_value GoogleIntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue;
}

export function googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableList extends cdktf.ComplexList {
  public internalValue? : GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariable[] | cdktf.IResolvable

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
  public get(index: number): GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableOutputReference {
    return new GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The
  * expected format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#kms_key_name GoogleIntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encryption Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#type GoogleIntegrationConnectorsConnection#type}
  */
  readonly type?: string;
}

export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
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

export class GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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
export interface GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable {
  /**
  * Boolean Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#boolean_value GoogleIntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#integer_value GoogleIntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#key GoogleIntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#string_value GoogleIntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#encryption_key_value GoogleIntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_value GoogleIntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue;
}

export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableList extends cdktf.ComplexList {
  public internalValue? : GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable[] | cdktf.IResolvable

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
  public get(index: number): GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableOutputReference {
    return new GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword {
  /**
  * Username for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#username GoogleIntegrationConnectorsConnection#username}
  */
  readonly username?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#password GoogleIntegrationConnectorsConnection#password}
  */
  readonly password?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword;
}

export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: googleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordToTerraform(struct!.password),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: googleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: true, required: false
  private _password = new GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigAuthConfig {
  /**
  * The type of authentication configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#auth_key GoogleIntegrationConnectorsConnection#auth_key}
  */
  readonly authKey?: string;
  /**
  * authType of the Connection Possible values: ["USER_PASSWORD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#auth_type GoogleIntegrationConnectorsConnection#auth_type}
  */
  readonly authType: string;
  /**
  * additional_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#additional_variable GoogleIntegrationConnectorsConnection#additional_variable}
  */
  readonly additionalVariable?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable[] | cdktf.IResolvable;
  /**
  * user_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#user_password GoogleIntegrationConnectorsConnection#user_password}
  */
  readonly userPassword: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword;
}

export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    additional_variable: cdktf.listMapper(googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableToTerraform, true)(struct!.additionalVariable),
    user_password: googleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordToTerraform(struct!.userPassword),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigAuthConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_variable: {
      value: cdktf.listMapperHcl(googleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableToHclTerraform, true)(struct!.additionalVariable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableList",
    },
    user_password: {
      value: googleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._additionalVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariable = this._additionalVariable?.internalValue;
    }
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authKey = undefined;
      this._authType = undefined;
      this._additionalVariable.internalValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authKey = value.authKey;
      this._authType = value.authType;
      this._additionalVariable.internalValue = value.additionalVariable;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // additional_variable - computed: false, optional: true, required: false
  private _additionalVariable = new GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableList(this, "additional_variable", false);
  public get additionalVariable() {
    return this._additionalVariable;
  }
  public putAdditionalVariable(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable[] | cdktf.IResolvable) {
    this._additionalVariable.internalValue = value;
  }
  public resetAdditionalVariable() {
    this._additionalVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableInput() {
    return this._additionalVariable.internalValue;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword = new GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword) {
    this._userPassword.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination {
  /**
  * Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#host GoogleIntegrationConnectorsConnection#host}
  */
  readonly host?: string;
  /**
  * port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#port GoogleIntegrationConnectorsConnection#port}
  */
  readonly port?: number;
  /**
  * Service Attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#service_attachment GoogleIntegrationConnectorsConnection#service_attachment}
  */
  readonly serviceAttachment?: string;
}

export function googleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    service_attachment: cdktf.stringToTerraform(struct!.serviceAttachment),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_attachment: {
      value: cdktf.stringToHclTerraform(struct!.serviceAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachment = this._serviceAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._serviceAttachment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._serviceAttachment = value.serviceAttachment;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_attachment - computed: false, optional: true, required: false
  private _serviceAttachment?: string; 
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
  public set serviceAttachment(value: string) {
    this._serviceAttachment = value;
  }
  public resetServiceAttachment() {
    this._serviceAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment;
  }
}

export class GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationList extends cdktf.ComplexList {
  public internalValue? : GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination[] | cdktf.IResolvable

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
  public get(index: number): GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationOutputReference {
    return new GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig {
  /**
  * Key for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#key GoogleIntegrationConnectorsConnection#key}
  */
  readonly key?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#destination GoogleIntegrationConnectorsConnection#destination}
  */
  readonly destination?: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination[] | cdktf.IResolvable;
}

export function googleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    destination: cdktf.listMapper(googleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationToTerraform, true)(struct!.destination),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigOutputReference | GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.listMapperHcl(googleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._destination.internalValue = value.destination;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionEventingConfig {
  /**
  * Enrichment Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#enrichment_enabled GoogleIntegrationConnectorsConnection#enrichment_enabled}
  */
  readonly enrichmentEnabled?: boolean | cdktf.IResolvable;
  /**
  * additional_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#additional_variable GoogleIntegrationConnectorsConnection#additional_variable}
  */
  readonly additionalVariable?: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariable[] | cdktf.IResolvable;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#auth_config GoogleIntegrationConnectorsConnection#auth_config}
  */
  readonly authConfig?: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfig;
  /**
  * registration_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#registration_destination_config GoogleIntegrationConnectorsConnection#registration_destination_config}
  */
  readonly registrationDestinationConfig: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig;
}

export function googleIntegrationConnectorsConnectionEventingConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigOutputReference | GoogleIntegrationConnectorsConnectionEventingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enrichment_enabled: cdktf.booleanToTerraform(struct!.enrichmentEnabled),
    additional_variable: cdktf.listMapper(googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableToTerraform, true)(struct!.additionalVariable),
    auth_config: googleIntegrationConnectorsConnectionEventingConfigAuthConfigToTerraform(struct!.authConfig),
    registration_destination_config: googleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigToTerraform(struct!.registrationDestinationConfig),
  }
}


export function googleIntegrationConnectorsConnectionEventingConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionEventingConfigOutputReference | GoogleIntegrationConnectorsConnectionEventingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enrichment_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enrichmentEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    additional_variable: {
      value: cdktf.listMapperHcl(googleIntegrationConnectorsConnectionEventingConfigAdditionalVariableToHclTerraform, true)(struct!.additionalVariable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableList",
    },
    auth_config: {
      value: googleIntegrationConnectorsConnectionEventingConfigAuthConfigToHclTerraform(struct!.authConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigList",
    },
    registration_destination_config: {
      value: googleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigToHclTerraform(struct!.registrationDestinationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionEventingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionEventingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enrichmentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichmentEnabled = this._enrichmentEnabled;
    }
    if (this._additionalVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariable = this._additionalVariable?.internalValue;
    }
    if (this._authConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfig = this._authConfig?.internalValue;
    }
    if (this._registrationDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationDestinationConfig = this._registrationDestinationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionEventingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enrichmentEnabled = undefined;
      this._additionalVariable.internalValue = undefined;
      this._authConfig.internalValue = undefined;
      this._registrationDestinationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enrichmentEnabled = value.enrichmentEnabled;
      this._additionalVariable.internalValue = value.additionalVariable;
      this._authConfig.internalValue = value.authConfig;
      this._registrationDestinationConfig.internalValue = value.registrationDestinationConfig;
    }
  }

  // enrichment_enabled - computed: false, optional: true, required: false
  private _enrichmentEnabled?: boolean | cdktf.IResolvable; 
  public get enrichmentEnabled() {
    return this.getBooleanAttribute('enrichment_enabled');
  }
  public set enrichmentEnabled(value: boolean | cdktf.IResolvable) {
    this._enrichmentEnabled = value;
  }
  public resetEnrichmentEnabled() {
    this._enrichmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentEnabledInput() {
    return this._enrichmentEnabled;
  }

  // additional_variable - computed: false, optional: true, required: false
  private _additionalVariable = new GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariableList(this, "additional_variable", false);
  public get additionalVariable() {
    return this._additionalVariable;
  }
  public putAdditionalVariable(value: GoogleIntegrationConnectorsConnectionEventingConfigAdditionalVariable[] | cdktf.IResolvable) {
    this._additionalVariable.internalValue = value;
  }
  public resetAdditionalVariable() {
    this._additionalVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableInput() {
    return this._additionalVariable.internalValue;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new GoogleIntegrationConnectorsConnectionEventingConfigAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: GoogleIntegrationConnectorsConnectionEventingConfigAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // registration_destination_config - computed: false, optional: false, required: true
  private _registrationDestinationConfig = new GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigOutputReference(this, "registration_destination_config");
  public get registrationDestinationConfig() {
    return this._registrationDestinationConfig;
  }
  public putRegistrationDestinationConfig(value: GoogleIntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig) {
    this._registrationDestinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationDestinationConfigInput() {
    return this._registrationDestinationConfig.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionLockConfig {
  /**
  * Indicates whether or not the connection is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#locked GoogleIntegrationConnectorsConnection#locked}
  */
  readonly locked: boolean | cdktf.IResolvable;
  /**
  * Describes why a connection is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#reason GoogleIntegrationConnectorsConnection#reason}
  */
  readonly reason?: string;
}

export function googleIntegrationConnectorsConnectionLockConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionLockConfigOutputReference | GoogleIntegrationConnectorsConnectionLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locked: cdktf.booleanToTerraform(struct!.locked),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function googleIntegrationConnectorsConnectionLockConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionLockConfigOutputReference | GoogleIntegrationConnectorsConnectionLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionLockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionLockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionLockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locked = undefined;
      this._reason = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locked = value.locked;
      this._reason = value.reason;
    }
  }

  // locked - computed: false, optional: false, required: true
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface GoogleIntegrationConnectorsConnectionLogConfig {
  /**
  * Enabled represents whether logging is enabled or not for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#enabled GoogleIntegrationConnectorsConnection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleIntegrationConnectorsConnectionLogConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionLogConfigOutputReference | GoogleIntegrationConnectorsConnectionLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleIntegrationConnectorsConnectionLogConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionLogConfigOutputReference | GoogleIntegrationConnectorsConnectionLogConfig): any {
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

export class GoogleIntegrationConnectorsConnectionLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionLogConfig | undefined) {
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
export interface GoogleIntegrationConnectorsConnectionNodeConfig {
  /**
  * Minimum number of nodes in the runtime nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#max_node_count GoogleIntegrationConnectorsConnection#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes in the runtime nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#min_node_count GoogleIntegrationConnectorsConnection#min_node_count}
  */
  readonly minNodeCount?: number;
}

export function googleIntegrationConnectorsConnectionNodeConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionNodeConfigOutputReference | GoogleIntegrationConnectorsConnectionNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}


export function googleIntegrationConnectorsConnectionNodeConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionNodeConfigOutputReference | GoogleIntegrationConnectorsConnectionNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionNodeConfig | undefined {
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

  public set internalValue(value: GoogleIntegrationConnectorsConnectionNodeConfig | undefined) {
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

  // max_node_count - computed: true, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: true, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
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
export interface GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The
  * expected format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#kms_key_name GoogleIntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encryption Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#type GoogleIntegrationConnectorsConnection#type}
  */
  readonly type?: string;
}

export function googleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueOutputReference | GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
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

export class GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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
export interface GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueToTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueOutputReference | GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariable {
  /**
  * Boolean Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#boolean_value GoogleIntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#integer_value GoogleIntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#key GoogleIntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#string_value GoogleIntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#encryption_key_value GoogleIntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_value GoogleIntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue;
}

export function googleIntegrationConnectorsConnectionSslConfigAdditionalVariableToTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: googleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: googleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function googleIntegrationConnectorsConnectionSslConfigAdditionalVariableToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: googleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: googleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableList extends cdktf.ComplexList {
  public internalValue? : GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariable[] | cdktf.IResolvable

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
  public get(index: number): GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableOutputReference {
    return new GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIntegrationConnectorsConnectionSslConfigClientCertificate {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionSslConfigClientCertificateToTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigClientCertificateOutputReference | GoogleIntegrationConnectorsConnectionSslConfigClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionSslConfigClientCertificateToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigClientCertificateOutputReference | GoogleIntegrationConnectorsConnectionSslConfigClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionSslConfigClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionSslConfigClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionSslConfigClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKey {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionSslConfigClientPrivateKeyToTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyOutputReference | GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionSslConfigClientPrivateKeyToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyOutputReference | GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPass {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassToTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassOutputReference | GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassOutputReference | GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificate {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#secret_version GoogleIntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function googleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateToTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateOutputReference | GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function googleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateOutputReference | GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleIntegrationConnectorsConnectionSslConfig {
  /**
  * Type of Client Cert (PEM/JKS/.. etc.) Possible values: ["PEM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_cert_type GoogleIntegrationConnectorsConnection#client_cert_type}
  */
  readonly clientCertType?: string;
  /**
  * Type of Server Cert (PEM/JKS/.. etc.) Possible values: ["PEM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#server_cert_type GoogleIntegrationConnectorsConnection#server_cert_type}
  */
  readonly serverCertType?: string;
  /**
  * Enum for Trust Model Possible values: ["PUBLIC", "PRIVATE", "INSECURE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#trust_model GoogleIntegrationConnectorsConnection#trust_model}
  */
  readonly trustModel?: string;
  /**
  * Enum for controlling the SSL Type (TLS/MTLS) Possible values: ["TLS", "MTLS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#type GoogleIntegrationConnectorsConnection#type}
  */
  readonly type: string;
  /**
  * Bool for enabling SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#use_ssl GoogleIntegrationConnectorsConnection#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * additional_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#additional_variable GoogleIntegrationConnectorsConnection#additional_variable}
  */
  readonly additionalVariable?: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariable[] | cdktf.IResolvable;
  /**
  * client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_certificate GoogleIntegrationConnectorsConnection#client_certificate}
  */
  readonly clientCertificate?: GoogleIntegrationConnectorsConnectionSslConfigClientCertificate;
  /**
  * client_private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_private_key GoogleIntegrationConnectorsConnection#client_private_key}
  */
  readonly clientPrivateKey?: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKey;
  /**
  * client_private_key_pass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#client_private_key_pass GoogleIntegrationConnectorsConnection#client_private_key_pass}
  */
  readonly clientPrivateKeyPass?: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPass;
  /**
  * private_server_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#private_server_certificate GoogleIntegrationConnectorsConnection#private_server_certificate}
  */
  readonly privateServerCertificate?: GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificate;
}

export function googleIntegrationConnectorsConnectionSslConfigToTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigOutputReference | GoogleIntegrationConnectorsConnectionSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert_type: cdktf.stringToTerraform(struct!.clientCertType),
    server_cert_type: cdktf.stringToTerraform(struct!.serverCertType),
    trust_model: cdktf.stringToTerraform(struct!.trustModel),
    type: cdktf.stringToTerraform(struct!.type),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    additional_variable: cdktf.listMapper(googleIntegrationConnectorsConnectionSslConfigAdditionalVariableToTerraform, true)(struct!.additionalVariable),
    client_certificate: googleIntegrationConnectorsConnectionSslConfigClientCertificateToTerraform(struct!.clientCertificate),
    client_private_key: googleIntegrationConnectorsConnectionSslConfigClientPrivateKeyToTerraform(struct!.clientPrivateKey),
    client_private_key_pass: googleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassToTerraform(struct!.clientPrivateKeyPass),
    private_server_certificate: googleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateToTerraform(struct!.privateServerCertificate),
  }
}


export function googleIntegrationConnectorsConnectionSslConfigToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionSslConfigOutputReference | GoogleIntegrationConnectorsConnectionSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cert_type: {
      value: cdktf.stringToHclTerraform(struct!.clientCertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cert_type: {
      value: cdktf.stringToHclTerraform(struct!.serverCertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_model: {
      value: cdktf.stringToHclTerraform(struct!.trustModel),
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
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    additional_variable: {
      value: cdktf.listMapperHcl(googleIntegrationConnectorsConnectionSslConfigAdditionalVariableToHclTerraform, true)(struct!.additionalVariable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableList",
    },
    client_certificate: {
      value: googleIntegrationConnectorsConnectionSslConfigClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionSslConfigClientCertificateList",
    },
    client_private_key: {
      value: googleIntegrationConnectorsConnectionSslConfigClientPrivateKeyToHclTerraform(struct!.clientPrivateKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyList",
    },
    client_private_key_pass: {
      value: googleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassToHclTerraform(struct!.clientPrivateKeyPass),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassList",
    },
    private_server_certificate: {
      value: googleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateToHclTerraform(struct!.privateServerCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIntegrationConnectorsConnectionSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertType = this._clientCertType;
    }
    if (this._serverCertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertType = this._serverCertType;
    }
    if (this._trustModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustModel = this._trustModel;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._additionalVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariable = this._additionalVariable?.internalValue;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._clientPrivateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivateKey = this._clientPrivateKey?.internalValue;
    }
    if (this._clientPrivateKeyPass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivateKeyPass = this._clientPrivateKeyPass?.internalValue;
    }
    if (this._privateServerCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServerCertificate = this._privateServerCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIntegrationConnectorsConnectionSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertType = undefined;
      this._serverCertType = undefined;
      this._trustModel = undefined;
      this._type = undefined;
      this._useSsl = undefined;
      this._additionalVariable.internalValue = undefined;
      this._clientCertificate.internalValue = undefined;
      this._clientPrivateKey.internalValue = undefined;
      this._clientPrivateKeyPass.internalValue = undefined;
      this._privateServerCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertType = value.clientCertType;
      this._serverCertType = value.serverCertType;
      this._trustModel = value.trustModel;
      this._type = value.type;
      this._useSsl = value.useSsl;
      this._additionalVariable.internalValue = value.additionalVariable;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._clientPrivateKey.internalValue = value.clientPrivateKey;
      this._clientPrivateKeyPass.internalValue = value.clientPrivateKeyPass;
      this._privateServerCertificate.internalValue = value.privateServerCertificate;
    }
  }

  // client_cert_type - computed: false, optional: true, required: false
  private _clientCertType?: string; 
  public get clientCertType() {
    return this.getStringAttribute('client_cert_type');
  }
  public set clientCertType(value: string) {
    this._clientCertType = value;
  }
  public resetClientCertType() {
    this._clientCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertTypeInput() {
    return this._clientCertType;
  }

  // server_cert_type - computed: false, optional: true, required: false
  private _serverCertType?: string; 
  public get serverCertType() {
    return this.getStringAttribute('server_cert_type');
  }
  public set serverCertType(value: string) {
    this._serverCertType = value;
  }
  public resetServerCertType() {
    this._serverCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertTypeInput() {
    return this._serverCertType;
  }

  // trust_model - computed: false, optional: true, required: false
  private _trustModel?: string; 
  public get trustModel() {
    return this.getStringAttribute('trust_model');
  }
  public set trustModel(value: string) {
    this._trustModel = value;
  }
  public resetTrustModel() {
    this._trustModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustModelInput() {
    return this._trustModel;
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

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // additional_variable - computed: false, optional: true, required: false
  private _additionalVariable = new GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariableList(this, "additional_variable", false);
  public get additionalVariable() {
    return this._additionalVariable;
  }
  public putAdditionalVariable(value: GoogleIntegrationConnectorsConnectionSslConfigAdditionalVariable[] | cdktf.IResolvable) {
    this._additionalVariable.internalValue = value;
  }
  public resetAdditionalVariable() {
    this._additionalVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableInput() {
    return this._additionalVariable.internalValue;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate = new GoogleIntegrationConnectorsConnectionSslConfigClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GoogleIntegrationConnectorsConnectionSslConfigClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // client_private_key - computed: false, optional: true, required: false
  private _clientPrivateKey = new GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyOutputReference(this, "client_private_key");
  public get clientPrivateKey() {
    return this._clientPrivateKey;
  }
  public putClientPrivateKey(value: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKey) {
    this._clientPrivateKey.internalValue = value;
  }
  public resetClientPrivateKey() {
    this._clientPrivateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyInput() {
    return this._clientPrivateKey.internalValue;
  }

  // client_private_key_pass - computed: false, optional: true, required: false
  private _clientPrivateKeyPass = new GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPassOutputReference(this, "client_private_key_pass");
  public get clientPrivateKeyPass() {
    return this._clientPrivateKeyPass;
  }
  public putClientPrivateKeyPass(value: GoogleIntegrationConnectorsConnectionSslConfigClientPrivateKeyPass) {
    this._clientPrivateKeyPass.internalValue = value;
  }
  public resetClientPrivateKeyPass() {
    this._clientPrivateKeyPass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyPassInput() {
    return this._clientPrivateKeyPass.internalValue;
  }

  // private_server_certificate - computed: false, optional: true, required: false
  private _privateServerCertificate = new GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificateOutputReference(this, "private_server_certificate");
  public get privateServerCertificate() {
    return this._privateServerCertificate;
  }
  public putPrivateServerCertificate(value: GoogleIntegrationConnectorsConnectionSslConfigPrivateServerCertificate) {
    this._privateServerCertificate.internalValue = value;
  }
  public resetPrivateServerCertificate() {
    this._privateServerCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServerCertificateInput() {
    return this._privateServerCertificate.internalValue;
  }
}
export interface GoogleIntegrationConnectorsConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#create GoogleIntegrationConnectorsConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#delete GoogleIntegrationConnectorsConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#update GoogleIntegrationConnectorsConnection#update}
  */
  readonly update?: string;
}

export function googleIntegrationConnectorsConnectionTimeoutsToTerraform(struct?: GoogleIntegrationConnectorsConnectionTimeouts | cdktf.IResolvable): any {
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


export function googleIntegrationConnectorsConnectionTimeoutsToHclTerraform(struct?: GoogleIntegrationConnectorsConnectionTimeouts | cdktf.IResolvable): any {
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

export class GoogleIntegrationConnectorsConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIntegrationConnectorsConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIntegrationConnectorsConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection google_integration_connectors_connection}
*/
export class GoogleIntegrationConnectorsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_integration_connectors_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleIntegrationConnectorsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIntegrationConnectorsConnection to import
  * @param importFromId The id of the existing GoogleIntegrationConnectorsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIntegrationConnectorsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_integration_connectors_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_integration_connectors_connection google_integration_connectors_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIntegrationConnectorsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIntegrationConnectorsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_integration_connectors_connection',
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
    this._connectorVersion = config.connectorVersion;
    this._description = config.description;
    this._eventingEnablementType = config.eventingEnablementType;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._suspended = config.suspended;
    this._authConfig.internalValue = config.authConfig;
    this._configVariable.internalValue = config.configVariable;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._eventingConfig.internalValue = config.eventingConfig;
    this._lockConfig.internalValue = config.lockConfig;
    this._logConfig.internalValue = config.logConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._sslConfig.internalValue = config.sslConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_revision - computed: true, optional: false, required: false
  public get connectionRevision() {
    return this.getStringAttribute('connection_revision');
  }

  // connector_version - computed: false, optional: false, required: true
  private _connectorVersion?: string; 
  public get connectorVersion() {
    return this.getStringAttribute('connector_version');
  }
  public set connectorVersion(value: string) {
    this._connectorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorVersionInput() {
    return this._connectorVersion;
  }

  // connector_version_infra_config - computed: true, optional: false, required: false
  private _connectorVersionInfraConfig = new GoogleIntegrationConnectorsConnectionConnectorVersionInfraConfigList(this, "connector_version_infra_config", false);
  public get connectorVersionInfraConfig() {
    return this._connectorVersionInfraConfig;
  }

  // connector_version_launch_stage - computed: true, optional: false, required: false
  public get connectorVersionLaunchStage() {
    return this.getStringAttribute('connector_version_launch_stage');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // eventing_enablement_type - computed: false, optional: true, required: false
  private _eventingEnablementType?: string; 
  public get eventingEnablementType() {
    return this.getStringAttribute('eventing_enablement_type');
  }
  public set eventingEnablementType(value: string) {
    this._eventingEnablementType = value;
  }
  public resetEventingEnablementType() {
    this._eventingEnablementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventingEnablementTypeInput() {
    return this._eventingEnablementType;
  }

  // eventing_runtime_data - computed: true, optional: false, required: false
  private _eventingRuntimeData = new GoogleIntegrationConnectorsConnectionEventingRuntimeDataList(this, "eventing_runtime_data", false);
  public get eventingRuntimeData() {
    return this._eventingRuntimeData;
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

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_directory - computed: true, optional: false, required: false
  public get serviceDirectory() {
    return this.getStringAttribute('service_directory');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleIntegrationConnectorsConnectionStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // subscription_type - computed: true, optional: false, required: false
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new GoogleIntegrationConnectorsConnectionAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: GoogleIntegrationConnectorsConnectionAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // config_variable - computed: false, optional: true, required: false
  private _configVariable = new GoogleIntegrationConnectorsConnectionConfigVariableList(this, "config_variable", false);
  public get configVariable() {
    return this._configVariable;
  }
  public putConfigVariable(value: GoogleIntegrationConnectorsConnectionConfigVariable[] | cdktf.IResolvable) {
    this._configVariable.internalValue = value;
  }
  public resetConfigVariable() {
    this._configVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVariableInput() {
    return this._configVariable.internalValue;
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new GoogleIntegrationConnectorsConnectionDestinationConfigList(this, "destination_config", false);
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: GoogleIntegrationConnectorsConnectionDestinationConfig[] | cdktf.IResolvable) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // eventing_config - computed: false, optional: true, required: false
  private _eventingConfig = new GoogleIntegrationConnectorsConnectionEventingConfigOutputReference(this, "eventing_config");
  public get eventingConfig() {
    return this._eventingConfig;
  }
  public putEventingConfig(value: GoogleIntegrationConnectorsConnectionEventingConfig) {
    this._eventingConfig.internalValue = value;
  }
  public resetEventingConfig() {
    this._eventingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventingConfigInput() {
    return this._eventingConfig.internalValue;
  }

  // lock_config - computed: false, optional: true, required: false
  private _lockConfig = new GoogleIntegrationConnectorsConnectionLockConfigOutputReference(this, "lock_config");
  public get lockConfig() {
    return this._lockConfig;
  }
  public putLockConfig(value: GoogleIntegrationConnectorsConnectionLockConfig) {
    this._lockConfig.internalValue = value;
  }
  public resetLockConfig() {
    this._lockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockConfigInput() {
    return this._lockConfig.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new GoogleIntegrationConnectorsConnectionLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: GoogleIntegrationConnectorsConnectionLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new GoogleIntegrationConnectorsConnectionNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GoogleIntegrationConnectorsConnectionNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new GoogleIntegrationConnectorsConnectionSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: GoogleIntegrationConnectorsConnectionSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIntegrationConnectorsConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIntegrationConnectorsConnectionTimeouts) {
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
      connector_version: cdktf.stringToTerraform(this._connectorVersion),
      description: cdktf.stringToTerraform(this._description),
      eventing_enablement_type: cdktf.stringToTerraform(this._eventingEnablementType),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      suspended: cdktf.booleanToTerraform(this._suspended),
      auth_config: googleIntegrationConnectorsConnectionAuthConfigToTerraform(this._authConfig.internalValue),
      config_variable: cdktf.listMapper(googleIntegrationConnectorsConnectionConfigVariableToTerraform, true)(this._configVariable.internalValue),
      destination_config: cdktf.listMapper(googleIntegrationConnectorsConnectionDestinationConfigToTerraform, true)(this._destinationConfig.internalValue),
      eventing_config: googleIntegrationConnectorsConnectionEventingConfigToTerraform(this._eventingConfig.internalValue),
      lock_config: googleIntegrationConnectorsConnectionLockConfigToTerraform(this._lockConfig.internalValue),
      log_config: googleIntegrationConnectorsConnectionLogConfigToTerraform(this._logConfig.internalValue),
      node_config: googleIntegrationConnectorsConnectionNodeConfigToTerraform(this._nodeConfig.internalValue),
      ssl_config: googleIntegrationConnectorsConnectionSslConfigToTerraform(this._sslConfig.internalValue),
      timeouts: googleIntegrationConnectorsConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_version: {
        value: cdktf.stringToHclTerraform(this._connectorVersion),
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
      eventing_enablement_type: {
        value: cdktf.stringToHclTerraform(this._eventingEnablementType),
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
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
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
      auth_config: {
        value: googleIntegrationConnectorsConnectionAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIntegrationConnectorsConnectionAuthConfigList",
      },
      config_variable: {
        value: cdktf.listMapperHcl(googleIntegrationConnectorsConnectionConfigVariableToHclTerraform, true)(this._configVariable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIntegrationConnectorsConnectionConfigVariableList",
      },
      destination_config: {
        value: cdktf.listMapperHcl(googleIntegrationConnectorsConnectionDestinationConfigToHclTerraform, true)(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIntegrationConnectorsConnectionDestinationConfigList",
      },
      eventing_config: {
        value: googleIntegrationConnectorsConnectionEventingConfigToHclTerraform(this._eventingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIntegrationConnectorsConnectionEventingConfigList",
      },
      lock_config: {
        value: googleIntegrationConnectorsConnectionLockConfigToHclTerraform(this._lockConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIntegrationConnectorsConnectionLockConfigList",
      },
      log_config: {
        value: googleIntegrationConnectorsConnectionLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIntegrationConnectorsConnectionLogConfigList",
      },
      node_config: {
        value: googleIntegrationConnectorsConnectionNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIntegrationConnectorsConnectionNodeConfigList",
      },
      ssl_config: {
        value: googleIntegrationConnectorsConnectionSslConfigToHclTerraform(this._sslConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIntegrationConnectorsConnectionSslConfigList",
      },
      timeouts: {
        value: googleIntegrationConnectorsConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIntegrationConnectorsConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
