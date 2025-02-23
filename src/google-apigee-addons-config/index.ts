// https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleApigeeAddonsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#id GoogleApigeeAddonsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Apigee organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#org GoogleApigeeAddonsConfig#org}
  */
  readonly org: string;
  /**
  * addons_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#addons_config GoogleApigeeAddonsConfig#addons_config}
  */
  readonly addonsConfig?: GoogleApigeeAddonsConfigAddonsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#timeouts GoogleApigeeAddonsConfig#timeouts}
  */
  readonly timeouts?: GoogleApigeeAddonsConfigTimeouts;
}
export interface GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig {
  /**
  * Flag that specifies whether the Advanced API Ops add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigToTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigToHclTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig): any {
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

export class GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig {
  /**
  * Flag that specifies whether the Advanced API Ops add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleApigeeAddonsConfigAddonsConfigApiSecurityConfigToTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleApigeeAddonsConfigAddonsConfigApiSecurityConfigToHclTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig): any {
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

export class GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
}
export interface GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig {
  /**
  * Flag that specifies whether the Advanced API Ops add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigToTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigToHclTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig): any {
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

export class GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
}
export interface GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig {
  /**
  * Flag that specifies whether the Advanced API Ops add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleApigeeAddonsConfigAddonsConfigIntegrationConfigToTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleApigeeAddonsConfigAddonsConfigIntegrationConfigToHclTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig): any {
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

export class GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig {
  /**
  * Flag that specifies whether the Advanced API Ops add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleApigeeAddonsConfigAddonsConfigMonetizationConfigToTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleApigeeAddonsConfigAddonsConfigMonetizationConfigToHclTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig): any {
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

export class GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleApigeeAddonsConfigAddonsConfig {
  /**
  * advanced_api_ops_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#advanced_api_ops_config GoogleApigeeAddonsConfig#advanced_api_ops_config}
  */
  readonly advancedApiOpsConfig?: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig;
  /**
  * api_security_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#api_security_config GoogleApigeeAddonsConfig#api_security_config}
  */
  readonly apiSecurityConfig?: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig;
  /**
  * connectors_platform_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#connectors_platform_config GoogleApigeeAddonsConfig#connectors_platform_config}
  */
  readonly connectorsPlatformConfig?: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig;
  /**
  * integration_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#integration_config GoogleApigeeAddonsConfig#integration_config}
  */
  readonly integrationConfig?: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig;
  /**
  * monetization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#monetization_config GoogleApigeeAddonsConfig#monetization_config}
  */
  readonly monetizationConfig?: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig;
}

export function googleApigeeAddonsConfigAddonsConfigToTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_api_ops_config: googleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigToTerraform(struct!.advancedApiOpsConfig),
    api_security_config: googleApigeeAddonsConfigAddonsConfigApiSecurityConfigToTerraform(struct!.apiSecurityConfig),
    connectors_platform_config: googleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigToTerraform(struct!.connectorsPlatformConfig),
    integration_config: googleApigeeAddonsConfigAddonsConfigIntegrationConfigToTerraform(struct!.integrationConfig),
    monetization_config: googleApigeeAddonsConfigAddonsConfigMonetizationConfigToTerraform(struct!.monetizationConfig),
  }
}


export function googleApigeeAddonsConfigAddonsConfigToHclTerraform(struct?: GoogleApigeeAddonsConfigAddonsConfigOutputReference | GoogleApigeeAddonsConfigAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_api_ops_config: {
      value: googleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigToHclTerraform(struct!.advancedApiOpsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigList",
    },
    api_security_config: {
      value: googleApigeeAddonsConfigAddonsConfigApiSecurityConfigToHclTerraform(struct!.apiSecurityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigList",
    },
    connectors_platform_config: {
      value: googleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigToHclTerraform(struct!.connectorsPlatformConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigList",
    },
    integration_config: {
      value: googleApigeeAddonsConfigAddonsConfigIntegrationConfigToHclTerraform(struct!.integrationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigList",
    },
    monetization_config: {
      value: googleApigeeAddonsConfigAddonsConfigMonetizationConfigToHclTerraform(struct!.monetizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeAddonsConfigAddonsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApigeeAddonsConfigAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedApiOpsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedApiOpsConfig = this._advancedApiOpsConfig?.internalValue;
    }
    if (this._apiSecurityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecurityConfig = this._apiSecurityConfig?.internalValue;
    }
    if (this._connectorsPlatformConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorsPlatformConfig = this._connectorsPlatformConfig?.internalValue;
    }
    if (this._integrationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationConfig = this._integrationConfig?.internalValue;
    }
    if (this._monetizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monetizationConfig = this._monetizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeAddonsConfigAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedApiOpsConfig.internalValue = undefined;
      this._apiSecurityConfig.internalValue = undefined;
      this._connectorsPlatformConfig.internalValue = undefined;
      this._integrationConfig.internalValue = undefined;
      this._monetizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedApiOpsConfig.internalValue = value.advancedApiOpsConfig;
      this._apiSecurityConfig.internalValue = value.apiSecurityConfig;
      this._connectorsPlatformConfig.internalValue = value.connectorsPlatformConfig;
      this._integrationConfig.internalValue = value.integrationConfig;
      this._monetizationConfig.internalValue = value.monetizationConfig;
    }
  }

  // advanced_api_ops_config - computed: false, optional: true, required: false
  private _advancedApiOpsConfig = new GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference(this, "advanced_api_ops_config");
  public get advancedApiOpsConfig() {
    return this._advancedApiOpsConfig;
  }
  public putAdvancedApiOpsConfig(value: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig) {
    this._advancedApiOpsConfig.internalValue = value;
  }
  public resetAdvancedApiOpsConfig() {
    this._advancedApiOpsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedApiOpsConfigInput() {
    return this._advancedApiOpsConfig.internalValue;
  }

  // api_security_config - computed: false, optional: true, required: false
  private _apiSecurityConfig = new GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference(this, "api_security_config");
  public get apiSecurityConfig() {
    return this._apiSecurityConfig;
  }
  public putApiSecurityConfig(value: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig) {
    this._apiSecurityConfig.internalValue = value;
  }
  public resetApiSecurityConfig() {
    this._apiSecurityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecurityConfigInput() {
    return this._apiSecurityConfig.internalValue;
  }

  // connectors_platform_config - computed: false, optional: true, required: false
  private _connectorsPlatformConfig = new GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference(this, "connectors_platform_config");
  public get connectorsPlatformConfig() {
    return this._connectorsPlatformConfig;
  }
  public putConnectorsPlatformConfig(value: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig) {
    this._connectorsPlatformConfig.internalValue = value;
  }
  public resetConnectorsPlatformConfig() {
    this._connectorsPlatformConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsPlatformConfigInput() {
    return this._connectorsPlatformConfig.internalValue;
  }

  // integration_config - computed: false, optional: true, required: false
  private _integrationConfig = new GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference(this, "integration_config");
  public get integrationConfig() {
    return this._integrationConfig;
  }
  public putIntegrationConfig(value: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig) {
    this._integrationConfig.internalValue = value;
  }
  public resetIntegrationConfig() {
    this._integrationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationConfigInput() {
    return this._integrationConfig.internalValue;
  }

  // monetization_config - computed: false, optional: true, required: false
  private _monetizationConfig = new GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference(this, "monetization_config");
  public get monetizationConfig() {
    return this._monetizationConfig;
  }
  public putMonetizationConfig(value: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig) {
    this._monetizationConfig.internalValue = value;
  }
  public resetMonetizationConfig() {
    this._monetizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monetizationConfigInput() {
    return this._monetizationConfig.internalValue;
  }
}
export interface GoogleApigeeAddonsConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#create GoogleApigeeAddonsConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#delete GoogleApigeeAddonsConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#update GoogleApigeeAddonsConfig#update}
  */
  readonly update?: string;
}

export function googleApigeeAddonsConfigTimeoutsToTerraform(struct?: GoogleApigeeAddonsConfigTimeouts | cdktf.IResolvable): any {
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


export function googleApigeeAddonsConfigTimeoutsToHclTerraform(struct?: GoogleApigeeAddonsConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleApigeeAddonsConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleApigeeAddonsConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApigeeAddonsConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config google_apigee_addons_config}
*/
export class GoogleApigeeAddonsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_addons_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleApigeeAddonsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleApigeeAddonsConfig to import
  * @param importFromId The id of the existing GoogleApigeeAddonsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleApigeeAddonsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_addons_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_addons_config google_apigee_addons_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApigeeAddonsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleApigeeAddonsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_addons_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.21.0',
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
    this._id = config.id;
    this._org = config.org;
    this._addonsConfig.internalValue = config.addonsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig = new GoogleApigeeAddonsConfigAddonsConfigOutputReference(this, "addons_config");
  public get addonsConfig() {
    return this._addonsConfig;
  }
  public putAddonsConfig(value: GoogleApigeeAddonsConfigAddonsConfig) {
    this._addonsConfig.internalValue = value;
  }
  public resetAddonsConfig() {
    this._addonsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsConfigInput() {
    return this._addonsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApigeeAddonsConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApigeeAddonsConfigTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      addons_config: googleApigeeAddonsConfigAddonsConfigToTerraform(this._addonsConfig.internalValue),
      timeouts: googleApigeeAddonsConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons_config: {
        value: googleApigeeAddonsConfigAddonsConfigToHclTerraform(this._addonsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApigeeAddonsConfigAddonsConfigList",
      },
      timeouts: {
        value: googleApigeeAddonsConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleApigeeAddonsConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
