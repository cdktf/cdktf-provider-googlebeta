/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkSecuritySecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of the security profile. The Max length is 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#description GoogleNetworkSecuritySecurityProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of key/value label pairs to assign to the resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#labels GoogleNetworkSecuritySecurityProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the security profile.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#location GoogleNetworkSecuritySecurityProfile#location}
  */
  readonly location?: string;
  /**
  * The name of the security profile resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#name GoogleNetworkSecuritySecurityProfile#name}
  */
  readonly name: string;
  /**
  * The name of the parent this security profile belongs to.
  * Format: organizations/{organization_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#parent GoogleNetworkSecuritySecurityProfile#parent}
  */
  readonly parent?: string;
  /**
  * The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#type GoogleNetworkSecuritySecurityProfile#type}
  */
  readonly type: string;
  /**
  * custom_intercept_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#custom_intercept_profile GoogleNetworkSecuritySecurityProfile#custom_intercept_profile}
  */
  readonly customInterceptProfile?: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile;
  /**
  * custom_mirroring_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#custom_mirroring_profile GoogleNetworkSecuritySecurityProfile#custom_mirroring_profile}
  */
  readonly customMirroringProfile?: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile;
  /**
  * threat_prevention_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#threat_prevention_profile GoogleNetworkSecuritySecurityProfile#threat_prevention_profile}
  */
  readonly threatPreventionProfile?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#timeouts GoogleNetworkSecuritySecurityProfile#timeouts}
  */
  readonly timeouts?: GoogleNetworkSecuritySecurityProfileTimeouts;
}
export interface GoogleNetworkSecuritySecurityProfileCustomInterceptProfile {
  /**
  * The Intercept Endpoint Group to which matching traffic should be intercepted.
  * Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#intercept_endpoint_group GoogleNetworkSecuritySecurityProfile#intercept_endpoint_group}
  */
  readonly interceptEndpointGroup: string;
}

export function googleNetworkSecuritySecurityProfileCustomInterceptProfileToTerraform(struct?: GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference | GoogleNetworkSecuritySecurityProfileCustomInterceptProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intercept_endpoint_group: cdktf.stringToTerraform(struct!.interceptEndpointGroup),
  }
}


export function googleNetworkSecuritySecurityProfileCustomInterceptProfileToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference | GoogleNetworkSecuritySecurityProfileCustomInterceptProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intercept_endpoint_group: {
      value: cdktf.stringToHclTerraform(struct!.interceptEndpointGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileCustomInterceptProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptEndpointGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptEndpointGroup = this._interceptEndpointGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interceptEndpointGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interceptEndpointGroup = value.interceptEndpointGroup;
    }
  }

  // intercept_endpoint_group - computed: false, optional: false, required: true
  private _interceptEndpointGroup?: string; 
  public get interceptEndpointGroup() {
    return this.getStringAttribute('intercept_endpoint_group');
  }
  public set interceptEndpointGroup(value: string) {
    this._interceptEndpointGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptEndpointGroupInput() {
    return this._interceptEndpointGroup;
  }
}
export interface GoogleNetworkSecuritySecurityProfileCustomMirroringProfile {
  /**
  * The Mirroring Endpoint Group to which matching traffic should be mirrored.
  * Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#mirroring_endpoint_group GoogleNetworkSecuritySecurityProfile#mirroring_endpoint_group}
  */
  readonly mirroringEndpointGroup: string;
}

export function googleNetworkSecuritySecurityProfileCustomMirroringProfileToTerraform(struct?: GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference | GoogleNetworkSecuritySecurityProfileCustomMirroringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirroring_endpoint_group: cdktf.stringToTerraform(struct!.mirroringEndpointGroup),
  }
}


export function googleNetworkSecuritySecurityProfileCustomMirroringProfileToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference | GoogleNetworkSecuritySecurityProfileCustomMirroringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirroring_endpoint_group: {
      value: cdktf.stringToHclTerraform(struct!.mirroringEndpointGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileCustomMirroringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirroringEndpointGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroringEndpointGroup = this._mirroringEndpointGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mirroringEndpointGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mirroringEndpointGroup = value.mirroringEndpointGroup;
    }
  }

  // mirroring_endpoint_group - computed: false, optional: false, required: true
  private _mirroringEndpointGroup?: string; 
  public get mirroringEndpointGroup() {
    return this.getStringAttribute('mirroring_endpoint_group');
  }
  public set mirroringEndpointGroup(value: string) {
    this._mirroringEndpointGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringEndpointGroupInput() {
    return this._mirroringEndpointGroup;
  }
}
export interface GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides {
  /**
  * Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#protocol GoogleNetworkSecuritySecurityProfile#protocol}
  */
  readonly protocol: string;
}

export function googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides {
  /**
  * Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#severity GoogleNetworkSecuritySecurityProfile#severity}
  */
  readonly severity: string;
}

export function googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._severity = value.severity;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides {
  /**
  * Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Vendor-specific ID of a threat to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#threat_id GoogleNetworkSecuritySecurityProfile#threat_id}
  */
  readonly threatId: string;
}

export function googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    threat_id: cdktf.stringToTerraform(struct!.threatId),
  }
}


export function googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_id: {
      value: cdktf.stringToHclTerraform(struct!.threatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._threatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatId = this._threatId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._threatId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._threatId = value.threatId;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // threat_id - computed: false, optional: false, required: true
  private _threatId?: string; 
  public get threatId() {
    return this.getStringAttribute('threat_id');
  }
  public set threatId(value: string) {
    this._threatId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIdInput() {
    return this._threatId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileThreatPreventionProfile {
  /**
  * antivirus_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#antivirus_overrides GoogleNetworkSecuritySecurityProfile#antivirus_overrides}
  */
  readonly antivirusOverrides?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktf.IResolvable;
  /**
  * severity_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#severity_overrides GoogleNetworkSecuritySecurityProfile#severity_overrides}
  */
  readonly severityOverrides?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktf.IResolvable;
  /**
  * threat_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#threat_overrides GoogleNetworkSecuritySecurityProfile#threat_overrides}
  */
  readonly threatOverrides?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktf.IResolvable;
}

export function googleNetworkSecuritySecurityProfileThreatPreventionProfileToTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference | GoogleNetworkSecuritySecurityProfileThreatPreventionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    antivirus_overrides: cdktf.listMapper(googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToTerraform, true)(struct!.antivirusOverrides),
    severity_overrides: cdktf.listMapper(googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToTerraform, true)(struct!.severityOverrides),
    threat_overrides: cdktf.listMapper(googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToTerraform, true)(struct!.threatOverrides),
  }
}


export function googleNetworkSecuritySecurityProfileThreatPreventionProfileToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference | GoogleNetworkSecuritySecurityProfileThreatPreventionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    antivirus_overrides: {
      value: cdktf.listMapperHcl(googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToHclTerraform, true)(struct!.antivirusOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList",
    },
    severity_overrides: {
      value: cdktf.listMapperHcl(googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToHclTerraform, true)(struct!.severityOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList",
    },
    threat_overrides: {
      value: cdktf.listMapperHcl(googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToHclTerraform, true)(struct!.threatOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileThreatPreventionProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antivirusOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirusOverrides = this._antivirusOverrides?.internalValue;
    }
    if (this._severityOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityOverrides = this._severityOverrides?.internalValue;
    }
    if (this._threatOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatOverrides = this._threatOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antivirusOverrides.internalValue = undefined;
      this._severityOverrides.internalValue = undefined;
      this._threatOverrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antivirusOverrides.internalValue = value.antivirusOverrides;
      this._severityOverrides.internalValue = value.severityOverrides;
      this._threatOverrides.internalValue = value.threatOverrides;
    }
  }

  // antivirus_overrides - computed: false, optional: true, required: false
  private _antivirusOverrides = new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList(this, "antivirus_overrides", true);
  public get antivirusOverrides() {
    return this._antivirusOverrides;
  }
  public putAntivirusOverrides(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktf.IResolvable) {
    this._antivirusOverrides.internalValue = value;
  }
  public resetAntivirusOverrides() {
    this._antivirusOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusOverridesInput() {
    return this._antivirusOverrides.internalValue;
  }

  // severity_overrides - computed: false, optional: true, required: false
  private _severityOverrides = new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(this, "severity_overrides", true);
  public get severityOverrides() {
    return this._severityOverrides;
  }
  public putSeverityOverrides(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktf.IResolvable) {
    this._severityOverrides.internalValue = value;
  }
  public resetSeverityOverrides() {
    this._severityOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityOverridesInput() {
    return this._severityOverrides.internalValue;
  }

  // threat_overrides - computed: false, optional: true, required: false
  private _threatOverrides = new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(this, "threat_overrides", true);
  public get threatOverrides() {
    return this._threatOverrides;
  }
  public putThreatOverrides(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktf.IResolvable) {
    this._threatOverrides.internalValue = value;
  }
  public resetThreatOverrides() {
    this._threatOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatOverridesInput() {
    return this._threatOverrides.internalValue;
  }
}
export interface GoogleNetworkSecuritySecurityProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}
  */
  readonly update?: string;
}

export function googleNetworkSecuritySecurityProfileTimeoutsToTerraform(struct?: GoogleNetworkSecuritySecurityProfileTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkSecuritySecurityProfileTimeoutsToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile google_network_security_security_profile}
*/
export class GoogleNetworkSecuritySecurityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkSecuritySecurityProfile to import
  * @param importFromId The id of the existing GoogleNetworkSecuritySecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkSecuritySecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_security_security_profile google_network_security_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkSecuritySecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkSecuritySecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_security_profile',
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._parent = config.parent;
    this._type = config.type;
    this._customInterceptProfile.internalValue = config.customInterceptProfile;
    this._customMirroringProfile.internalValue = config.customMirroringProfile;
    this._threatPreventionProfile.internalValue = config.threatPreventionProfile;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_intercept_profile - computed: false, optional: true, required: false
  private _customInterceptProfile = new GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference(this, "custom_intercept_profile");
  public get customInterceptProfile() {
    return this._customInterceptProfile;
  }
  public putCustomInterceptProfile(value: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile) {
    this._customInterceptProfile.internalValue = value;
  }
  public resetCustomInterceptProfile() {
    this._customInterceptProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInterceptProfileInput() {
    return this._customInterceptProfile.internalValue;
  }

  // custom_mirroring_profile - computed: false, optional: true, required: false
  private _customMirroringProfile = new GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference(this, "custom_mirroring_profile");
  public get customMirroringProfile() {
    return this._customMirroringProfile;
  }
  public putCustomMirroringProfile(value: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile) {
    this._customMirroringProfile.internalValue = value;
  }
  public resetCustomMirroringProfile() {
    this._customMirroringProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMirroringProfileInput() {
    return this._customMirroringProfile.internalValue;
  }

  // threat_prevention_profile - computed: false, optional: true, required: false
  private _threatPreventionProfile = new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(this, "threat_prevention_profile");
  public get threatPreventionProfile() {
    return this._threatPreventionProfile;
  }
  public putThreatPreventionProfile(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile) {
    this._threatPreventionProfile.internalValue = value;
  }
  public resetThreatPreventionProfile() {
    this._threatPreventionProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionProfileInput() {
    return this._threatPreventionProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkSecuritySecurityProfileTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      type: cdktf.stringToTerraform(this._type),
      custom_intercept_profile: googleNetworkSecuritySecurityProfileCustomInterceptProfileToTerraform(this._customInterceptProfile.internalValue),
      custom_mirroring_profile: googleNetworkSecuritySecurityProfileCustomMirroringProfileToTerraform(this._customMirroringProfile.internalValue),
      threat_prevention_profile: googleNetworkSecuritySecurityProfileThreatPreventionProfileToTerraform(this._threatPreventionProfile.internalValue),
      timeouts: googleNetworkSecuritySecurityProfileTimeoutsToTerraform(this._timeouts.internalValue),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
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
      custom_intercept_profile: {
        value: googleNetworkSecuritySecurityProfileCustomInterceptProfileToHclTerraform(this._customInterceptProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySecurityProfileCustomInterceptProfileList",
      },
      custom_mirroring_profile: {
        value: googleNetworkSecuritySecurityProfileCustomMirroringProfileToHclTerraform(this._customMirroringProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySecurityProfileCustomMirroringProfileList",
      },
      threat_prevention_profile: {
        value: googleNetworkSecuritySecurityProfileThreatPreventionProfileToHclTerraform(this._threatPreventionProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySecurityProfileThreatPreventionProfileList",
      },
      timeouts: {
        value: googleNetworkSecuritySecurityProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkSecuritySecurityProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
