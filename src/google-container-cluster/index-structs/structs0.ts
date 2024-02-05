import * as cdktf from 'cdktf';
export interface GoogleContainerClusterAddonsConfigCloudrunConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#load_balancer_type GoogleContainerCluster#load_balancer_type}
  */
  readonly loadBalancerType?: string;
}

export function googleContainerClusterAddonsConfigCloudrunConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigCloudrunConfigOutputReference | GoogleContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
  }
}


export function googleContainerClusterAddonsConfigCloudrunConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigCloudrunConfigOutputReference | GoogleContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer_type: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigCloudrunConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigCloudrunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigCloudrunConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._loadBalancerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._loadBalancerType = value.loadBalancerType;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }
}
export interface GoogleContainerClusterAddonsConfigConfigConnectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigConfigConnectorConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference | GoogleContainerClusterAddonsConfigConfigConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigConfigConnectorConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference | GoogleContainerClusterAddonsConfigConfigConnectorConfig): any {
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

export class GoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigConfigConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigConfigConnectorConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigDnsCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigDnsCacheConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference | GoogleContainerClusterAddonsConfigDnsCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigDnsCacheConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference | GoogleContainerClusterAddonsConfigDnsCacheConfig): any {
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

export class GoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigDnsCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigDnsCacheConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
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

export class GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
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

export class GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig): any {
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

export class GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigGkeBackupAgentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigGkeBackupAgentConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference | GoogleContainerClusterAddonsConfigGkeBackupAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigGkeBackupAgentConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference | GoogleContainerClusterAddonsConfigGkeBackupAgentConfig): any {
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

export class GoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigGkeBackupAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigGkeBackupAgentConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct?: GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference | GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterAddonsConfigHorizontalPodAutoscalingToHclTerraform(struct?: GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference | GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterAddonsConfigHttpLoadBalancing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigHttpLoadBalancingToTerraform(struct?: GoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference | GoogleContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterAddonsConfigHttpLoadBalancingToHclTerraform(struct?: GoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference | GoogleContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigHttpLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigHttpLoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterAddonsConfigIstioConfig {
  /**
  * The authentication type between services in Istio. Available options include AUTH_MUTUAL_TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#auth GoogleContainerCluster#auth}
  */
  readonly auth?: string;
  /**
  * The status of the Istio addon, which makes it easy to set up Istio for services in a cluster. It is disabled by default. Set disabled = false to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigIstioConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigIstioConfigOutputReference | GoogleContainerClusterAddonsConfigIstioConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterAddonsConfigIstioConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigIstioConfigOutputReference | GoogleContainerClusterAddonsConfigIstioConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigIstioConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigIstioConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigIstioConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auth = undefined;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auth = value.auth;
      this._disabled = value.disabled;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterAddonsConfigKalmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigKalmConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigKalmConfigOutputReference | GoogleContainerClusterAddonsConfigKalmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigKalmConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigKalmConfigOutputReference | GoogleContainerClusterAddonsConfigKalmConfig): any {
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

export class GoogleContainerClusterAddonsConfigKalmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigKalmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigKalmConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigNetworkPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference | GoogleContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterAddonsConfigNetworkPolicyConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference | GoogleContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigNetworkPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigNetworkPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterAddonsConfig {
  /**
  * cloudrun_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cloudrun_config GoogleContainerCluster#cloudrun_config}
  */
  readonly cloudrunConfig?: GoogleContainerClusterAddonsConfigCloudrunConfig;
  /**
  * config_connector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#config_connector_config GoogleContainerCluster#config_connector_config}
  */
  readonly configConnectorConfig?: GoogleContainerClusterAddonsConfigConfigConnectorConfig;
  /**
  * dns_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#dns_cache_config GoogleContainerCluster#dns_cache_config}
  */
  readonly dnsCacheConfig?: GoogleContainerClusterAddonsConfigDnsCacheConfig;
  /**
  * gce_persistent_disk_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gce_persistent_disk_csi_driver_config GoogleContainerCluster#gce_persistent_disk_csi_driver_config}
  */
  readonly gcePersistentDiskCsiDriverConfig?: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig;
  /**
  * gcp_filestore_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gcp_filestore_csi_driver_config GoogleContainerCluster#gcp_filestore_csi_driver_config}
  */
  readonly gcpFilestoreCsiDriverConfig?: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig;
  /**
  * gcs_fuse_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gcs_fuse_csi_driver_config GoogleContainerCluster#gcs_fuse_csi_driver_config}
  */
  readonly gcsFuseCsiDriverConfig?: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig;
  /**
  * gke_backup_agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gke_backup_agent_config GoogleContainerCluster#gke_backup_agent_config}
  */
  readonly gkeBackupAgentConfig?: GoogleContainerClusterAddonsConfigGkeBackupAgentConfig;
  /**
  * horizontal_pod_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#horizontal_pod_autoscaling GoogleContainerCluster#horizontal_pod_autoscaling}
  */
  readonly horizontalPodAutoscaling?: GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling;
  /**
  * http_load_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#http_load_balancing GoogleContainerCluster#http_load_balancing}
  */
  readonly httpLoadBalancing?: GoogleContainerClusterAddonsConfigHttpLoadBalancing;
  /**
  * istio_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#istio_config GoogleContainerCluster#istio_config}
  */
  readonly istioConfig?: GoogleContainerClusterAddonsConfigIstioConfig;
  /**
  * kalm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#kalm_config GoogleContainerCluster#kalm_config}
  */
  readonly kalmConfig?: GoogleContainerClusterAddonsConfigKalmConfig;
  /**
  * network_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#network_policy_config GoogleContainerCluster#network_policy_config}
  */
  readonly networkPolicyConfig?: GoogleContainerClusterAddonsConfigNetworkPolicyConfig;
}

export function googleContainerClusterAddonsConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigOutputReference | GoogleContainerClusterAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudrun_config: googleContainerClusterAddonsConfigCloudrunConfigToTerraform(struct!.cloudrunConfig),
    config_connector_config: googleContainerClusterAddonsConfigConfigConnectorConfigToTerraform(struct!.configConnectorConfig),
    dns_cache_config: googleContainerClusterAddonsConfigDnsCacheConfigToTerraform(struct!.dnsCacheConfig),
    gce_persistent_disk_csi_driver_config: googleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct!.gcePersistentDiskCsiDriverConfig),
    gcp_filestore_csi_driver_config: googleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct!.gcpFilestoreCsiDriverConfig),
    gcs_fuse_csi_driver_config: googleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToTerraform(struct!.gcsFuseCsiDriverConfig),
    gke_backup_agent_config: googleContainerClusterAddonsConfigGkeBackupAgentConfigToTerraform(struct!.gkeBackupAgentConfig),
    horizontal_pod_autoscaling: googleContainerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct!.horizontalPodAutoscaling),
    http_load_balancing: googleContainerClusterAddonsConfigHttpLoadBalancingToTerraform(struct!.httpLoadBalancing),
    istio_config: googleContainerClusterAddonsConfigIstioConfigToTerraform(struct!.istioConfig),
    kalm_config: googleContainerClusterAddonsConfigKalmConfigToTerraform(struct!.kalmConfig),
    network_policy_config: googleContainerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct!.networkPolicyConfig),
  }
}


export function googleContainerClusterAddonsConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigOutputReference | GoogleContainerClusterAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudrun_config: {
      value: googleContainerClusterAddonsConfigCloudrunConfigToHclTerraform(struct!.cloudrunConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigCloudrunConfigList",
    },
    config_connector_config: {
      value: googleContainerClusterAddonsConfigConfigConnectorConfigToHclTerraform(struct!.configConnectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigConfigConnectorConfigList",
    },
    dns_cache_config: {
      value: googleContainerClusterAddonsConfigDnsCacheConfigToHclTerraform(struct!.dnsCacheConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigDnsCacheConfigList",
    },
    gce_persistent_disk_csi_driver_config: {
      value: googleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToHclTerraform(struct!.gcePersistentDiskCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigList",
    },
    gcp_filestore_csi_driver_config: {
      value: googleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToHclTerraform(struct!.gcpFilestoreCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigList",
    },
    gcs_fuse_csi_driver_config: {
      value: googleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToHclTerraform(struct!.gcsFuseCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigList",
    },
    gke_backup_agent_config: {
      value: googleContainerClusterAddonsConfigGkeBackupAgentConfigToHclTerraform(struct!.gkeBackupAgentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigGkeBackupAgentConfigList",
    },
    horizontal_pod_autoscaling: {
      value: googleContainerClusterAddonsConfigHorizontalPodAutoscalingToHclTerraform(struct!.horizontalPodAutoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingList",
    },
    http_load_balancing: {
      value: googleContainerClusterAddonsConfigHttpLoadBalancingToHclTerraform(struct!.httpLoadBalancing),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigHttpLoadBalancingList",
    },
    istio_config: {
      value: googleContainerClusterAddonsConfigIstioConfigToHclTerraform(struct!.istioConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigIstioConfigList",
    },
    kalm_config: {
      value: googleContainerClusterAddonsConfigKalmConfigToHclTerraform(struct!.kalmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigKalmConfigList",
    },
    network_policy_config: {
      value: googleContainerClusterAddonsConfigNetworkPolicyConfigToHclTerraform(struct!.networkPolicyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigNetworkPolicyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudrunConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudrunConfig = this._cloudrunConfig?.internalValue;
    }
    if (this._configConnectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configConnectorConfig = this._configConnectorConfig?.internalValue;
    }
    if (this._dnsCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheConfig = this._dnsCacheConfig?.internalValue;
    }
    if (this._gcePersistentDiskCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDiskCsiDriverConfig = this._gcePersistentDiskCsiDriverConfig?.internalValue;
    }
    if (this._gcpFilestoreCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpFilestoreCsiDriverConfig = this._gcpFilestoreCsiDriverConfig?.internalValue;
    }
    if (this._gcsFuseCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsFuseCsiDriverConfig = this._gcsFuseCsiDriverConfig?.internalValue;
    }
    if (this._gkeBackupAgentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeBackupAgentConfig = this._gkeBackupAgentConfig?.internalValue;
    }
    if (this._horizontalPodAutoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalPodAutoscaling = this._horizontalPodAutoscaling?.internalValue;
    }
    if (this._httpLoadBalancing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLoadBalancing = this._httpLoadBalancing?.internalValue;
    }
    if (this._istioConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioConfig = this._istioConfig?.internalValue;
    }
    if (this._kalmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kalmConfig = this._kalmConfig?.internalValue;
    }
    if (this._networkPolicyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyConfig = this._networkPolicyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudrunConfig.internalValue = undefined;
      this._configConnectorConfig.internalValue = undefined;
      this._dnsCacheConfig.internalValue = undefined;
      this._gcePersistentDiskCsiDriverConfig.internalValue = undefined;
      this._gcpFilestoreCsiDriverConfig.internalValue = undefined;
      this._gcsFuseCsiDriverConfig.internalValue = undefined;
      this._gkeBackupAgentConfig.internalValue = undefined;
      this._horizontalPodAutoscaling.internalValue = undefined;
      this._httpLoadBalancing.internalValue = undefined;
      this._istioConfig.internalValue = undefined;
      this._kalmConfig.internalValue = undefined;
      this._networkPolicyConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudrunConfig.internalValue = value.cloudrunConfig;
      this._configConnectorConfig.internalValue = value.configConnectorConfig;
      this._dnsCacheConfig.internalValue = value.dnsCacheConfig;
      this._gcePersistentDiskCsiDriverConfig.internalValue = value.gcePersistentDiskCsiDriverConfig;
      this._gcpFilestoreCsiDriverConfig.internalValue = value.gcpFilestoreCsiDriverConfig;
      this._gcsFuseCsiDriverConfig.internalValue = value.gcsFuseCsiDriverConfig;
      this._gkeBackupAgentConfig.internalValue = value.gkeBackupAgentConfig;
      this._horizontalPodAutoscaling.internalValue = value.horizontalPodAutoscaling;
      this._httpLoadBalancing.internalValue = value.httpLoadBalancing;
      this._istioConfig.internalValue = value.istioConfig;
      this._kalmConfig.internalValue = value.kalmConfig;
      this._networkPolicyConfig.internalValue = value.networkPolicyConfig;
    }
  }

  // cloudrun_config - computed: false, optional: true, required: false
  private _cloudrunConfig = new GoogleContainerClusterAddonsConfigCloudrunConfigOutputReference(this, "cloudrun_config");
  public get cloudrunConfig() {
    return this._cloudrunConfig;
  }
  public putCloudrunConfig(value: GoogleContainerClusterAddonsConfigCloudrunConfig) {
    this._cloudrunConfig.internalValue = value;
  }
  public resetCloudrunConfig() {
    this._cloudrunConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudrunConfigInput() {
    return this._cloudrunConfig.internalValue;
  }

  // config_connector_config - computed: false, optional: true, required: false
  private _configConnectorConfig = new GoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference(this, "config_connector_config");
  public get configConnectorConfig() {
    return this._configConnectorConfig;
  }
  public putConfigConnectorConfig(value: GoogleContainerClusterAddonsConfigConfigConnectorConfig) {
    this._configConnectorConfig.internalValue = value;
  }
  public resetConfigConnectorConfig() {
    this._configConnectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configConnectorConfigInput() {
    return this._configConnectorConfig.internalValue;
  }

  // dns_cache_config - computed: false, optional: true, required: false
  private _dnsCacheConfig = new GoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference(this, "dns_cache_config");
  public get dnsCacheConfig() {
    return this._dnsCacheConfig;
  }
  public putDnsCacheConfig(value: GoogleContainerClusterAddonsConfigDnsCacheConfig) {
    this._dnsCacheConfig.internalValue = value;
  }
  public resetDnsCacheConfig() {
    this._dnsCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheConfigInput() {
    return this._dnsCacheConfig.internalValue;
  }

  // gce_persistent_disk_csi_driver_config - computed: false, optional: true, required: false
  private _gcePersistentDiskCsiDriverConfig = new GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference(this, "gce_persistent_disk_csi_driver_config");
  public get gcePersistentDiskCsiDriverConfig() {
    return this._gcePersistentDiskCsiDriverConfig;
  }
  public putGcePersistentDiskCsiDriverConfig(value: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig) {
    this._gcePersistentDiskCsiDriverConfig.internalValue = value;
  }
  public resetGcePersistentDiskCsiDriverConfig() {
    this._gcePersistentDiskCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskCsiDriverConfigInput() {
    return this._gcePersistentDiskCsiDriverConfig.internalValue;
  }

  // gcp_filestore_csi_driver_config - computed: false, optional: true, required: false
  private _gcpFilestoreCsiDriverConfig = new GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference(this, "gcp_filestore_csi_driver_config");
  public get gcpFilestoreCsiDriverConfig() {
    return this._gcpFilestoreCsiDriverConfig;
  }
  public putGcpFilestoreCsiDriverConfig(value: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig) {
    this._gcpFilestoreCsiDriverConfig.internalValue = value;
  }
  public resetGcpFilestoreCsiDriverConfig() {
    this._gcpFilestoreCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFilestoreCsiDriverConfigInput() {
    return this._gcpFilestoreCsiDriverConfig.internalValue;
  }

  // gcs_fuse_csi_driver_config - computed: false, optional: true, required: false
  private _gcsFuseCsiDriverConfig = new GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference(this, "gcs_fuse_csi_driver_config");
  public get gcsFuseCsiDriverConfig() {
    return this._gcsFuseCsiDriverConfig;
  }
  public putGcsFuseCsiDriverConfig(value: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig) {
    this._gcsFuseCsiDriverConfig.internalValue = value;
  }
  public resetGcsFuseCsiDriverConfig() {
    this._gcsFuseCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsFuseCsiDriverConfigInput() {
    return this._gcsFuseCsiDriverConfig.internalValue;
  }

  // gke_backup_agent_config - computed: false, optional: true, required: false
  private _gkeBackupAgentConfig = new GoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference(this, "gke_backup_agent_config");
  public get gkeBackupAgentConfig() {
    return this._gkeBackupAgentConfig;
  }
  public putGkeBackupAgentConfig(value: GoogleContainerClusterAddonsConfigGkeBackupAgentConfig) {
    this._gkeBackupAgentConfig.internalValue = value;
  }
  public resetGkeBackupAgentConfig() {
    this._gkeBackupAgentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeBackupAgentConfigInput() {
    return this._gkeBackupAgentConfig.internalValue;
  }

  // horizontal_pod_autoscaling - computed: false, optional: true, required: false
  private _horizontalPodAutoscaling = new GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference(this, "horizontal_pod_autoscaling");
  public get horizontalPodAutoscaling() {
    return this._horizontalPodAutoscaling;
  }
  public putHorizontalPodAutoscaling(value: GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling) {
    this._horizontalPodAutoscaling.internalValue = value;
  }
  public resetHorizontalPodAutoscaling() {
    this._horizontalPodAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalPodAutoscalingInput() {
    return this._horizontalPodAutoscaling.internalValue;
  }

  // http_load_balancing - computed: false, optional: true, required: false
  private _httpLoadBalancing = new GoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference(this, "http_load_balancing");
  public get httpLoadBalancing() {
    return this._httpLoadBalancing;
  }
  public putHttpLoadBalancing(value: GoogleContainerClusterAddonsConfigHttpLoadBalancing) {
    this._httpLoadBalancing.internalValue = value;
  }
  public resetHttpLoadBalancing() {
    this._httpLoadBalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLoadBalancingInput() {
    return this._httpLoadBalancing.internalValue;
  }

  // istio_config - computed: false, optional: true, required: false
  private _istioConfig = new GoogleContainerClusterAddonsConfigIstioConfigOutputReference(this, "istio_config");
  public get istioConfig() {
    return this._istioConfig;
  }
  public putIstioConfig(value: GoogleContainerClusterAddonsConfigIstioConfig) {
    this._istioConfig.internalValue = value;
  }
  public resetIstioConfig() {
    this._istioConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioConfigInput() {
    return this._istioConfig.internalValue;
  }

  // kalm_config - computed: false, optional: true, required: false
  private _kalmConfig = new GoogleContainerClusterAddonsConfigKalmConfigOutputReference(this, "kalm_config");
  public get kalmConfig() {
    return this._kalmConfig;
  }
  public putKalmConfig(value: GoogleContainerClusterAddonsConfigKalmConfig) {
    this._kalmConfig.internalValue = value;
  }
  public resetKalmConfig() {
    this._kalmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kalmConfigInput() {
    return this._kalmConfig.internalValue;
  }

  // network_policy_config - computed: false, optional: true, required: false
  private _networkPolicyConfig = new GoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference(this, "network_policy_config");
  public get networkPolicyConfig() {
    return this._networkPolicyConfig;
  }
  public putNetworkPolicyConfig(value: GoogleContainerClusterAddonsConfigNetworkPolicyConfig) {
    this._networkPolicyConfig.internalValue = value;
  }
  public resetNetworkPolicyConfig() {
    this._networkPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyConfigInput() {
    return this._networkPolicyConfig.internalValue;
  }
}
export interface GoogleContainerClusterAuthenticatorGroupsConfig {
  /**
  * The name of the RBAC security group for use with Google security groups in Kubernetes RBAC. Group name must be in format gke-security-groups@yourdomain.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#security_group GoogleContainerCluster#security_group}
  */
  readonly securityGroup: string;
}

export function googleContainerClusterAuthenticatorGroupsConfigToTerraform(struct?: GoogleContainerClusterAuthenticatorGroupsConfigOutputReference | GoogleContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
  }
}


export function googleContainerClusterAuthenticatorGroupsConfigToHclTerraform(struct?: GoogleContainerClusterAuthenticatorGroupsConfigOutputReference | GoogleContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group: {
      value: cdktf.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAuthenticatorGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAuthenticatorGroupsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAuthenticatorGroupsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroup = value.securityGroup;
    }
  }

  // security_group - computed: false, optional: false, required: true
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }
}
export interface GoogleContainerClusterBinaryAuthorization {
  /**
  * Enable Binary Authorization for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode of operation for Binary Authorization policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#evaluation_mode GoogleContainerCluster#evaluation_mode}
  */
  readonly evaluationMode?: string;
}

export function googleContainerClusterBinaryAuthorizationToTerraform(struct?: GoogleContainerClusterBinaryAuthorizationOutputReference | GoogleContainerClusterBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
  }
}


export function googleContainerClusterBinaryAuthorizationToHclTerraform(struct?: GoogleContainerClusterBinaryAuthorizationOutputReference | GoogleContainerClusterBinaryAuthorization): any {
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
    evaluation_mode: {
      value: cdktf.stringToHclTerraform(struct!.evaluationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._evaluationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._evaluationMode = value.evaluationMode;
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

  // evaluation_mode - computed: true, optional: true, required: false
  private _evaluationMode?: string; 
  public get evaluationMode() {
    return this.getStringAttribute('evaluation_mode');
  }
  public set evaluationMode(value: string) {
    this._evaluationMode = value;
  }
  public resetEvaluationMode() {
    this._evaluationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationModeInput() {
    return this._evaluationMode;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions {
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_upgrade_start_time - computed: true, optional: false, required: false
  public get autoUpgradeStartTime() {
    return this.getStringAttribute('auto_upgrade_start_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference {
    return new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement {
  /**
  * Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#auto_repair GoogleContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#auto_upgrade GoogleContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktf.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: true, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: true, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }

  // upgrade_options - computed: true, optional: false, required: false
  private _upgradeOptions = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsList(this, "upgrade_options", false);
  public get upgradeOptions() {
    return this._upgradeOptions;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_integrity_monitoring GoogleContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_secure_boot GoogleContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#batch_node_count GoogleContainerCluster#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#batch_percentage GoogleContainerCluster#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Soak time after each batch gets drained.
  * 
  * 																			A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#batch_soak_duration GoogleContainerCluster#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_node_count: cdktf.numberToTerraform(struct!.batchNodeCount),
    batch_percentage: cdktf.numberToTerraform(struct!.batchPercentage),
    batch_soak_duration: cdktf.stringToTerraform(struct!.batchSoakDuration),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_node_count: {
      value: cdktf.numberToHclTerraform(struct!.batchNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.batchSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNodeCount = this._batchNodeCount;
    }
    if (this._batchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPercentage = this._batchPercentage;
    }
    if (this._batchSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSoakDuration = this._batchSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNodeCount = undefined;
      this._batchPercentage = undefined;
      this._batchSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNodeCount = value.batchNodeCount;
      this._batchPercentage = value.batchPercentage;
      this._batchSoakDuration = value.batchSoakDuration;
    }
  }

  // batch_node_count - computed: true, optional: true, required: false
  private _batchNodeCount?: number; 
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }
  public set batchNodeCount(value: number) {
    this._batchNodeCount = value;
  }
  public resetBatchNodeCount() {
    this._batchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNodeCountInput() {
    return this._batchNodeCount;
  }

  // batch_percentage - computed: true, optional: true, required: false
  private _batchPercentage?: number; 
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }
  public set batchPercentage(value: number) {
    this._batchPercentage = value;
  }
  public resetBatchPercentage() {
    this._batchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPercentageInput() {
    return this._batchPercentage;
  }

  // batch_soak_duration - computed: false, optional: true, required: false
  private _batchSoakDuration?: string; 
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
  public set batchSoakDuration(value: string) {
    this._batchSoakDuration = value;
  }
  public resetBatchSoakDuration() {
    this._batchSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSoakDurationInput() {
    return this._batchSoakDuration;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings {
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  * 
  * 																A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_pool_soak_duration GoogleContainerCluster#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
  /**
  * standard_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#standard_rollout_policy GoogleContainerCluster#standard_rollout_policy}
  */
  readonly standardRolloutPolicy?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_soak_duration: cdktf.stringToTerraform(struct!.nodePoolSoakDuration),
    standard_rollout_policy: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct!.standardRolloutPolicy),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_rollout_policy: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct!.standardRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolSoakDuration = this._nodePoolSoakDuration;
    }
    if (this._standardRolloutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardRolloutPolicy = this._standardRolloutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolSoakDuration = undefined;
      this._standardRolloutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolSoakDuration = value.nodePoolSoakDuration;
      this._standardRolloutPolicy.internalValue = value.standardRolloutPolicy;
    }
  }

  // node_pool_soak_duration - computed: true, optional: true, required: false
  private _nodePoolSoakDuration?: string; 
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }
  public set nodePoolSoakDuration(value: string) {
    this._nodePoolSoakDuration = value;
  }
  public resetNodePoolSoakDuration() {
    this._nodePoolSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolSoakDurationInput() {
    return this._nodePoolSoakDuration;
  }

  // standard_rollout_policy - computed: false, optional: true, required: false
  private _standardRolloutPolicy = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this, "standard_rollout_policy");
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
  public putStandardRolloutPolicy(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy) {
    this._standardRolloutPolicy.internalValue = value;
  }
  public resetStandardRolloutPolicy() {
    this._standardRolloutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardRolloutPolicyInput() {
    return this._standardRolloutPolicy.internalValue;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings {
  /**
  * The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_surge GoogleContainerCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_unavailable GoogleContainerCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Update strategy of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#strategy GoogleContainerCluster#strategy}
  */
  readonly strategy?: string;
  /**
  * blue_green_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#blue_green_settings GoogleContainerCluster#blue_green_settings}
  */
  readonly blueGreenSettings?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    blue_green_settings: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToTerraform(struct!.blueGreenSettings),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blue_green_settings: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToHclTerraform(struct!.blueGreenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._blueGreenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenSettings = this._blueGreenSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._strategy = undefined;
      this._blueGreenSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._strategy = value.strategy;
      this._blueGreenSettings.internalValue = value.blueGreenSettings;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // blue_green_settings - computed: false, optional: true, required: false
  private _blueGreenSettings = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference(this, "blue_green_settings");
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }
  public putBlueGreenSettings(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings) {
    this._blueGreenSettings.internalValue = value;
  }
  public resetBlueGreenSettings() {
    this._blueGreenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenSettingsInput() {
    return this._blueGreenSettings.internalValue;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#boot_disk_kms_key GoogleContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disk_size GoogleContainerCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the disk attached to each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * The default image type used by NAP once a new node pool is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#image_type GoogleContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#min_cpu_platform GoogleContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Scopes that are used by NAP when creating node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#oauth_scopes GoogleContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#service_account GoogleContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#management GoogleContainerCluster#management}
  */
  readonly management?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#shielded_instance_config GoogleContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#upgrade_settings GoogleContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    management: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToTerraform(struct!.management),
    shielded_instance_config: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    upgrade_settings: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementList",
    },
    shielded_instance_config: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigList",
    },
    upgrade_settings: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._imageType = undefined;
      this._minCpuPlatform = undefined;
      this._oauthScopes = undefined;
      this._serviceAccount = undefined;
      this._management.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._imageType = value.imageType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._oauthScopes = value.oauthScopes;
      this._serviceAccount = value.serviceAccount;
      this._management.internalValue = value.management;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // service_account - computed: false, optional: true, required: false
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

  // management - computed: false, optional: true, required: false
  private _management = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}
export interface GoogleContainerClusterClusterAutoscalingResourceLimits {
  /**
  * Maximum amount of the resource in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#maximum GoogleContainerCluster#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum amount of the resource in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#minimum GoogleContainerCluster#minimum}
  */
  readonly minimum?: number;
  /**
  * The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#resource_type GoogleContainerCluster#resource_type}
  */
  readonly resourceType: string;
}

export function googleContainerClusterClusterAutoscalingResourceLimitsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function googleContainerClusterClusterAutoscalingResourceLimitsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._resourceType = value.resourceType;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class GoogleContainerClusterClusterAutoscalingResourceLimitsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference {
    return new GoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterClusterAutoscaling {
  /**
  * Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#autoscaling_profile GoogleContainerCluster#autoscaling_profile}
  */
  readonly autoscalingProfile?: string;
  /**
  * Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * auto_provisioning_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#auto_provisioning_defaults GoogleContainerCluster#auto_provisioning_defaults}
  */
  readonly autoProvisioningDefaults?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#resource_limits GoogleContainerCluster#resource_limits}
  */
  readonly resourceLimits?: GoogleContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable;
}

export function googleContainerClusterClusterAutoscalingToTerraform(struct?: GoogleContainerClusterClusterAutoscalingOutputReference | GoogleContainerClusterClusterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_profile: cdktf.stringToTerraform(struct!.autoscalingProfile),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_provisioning_defaults: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct!.autoProvisioningDefaults),
    resource_limits: cdktf.listMapper(googleContainerClusterClusterAutoscalingResourceLimitsToTerraform, true)(struct!.resourceLimits),
  }
}


export function googleContainerClusterClusterAutoscalingToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingOutputReference | GoogleContainerClusterClusterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_profile: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_provisioning_defaults: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToHclTerraform(struct!.autoProvisioningDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsList",
    },
    resource_limits: {
      value: cdktf.listMapperHcl(googleContainerClusterClusterAutoscalingResourceLimitsToHclTerraform, true)(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingResourceLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingProfile = this._autoscalingProfile;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoProvisioningDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoProvisioningDefaults = this._autoProvisioningDefaults?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingProfile = undefined;
      this._enabled = undefined;
      this._autoProvisioningDefaults.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingProfile = value.autoscalingProfile;
      this._enabled = value.enabled;
      this._autoProvisioningDefaults.internalValue = value.autoProvisioningDefaults;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
  }

  // autoscaling_profile - computed: false, optional: true, required: false
  private _autoscalingProfile?: string; 
  public get autoscalingProfile() {
    return this.getStringAttribute('autoscaling_profile');
  }
  public set autoscalingProfile(value: string) {
    this._autoscalingProfile = value;
  }
  public resetAutoscalingProfile() {
    this._autoscalingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingProfileInput() {
    return this._autoscalingProfile;
  }

  // enabled - computed: true, optional: true, required: false
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

  // auto_provisioning_defaults - computed: false, optional: true, required: false
  private _autoProvisioningDefaults = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference(this, "auto_provisioning_defaults");
  public get autoProvisioningDefaults() {
    return this._autoProvisioningDefaults;
  }
  public putAutoProvisioningDefaults(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults) {
    this._autoProvisioningDefaults.internalValue = value;
  }
  public resetAutoProvisioningDefaults() {
    this._autoProvisioningDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisioningDefaultsInput() {
    return this._autoProvisioningDefaults.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new GoogleContainerClusterClusterAutoscalingResourceLimitsList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: GoogleContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }
}
export interface GoogleContainerClusterClusterTelemetry {
  /**
  * Type of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type: string;
}

export function googleContainerClusterClusterTelemetryToTerraform(struct?: GoogleContainerClusterClusterTelemetryOutputReference | GoogleContainerClusterClusterTelemetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterClusterTelemetryToHclTerraform(struct?: GoogleContainerClusterClusterTelemetryOutputReference | GoogleContainerClusterClusterTelemetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleContainerClusterClusterTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterTelemetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterTelemetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface GoogleContainerClusterConfidentialNodes {
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterConfidentialNodesToTerraform(struct?: GoogleContainerClusterConfidentialNodesOutputReference | GoogleContainerClusterConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterConfidentialNodesToHclTerraform(struct?: GoogleContainerClusterConfidentialNodesOutputReference | GoogleContainerClusterConfidentialNodes): any {
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

export class GoogleContainerClusterConfidentialNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterConfidentialNodes | undefined) {
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
export interface GoogleContainerClusterCostManagementConfig {
  /**
  * Whether to enable GKE cost allocation. When you enable GKE cost allocation, the cluster name and namespace of your GKE workloads appear in the labels field of the billing export to BigQuery. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterCostManagementConfigToTerraform(struct?: GoogleContainerClusterCostManagementConfigOutputReference | GoogleContainerClusterCostManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterCostManagementConfigToHclTerraform(struct?: GoogleContainerClusterCostManagementConfigOutputReference | GoogleContainerClusterCostManagementConfig): any {
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

export class GoogleContainerClusterCostManagementConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterCostManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterCostManagementConfig | undefined) {
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
export interface GoogleContainerClusterDatabaseEncryption {
  /**
  * The key to use to encrypt/decrypt secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#key_name GoogleContainerCluster#key_name}
  */
  readonly keyName?: string;
  /**
  * ENCRYPTED or DECRYPTED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#state GoogleContainerCluster#state}
  */
  readonly state: string;
}

export function googleContainerClusterDatabaseEncryptionToTerraform(struct?: GoogleContainerClusterDatabaseEncryptionOutputReference | GoogleContainerClusterDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function googleContainerClusterDatabaseEncryptionToHclTerraform(struct?: GoogleContainerClusterDatabaseEncryptionOutputReference | GoogleContainerClusterDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterDatabaseEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterDatabaseEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterDatabaseEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyName = value.keyName;
      this._state = value.state;
    }
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface GoogleContainerClusterDefaultSnatStatus {
  /**
  * When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterDefaultSnatStatusToTerraform(struct?: GoogleContainerClusterDefaultSnatStatusOutputReference | GoogleContainerClusterDefaultSnatStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterDefaultSnatStatusToHclTerraform(struct?: GoogleContainerClusterDefaultSnatStatusOutputReference | GoogleContainerClusterDefaultSnatStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterDefaultSnatStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterDefaultSnatStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterDefaultSnatStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterDnsConfig {
  /**
  * Which in-cluster DNS provider should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cluster_dns GoogleContainerCluster#cluster_dns}
  */
  readonly clusterDns?: string;
  /**
  * The suffix used for all cluster service records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cluster_dns_domain GoogleContainerCluster#cluster_dns_domain}
  */
  readonly clusterDnsDomain?: string;
  /**
  * The scope of access to cluster DNS records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cluster_dns_scope GoogleContainerCluster#cluster_dns_scope}
  */
  readonly clusterDnsScope?: string;
}

export function googleContainerClusterDnsConfigToTerraform(struct?: GoogleContainerClusterDnsConfigOutputReference | GoogleContainerClusterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_dns: cdktf.stringToTerraform(struct!.clusterDns),
    cluster_dns_domain: cdktf.stringToTerraform(struct!.clusterDnsDomain),
    cluster_dns_scope: cdktf.stringToTerraform(struct!.clusterDnsScope),
  }
}


export function googleContainerClusterDnsConfigToHclTerraform(struct?: GoogleContainerClusterDnsConfigOutputReference | GoogleContainerClusterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_dns: {
      value: cdktf.stringToHclTerraform(struct!.clusterDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns_scope: {
      value: cdktf.stringToHclTerraform(struct!.clusterDnsScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._clusterDnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsDomain = this._clusterDnsDomain;
    }
    if (this._clusterDnsScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsScope = this._clusterDnsScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterDns = undefined;
      this._clusterDnsDomain = undefined;
      this._clusterDnsScope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterDns = value.clusterDns;
      this._clusterDnsDomain = value.clusterDnsDomain;
      this._clusterDnsScope = value.clusterDnsScope;
    }
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string; 
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }
  public set clusterDns(value: string) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cluster_dns_domain - computed: false, optional: true, required: false
  private _clusterDnsDomain?: string; 
  public get clusterDnsDomain() {
    return this.getStringAttribute('cluster_dns_domain');
  }
  public set clusterDnsDomain(value: string) {
    this._clusterDnsDomain = value;
  }
  public resetClusterDnsDomain() {
    this._clusterDnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsDomainInput() {
    return this._clusterDnsDomain;
  }

  // cluster_dns_scope - computed: false, optional: true, required: false
  private _clusterDnsScope?: string; 
  public get clusterDnsScope() {
    return this.getStringAttribute('cluster_dns_scope');
  }
  public set clusterDnsScope(value: string) {
    this._clusterDnsScope = value;
  }
  public resetClusterDnsScope() {
    this._clusterDnsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsScopeInput() {
    return this._clusterDnsScope;
  }
}
export interface GoogleContainerClusterEnableK8SBetaApis {
  /**
  * Enabled Kubernetes Beta APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled_apis GoogleContainerCluster#enabled_apis}
  */
  readonly enabledApis: string[];
}

export function googleContainerClusterEnableK8SBetaApisToTerraform(struct?: GoogleContainerClusterEnableK8SBetaApisOutputReference | GoogleContainerClusterEnableK8SBetaApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_apis: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledApis),
  }
}


export function googleContainerClusterEnableK8SBetaApisToHclTerraform(struct?: GoogleContainerClusterEnableK8SBetaApisOutputReference | GoogleContainerClusterEnableK8SBetaApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_apis: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledApis),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterEnableK8SBetaApisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterEnableK8SBetaApis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledApis = this._enabledApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterEnableK8SBetaApis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledApis = value.enabledApis;
    }
  }

  // enabled_apis - computed: false, optional: false, required: true
  private _enabledApis?: string[]; 
  public get enabledApis() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_apis'));
  }
  public set enabledApis(value: string[]) {
    this._enabledApis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledApisInput() {
    return this._enabledApis;
  }
}
export interface GoogleContainerClusterFleet {
  /**
  * The Fleet host project of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#project GoogleContainerCluster#project}
  */
  readonly project?: string;
}

export function googleContainerClusterFleetToTerraform(struct?: GoogleContainerClusterFleetOutputReference | GoogleContainerClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function googleContainerClusterFleetToHclTerraform(struct?: GoogleContainerClusterFleetOutputReference | GoogleContainerClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
  }

  // pre_registered - computed: true, optional: false, required: false
  public get preRegistered() {
    return this.getBooleanAttribute('pre_registered');
  }

  // project - computed: false, optional: true, required: false
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
}
export interface GoogleContainerClusterGatewayApiConfig {
  /**
  * The Gateway API release channel to use for Gateway API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#channel GoogleContainerCluster#channel}
  */
  readonly channel: string;
}

export function googleContainerClusterGatewayApiConfigToTerraform(struct?: GoogleContainerClusterGatewayApiConfigOutputReference | GoogleContainerClusterGatewayApiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
  }
}


export function googleContainerClusterGatewayApiConfigToHclTerraform(struct?: GoogleContainerClusterGatewayApiConfigOutputReference | GoogleContainerClusterGatewayApiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterGatewayApiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterGatewayApiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterGatewayApiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface GoogleContainerClusterIdentityServiceConfig {
  /**
  * Whether to enable the Identity Service component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterIdentityServiceConfigToTerraform(struct?: GoogleContainerClusterIdentityServiceConfigOutputReference | GoogleContainerClusterIdentityServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterIdentityServiceConfigToHclTerraform(struct?: GoogleContainerClusterIdentityServiceConfigOutputReference | GoogleContainerClusterIdentityServiceConfig): any {
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

export class GoogleContainerClusterIdentityServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIdentityServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIdentityServiceConfig | undefined) {
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
export interface GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig {
  /**
  * Name for pod secondary ipv4 range which has the actual range defined ahead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#pod_range_names GoogleContainerCluster#pod_range_names}
  */
  readonly podRangeNames: string[];
}

export function googleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference | GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_range_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podRangeNames),
  }
}


export function googleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference | GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_range_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podRangeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podRangeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRangeNames = this._podRangeNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podRangeNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podRangeNames = value.podRangeNames;
    }
  }

  // pod_range_names - computed: false, optional: false, required: true
  private _podRangeNames?: string[]; 
  public get podRangeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('pod_range_names'));
  }
  public set podRangeNames(value: string[]) {
    this._podRangeNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podRangeNamesInput() {
    return this._podRangeNames;
  }
}
export interface GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference | GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference | GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterIpAllocationPolicy {
  /**
  * The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cluster_ipv4_cidr_block GoogleContainerCluster#cluster_ipv4_cidr_block}
  */
  readonly clusterIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cluster_secondary_range_name GoogleContainerCluster#cluster_secondary_range_name}
  */
  readonly clusterSecondaryRangeName?: string;
  /**
  * The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#services_ipv4_cidr_block GoogleContainerCluster#services_ipv4_cidr_block}
  */
  readonly servicesIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#services_secondary_range_name GoogleContainerCluster#services_secondary_range_name}
  */
  readonly servicesSecondaryRangeName?: string;
  /**
  * The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#stack_type GoogleContainerCluster#stack_type}
  */
  readonly stackType?: string;
  /**
  * additional_pod_ranges_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#additional_pod_ranges_config GoogleContainerCluster#additional_pod_ranges_config}
  */
  readonly additionalPodRangesConfig?: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig;
  /**
  * pod_cidr_overprovision_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#pod_cidr_overprovision_config GoogleContainerCluster#pod_cidr_overprovision_config}
  */
  readonly podCidrOverprovisionConfig?: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig;
}

export function googleContainerClusterIpAllocationPolicyToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyOutputReference | GoogleContainerClusterIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ipv4_cidr_block: cdktf.stringToTerraform(struct!.clusterIpv4CidrBlock),
    cluster_secondary_range_name: cdktf.stringToTerraform(struct!.clusterSecondaryRangeName),
    services_ipv4_cidr_block: cdktf.stringToTerraform(struct!.servicesIpv4CidrBlock),
    services_secondary_range_name: cdktf.stringToTerraform(struct!.servicesSecondaryRangeName),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    additional_pod_ranges_config: googleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToTerraform(struct!.additionalPodRangesConfig),
    pod_cidr_overprovision_config: googleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToTerraform(struct!.podCidrOverprovisionConfig),
  }
}


export function googleContainerClusterIpAllocationPolicyToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyOutputReference | GoogleContainerClusterIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.clusterIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_secondary_range_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterSecondaryRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.servicesIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_secondary_range_name: {
      value: cdktf.stringToHclTerraform(struct!.servicesSecondaryRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_type: {
      value: cdktf.stringToHclTerraform(struct!.stackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_pod_ranges_config: {
      value: googleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToHclTerraform(struct!.additionalPodRangesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigList",
    },
    pod_cidr_overprovision_config: {
      value: googleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToHclTerraform(struct!.podCidrOverprovisionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterIpAllocationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIpAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpv4CidrBlock = this._clusterIpv4CidrBlock;
    }
    if (this._clusterSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSecondaryRangeName = this._clusterSecondaryRangeName;
    }
    if (this._servicesIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesIpv4CidrBlock = this._servicesIpv4CidrBlock;
    }
    if (this._servicesSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesSecondaryRangeName = this._servicesSecondaryRangeName;
    }
    if (this._stackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackType = this._stackType;
    }
    if (this._additionalPodRangesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPodRangesConfig = this._additionalPodRangesConfig?.internalValue;
    }
    if (this._podCidrOverprovisionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrOverprovisionConfig = this._podCidrOverprovisionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterIpv4CidrBlock = undefined;
      this._clusterSecondaryRangeName = undefined;
      this._servicesIpv4CidrBlock = undefined;
      this._servicesSecondaryRangeName = undefined;
      this._stackType = undefined;
      this._additionalPodRangesConfig.internalValue = undefined;
      this._podCidrOverprovisionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterIpv4CidrBlock = value.clusterIpv4CidrBlock;
      this._clusterSecondaryRangeName = value.clusterSecondaryRangeName;
      this._servicesIpv4CidrBlock = value.servicesIpv4CidrBlock;
      this._servicesSecondaryRangeName = value.servicesSecondaryRangeName;
      this._stackType = value.stackType;
      this._additionalPodRangesConfig.internalValue = value.additionalPodRangesConfig;
      this._podCidrOverprovisionConfig.internalValue = value.podCidrOverprovisionConfig;
    }
  }

  // cluster_ipv4_cidr_block - computed: true, optional: true, required: false
  private _clusterIpv4CidrBlock?: string; 
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }
  public set clusterIpv4CidrBlock(value: string) {
    this._clusterIpv4CidrBlock = value;
  }
  public resetClusterIpv4CidrBlock() {
    this._clusterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrBlockInput() {
    return this._clusterIpv4CidrBlock;
  }

  // cluster_secondary_range_name - computed: true, optional: true, required: false
  private _clusterSecondaryRangeName?: string; 
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }
  public set clusterSecondaryRangeName(value: string) {
    this._clusterSecondaryRangeName = value;
  }
  public resetClusterSecondaryRangeName() {
    this._clusterSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSecondaryRangeNameInput() {
    return this._clusterSecondaryRangeName;
  }

  // services_ipv4_cidr_block - computed: true, optional: true, required: false
  private _servicesIpv4CidrBlock?: string; 
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }
  public set servicesIpv4CidrBlock(value: string) {
    this._servicesIpv4CidrBlock = value;
  }
  public resetServicesIpv4CidrBlock() {
    this._servicesIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv4CidrBlockInput() {
    return this._servicesIpv4CidrBlock;
  }

  // services_secondary_range_name - computed: true, optional: true, required: false
  private _servicesSecondaryRangeName?: string; 
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }
  public set servicesSecondaryRangeName(value: string) {
    this._servicesSecondaryRangeName = value;
  }
  public resetServicesSecondaryRangeName() {
    this._servicesSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesSecondaryRangeNameInput() {
    return this._servicesSecondaryRangeName;
  }

  // stack_type - computed: false, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // additional_pod_ranges_config - computed: false, optional: true, required: false
  private _additionalPodRangesConfig = new GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference(this, "additional_pod_ranges_config");
  public get additionalPodRangesConfig() {
    return this._additionalPodRangesConfig;
  }
  public putAdditionalPodRangesConfig(value: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig) {
    this._additionalPodRangesConfig.internalValue = value;
  }
  public resetAdditionalPodRangesConfig() {
    this._additionalPodRangesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPodRangesConfigInput() {
    return this._additionalPodRangesConfig.internalValue;
  }

  // pod_cidr_overprovision_config - computed: false, optional: true, required: false
  private _podCidrOverprovisionConfig = new GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference(this, "pod_cidr_overprovision_config");
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }
  public putPodCidrOverprovisionConfig(value: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig) {
    this._podCidrOverprovisionConfig.internalValue = value;
  }
  public resetPodCidrOverprovisionConfig() {
    this._podCidrOverprovisionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrOverprovisionConfigInput() {
    return this._podCidrOverprovisionConfig.internalValue;
  }
}
export interface GoogleContainerClusterLoggingConfig {
  /**
  * GKE components exposing logs. Valid values include SYSTEM_COMPONENTS, APISERVER, CONTROLLER_MANAGER, SCHEDULER, and WORKLOADS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_components GoogleContainerCluster#enable_components}
  */
  readonly enableComponents: string[];
}

export function googleContainerClusterLoggingConfigToTerraform(struct?: GoogleContainerClusterLoggingConfigOutputReference | GoogleContainerClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
  }
}


export function googleContainerClusterLoggingConfigToHclTerraform(struct?: GoogleContainerClusterLoggingConfigOutputReference | GoogleContainerClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
    }
  }

  // enable_components - computed: false, optional: false, required: true
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }
}
export interface GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#start_time GoogleContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function googleContainerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct?: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference | GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function googleContainerClusterMaintenancePolicyDailyMaintenanceWindowToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference | GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime = value.startTime;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions {
  /**
  * The scope of automatic upgrades to restrict in the exclusion window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#scope GoogleContainerCluster#scope}
  */
  readonly scope: string;
}

export function googleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference | GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function googleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference | GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleContainerClusterMaintenancePolicyMaintenanceExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#end_time GoogleContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#exclusion_name GoogleContainerCluster#exclusion_name}
  */
  readonly exclusionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#start_time GoogleContainerCluster#start_time}
  */
  readonly startTime: string;
  /**
  * exclusion_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#exclusion_options GoogleContainerCluster#exclusion_options}
  */
  readonly exclusionOptions?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions;
}

export function googleContainerClusterMaintenancePolicyMaintenanceExclusionToTerraform(struct?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    exclusion_name: cdktf.stringToTerraform(struct!.exclusionName),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    exclusion_options: googleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct!.exclusionOptions),
  }
}


export function googleContainerClusterMaintenancePolicyMaintenanceExclusionToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable): any {
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
    exclusion_name: {
      value: cdktf.stringToHclTerraform(struct!.exclusionName),
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
    exclusion_options: {
      value: googleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToHclTerraform(struct!.exclusionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._exclusionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionName = this._exclusionName;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._exclusionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionOptions = this._exclusionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._exclusionName = undefined;
      this._startTime = undefined;
      this._exclusionOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._exclusionName = value.exclusionName;
      this._startTime = value.startTime;
      this._exclusionOptions.internalValue = value.exclusionOptions;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // exclusion_name - computed: false, optional: false, required: true
  private _exclusionName?: string; 
  public get exclusionName() {
    return this.getStringAttribute('exclusion_name');
  }
  public set exclusionName(value: string) {
    this._exclusionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionNameInput() {
    return this._exclusionName;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // exclusion_options - computed: false, optional: true, required: false
  private _exclusionOptions = new GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference(this, "exclusion_options");
  public get exclusionOptions() {
    return this._exclusionOptions;
  }
  public putExclusionOptions(value: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions) {
    this._exclusionOptions.internalValue = value;
  }
  public resetExclusionOptions() {
    this._exclusionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionOptionsInput() {
    return this._exclusionOptions.internalValue;
  }
}

export class GoogleContainerClusterMaintenancePolicyMaintenanceExclusionList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference {
    return new GoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterMaintenancePolicyRecurringWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#end_time GoogleContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#recurrence GoogleContainerCluster#recurrence}
  */
  readonly recurrence: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#start_time GoogleContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function googleContainerClusterMaintenancePolicyRecurringWindowToTerraform(struct?: GoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference | GoogleContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    recurrence: cdktf.stringToTerraform(struct!.recurrence),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function googleContainerClusterMaintenancePolicyRecurringWindowToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference | GoogleContainerClusterMaintenancePolicyRecurringWindow): any {
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
    recurrence: {
      value: cdktf.stringToHclTerraform(struct!.recurrence),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicyRecurringWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyRecurringWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._recurrence = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._recurrence = value.recurrence;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // recurrence - computed: false, optional: false, required: true
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface GoogleContainerClusterMaintenancePolicy {
  /**
  * daily_maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#daily_maintenance_window GoogleContainerCluster#daily_maintenance_window}
  */
  readonly dailyMaintenanceWindow?: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow;
  /**
  * maintenance_exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#maintenance_exclusion GoogleContainerCluster#maintenance_exclusion}
  */
  readonly maintenanceExclusion?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable;
  /**
  * recurring_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#recurring_window GoogleContainerCluster#recurring_window}
  */
  readonly recurringWindow?: GoogleContainerClusterMaintenancePolicyRecurringWindow;
}

export function googleContainerClusterMaintenancePolicyToTerraform(struct?: GoogleContainerClusterMaintenancePolicyOutputReference | GoogleContainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_maintenance_window: googleContainerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct!.dailyMaintenanceWindow),
    maintenance_exclusion: cdktf.listMapper(googleContainerClusterMaintenancePolicyMaintenanceExclusionToTerraform, true)(struct!.maintenanceExclusion),
    recurring_window: googleContainerClusterMaintenancePolicyRecurringWindowToTerraform(struct!.recurringWindow),
  }
}


export function googleContainerClusterMaintenancePolicyToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyOutputReference | GoogleContainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily_maintenance_window: {
      value: googleContainerClusterMaintenancePolicyDailyMaintenanceWindowToHclTerraform(struct!.dailyMaintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowList",
    },
    maintenance_exclusion: {
      value: cdktf.listMapperHcl(googleContainerClusterMaintenancePolicyMaintenanceExclusionToHclTerraform, true)(struct!.maintenanceExclusion),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterMaintenancePolicyMaintenanceExclusionList",
    },
    recurring_window: {
      value: googleContainerClusterMaintenancePolicyRecurringWindowToHclTerraform(struct!.recurringWindow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMaintenancePolicyRecurringWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyMaintenanceWindow = this._dailyMaintenanceWindow?.internalValue;
    }
    if (this._maintenanceExclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceExclusion = this._maintenanceExclusion?.internalValue;
    }
    if (this._recurringWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringWindow = this._recurringWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailyMaintenanceWindow.internalValue = undefined;
      this._maintenanceExclusion.internalValue = undefined;
      this._recurringWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailyMaintenanceWindow.internalValue = value.dailyMaintenanceWindow;
      this._maintenanceExclusion.internalValue = value.maintenanceExclusion;
      this._recurringWindow.internalValue = value.recurringWindow;
    }
  }

  // daily_maintenance_window - computed: false, optional: true, required: false
  private _dailyMaintenanceWindow = new GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference(this, "daily_maintenance_window");
  public get dailyMaintenanceWindow() {
    return this._dailyMaintenanceWindow;
  }
  public putDailyMaintenanceWindow(value: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow) {
    this._dailyMaintenanceWindow.internalValue = value;
  }
  public resetDailyMaintenanceWindow() {
    this._dailyMaintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyMaintenanceWindowInput() {
    return this._dailyMaintenanceWindow.internalValue;
  }

  // maintenance_exclusion - computed: false, optional: true, required: false
  private _maintenanceExclusion = new GoogleContainerClusterMaintenancePolicyMaintenanceExclusionList(this, "maintenance_exclusion", true);
  public get maintenanceExclusion() {
    return this._maintenanceExclusion;
  }
  public putMaintenanceExclusion(value: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable) {
    this._maintenanceExclusion.internalValue = value;
  }
  public resetMaintenanceExclusion() {
    this._maintenanceExclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceExclusionInput() {
    return this._maintenanceExclusion.internalValue;
  }

  // recurring_window - computed: false, optional: true, required: false
  private _recurringWindow = new GoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference(this, "recurring_window");
  public get recurringWindow() {
    return this._recurringWindow;
  }
  public putRecurringWindow(value: GoogleContainerClusterMaintenancePolicyRecurringWindow) {
    this._recurringWindow.internalValue = value;
  }
  public resetRecurringWindow() {
    this._recurringWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringWindowInput() {
    return this._recurringWindow.internalValue;
  }
}
export interface GoogleContainerClusterMasterAuthClientCertificateConfig {
  /**
  * Whether client certificate authorization is enabled for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#issue_client_certificate GoogleContainerCluster#issue_client_certificate}
  */
  readonly issueClientCertificate: boolean | cdktf.IResolvable;
}

export function googleContainerClusterMasterAuthClientCertificateConfigToTerraform(struct?: GoogleContainerClusterMasterAuthClientCertificateConfigOutputReference | GoogleContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issue_client_certificate: cdktf.booleanToTerraform(struct!.issueClientCertificate),
  }
}


export function googleContainerClusterMasterAuthClientCertificateConfigToHclTerraform(struct?: GoogleContainerClusterMasterAuthClientCertificateConfigOutputReference | GoogleContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issue_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.issueClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMasterAuthClientCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMasterAuthClientCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issueClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueClientCertificate = this._issueClientCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMasterAuthClientCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issueClientCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issueClientCertificate = value.issueClientCertificate;
    }
  }

  // issue_client_certificate - computed: false, optional: false, required: true
  private _issueClientCertificate?: boolean | cdktf.IResolvable; 
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
  }
  public set issueClientCertificate(value: boolean | cdktf.IResolvable) {
    this._issueClientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueClientCertificateInput() {
    return this._issueClientCertificate;
  }
}
export interface GoogleContainerClusterMasterAuth {
  /**
  * client_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#client_certificate_config GoogleContainerCluster#client_certificate_config}
  */
  readonly clientCertificateConfig: GoogleContainerClusterMasterAuthClientCertificateConfig;
}

export function googleContainerClusterMasterAuthToTerraform(struct?: GoogleContainerClusterMasterAuthOutputReference | GoogleContainerClusterMasterAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_config: googleContainerClusterMasterAuthClientCertificateConfigToTerraform(struct!.clientCertificateConfig),
  }
}


export function googleContainerClusterMasterAuthToHclTerraform(struct?: GoogleContainerClusterMasterAuthOutputReference | GoogleContainerClusterMasterAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_config: {
      value: googleContainerClusterMasterAuthClientCertificateConfigToHclTerraform(struct!.clientCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMasterAuthClientCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMasterAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMasterAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateConfig = this._clientCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMasterAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateConfig.internalValue = value.clientCertificateConfig;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // client_certificate_config - computed: false, optional: false, required: true
  private _clientCertificateConfig = new GoogleContainerClusterMasterAuthClientCertificateConfigOutputReference(this, "client_certificate_config");
  public get clientCertificateConfig() {
    return this._clientCertificateConfig;
  }
  public putClientCertificateConfig(value: GoogleContainerClusterMasterAuthClientCertificateConfig) {
    this._clientCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateConfigInput() {
    return this._clientCertificateConfig.internalValue;
  }
}
export interface GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks {
  /**
  * External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cidr_block GoogleContainerCluster#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Field for users to identify CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#display_name GoogleContainerCluster#display_name}
  */
  readonly displayName?: string;
}

export function googleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function googleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToHclTerraform(struct?: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._displayName = value.displayName;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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
}

export class GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference {
    return new GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterMasterAuthorizedNetworksConfig {
  /**
  * Whether master is accessbile via Google Compute Engine Public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gcp_public_cidrs_access_enabled GoogleContainerCluster#gcp_public_cidrs_access_enabled}
  */
  readonly gcpPublicCidrsAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * cidr_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cidr_blocks GoogleContainerCluster#cidr_blocks}
  */
  readonly cidrBlocks?: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable;
}

export function googleContainerClusterMasterAuthorizedNetworksConfigToTerraform(struct?: GoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference | GoogleContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_public_cidrs_access_enabled: cdktf.booleanToTerraform(struct!.gcpPublicCidrsAccessEnabled),
    cidr_blocks: cdktf.listMapper(googleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform, true)(struct!.cidrBlocks),
  }
}


export function googleContainerClusterMasterAuthorizedNetworksConfigToHclTerraform(struct?: GoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference | GoogleContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_public_cidrs_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gcpPublicCidrsAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cidr_blocks: {
      value: cdktf.listMapperHcl(googleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToHclTerraform, true)(struct!.cidrBlocks),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMasterAuthorizedNetworksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpPublicCidrsAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpPublicCidrsAccessEnabled = this._gcpPublicCidrsAccessEnabled;
    }
    if (this._cidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMasterAuthorizedNetworksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpPublicCidrsAccessEnabled = undefined;
      this._cidrBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpPublicCidrsAccessEnabled = value.gcpPublicCidrsAccessEnabled;
      this._cidrBlocks.internalValue = value.cidrBlocks;
    }
  }

  // gcp_public_cidrs_access_enabled - computed: true, optional: true, required: false
  private _gcpPublicCidrsAccessEnabled?: boolean | cdktf.IResolvable; 
  public get gcpPublicCidrsAccessEnabled() {
    return this.getBooleanAttribute('gcp_public_cidrs_access_enabled');
  }
  public set gcpPublicCidrsAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._gcpPublicCidrsAccessEnabled = value;
  }
  public resetGcpPublicCidrsAccessEnabled() {
    this._gcpPublicCidrsAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPublicCidrsAccessEnabledInput() {
    return this._gcpPublicCidrsAccessEnabled;
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks = new GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList(this, "cidr_blocks", true);
  public get cidrBlocks() {
    return this._cidrBlocks;
  }
  public putCidrBlocks(value: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable) {
    this._cidrBlocks.internalValue = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks.internalValue;
  }
}
export interface GoogleContainerClusterMeshCertificates {
  /**
  * When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_certificates GoogleContainerCluster#enable_certificates}
  */
  readonly enableCertificates: boolean | cdktf.IResolvable;
}

export function googleContainerClusterMeshCertificatesToTerraform(struct?: GoogleContainerClusterMeshCertificatesOutputReference | GoogleContainerClusterMeshCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_certificates: cdktf.booleanToTerraform(struct!.enableCertificates),
  }
}


export function googleContainerClusterMeshCertificatesToHclTerraform(struct?: GoogleContainerClusterMeshCertificatesOutputReference | GoogleContainerClusterMeshCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_certificates: {
      value: cdktf.booleanToHclTerraform(struct!.enableCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMeshCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMeshCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertificates = this._enableCertificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMeshCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCertificates = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCertificates = value.enableCertificates;
    }
  }

  // enable_certificates - computed: false, optional: false, required: true
  private _enableCertificates?: boolean | cdktf.IResolvable; 
  public get enableCertificates() {
    return this.getBooleanAttribute('enable_certificates');
  }
  public set enableCertificates(value: boolean | cdktf.IResolvable) {
    this._enableCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificatesInput() {
    return this._enableCertificates;
  }
}
export interface GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
  /**
  * Whether or not the advanced datapath metrics are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_metrics GoogleContainerCluster#enable_metrics}
  */
  readonly enableMetrics: boolean | cdktf.IResolvable;
  /**
  * Mode used to make Relay available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#relay_mode GoogleContainerCluster#relay_mode}
  */
  readonly relayMode?: string;
}

export function googleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToTerraform(struct?: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_metrics: cdktf.booleanToTerraform(struct!.enableMetrics),
    relay_mode: cdktf.stringToTerraform(struct!.relayMode),
  }
}


export function googleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToHclTerraform(struct?: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_mode: {
      value: cdktf.stringToHclTerraform(struct!.relayMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMetrics = this._enableMetrics;
    }
    if (this._relayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayMode = this._relayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMetrics = undefined;
      this._relayMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMetrics = value.enableMetrics;
      this._relayMode = value.relayMode;
    }
  }

  // enable_metrics - computed: false, optional: false, required: true
  private _enableMetrics?: boolean | cdktf.IResolvable; 
  public get enableMetrics() {
    return this.getBooleanAttribute('enable_metrics');
  }
  public set enableMetrics(value: boolean | cdktf.IResolvable) {
    this._enableMetrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMetricsInput() {
    return this._enableMetrics;
  }

  // relay_mode - computed: true, optional: true, required: false
  private _relayMode?: string; 
  public get relayMode() {
    return this.getStringAttribute('relay_mode');
  }
  public set relayMode(value: string) {
    this._relayMode = value;
  }
  public resetRelayMode() {
    this._relayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayModeInput() {
    return this._relayMode;
  }
}

export class GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference {
    return new GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterMonitoringConfigManagedPrometheus {
  /**
  * Whether or not the managed collection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterMonitoringConfigManagedPrometheusToTerraform(struct?: GoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference | GoogleContainerClusterMonitoringConfigManagedPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterMonitoringConfigManagedPrometheusToHclTerraform(struct?: GoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference | GoogleContainerClusterMonitoringConfigManagedPrometheus): any {
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

export class GoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMonitoringConfigManagedPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMonitoringConfigManagedPrometheus | undefined) {
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
export interface GoogleContainerClusterMonitoringConfig {
  /**
  * GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET and WORKLOADS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_components GoogleContainerCluster#enable_components}
  */
  readonly enableComponents?: string[];
  /**
  * advanced_datapath_observability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#advanced_datapath_observability_config GoogleContainerCluster#advanced_datapath_observability_config}
  */
  readonly advancedDatapathObservabilityConfig?: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig[] | cdktf.IResolvable;
  /**
  * managed_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#managed_prometheus GoogleContainerCluster#managed_prometheus}
  */
  readonly managedPrometheus?: GoogleContainerClusterMonitoringConfigManagedPrometheus;
}

export function googleContainerClusterMonitoringConfigToTerraform(struct?: GoogleContainerClusterMonitoringConfigOutputReference | GoogleContainerClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
    advanced_datapath_observability_config: cdktf.listMapper(googleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToTerraform, true)(struct!.advancedDatapathObservabilityConfig),
    managed_prometheus: googleContainerClusterMonitoringConfigManagedPrometheusToTerraform(struct!.managedPrometheus),
  }
}


export function googleContainerClusterMonitoringConfigToHclTerraform(struct?: GoogleContainerClusterMonitoringConfigOutputReference | GoogleContainerClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_datapath_observability_config: {
      value: cdktf.listMapperHcl(googleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToHclTerraform, true)(struct!.advancedDatapathObservabilityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigList",
    },
    managed_prometheus: {
      value: googleContainerClusterMonitoringConfigManagedPrometheusToHclTerraform(struct!.managedPrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMonitoringConfigManagedPrometheusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    if (this._advancedDatapathObservabilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDatapathObservabilityConfig = this._advancedDatapathObservabilityConfig?.internalValue;
    }
    if (this._managedPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPrometheus = this._managedPrometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
      this._advancedDatapathObservabilityConfig.internalValue = undefined;
      this._managedPrometheus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
      this._advancedDatapathObservabilityConfig.internalValue = value.advancedDatapathObservabilityConfig;
      this._managedPrometheus.internalValue = value.managedPrometheus;
    }
  }

  // enable_components - computed: true, optional: true, required: false
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  public resetEnableComponents() {
    this._enableComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }

  // advanced_datapath_observability_config - computed: false, optional: true, required: false
  private _advancedDatapathObservabilityConfig = new GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigList(this, "advanced_datapath_observability_config", false);
  public get advancedDatapathObservabilityConfig() {
    return this._advancedDatapathObservabilityConfig;
  }
  public putAdvancedDatapathObservabilityConfig(value: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig[] | cdktf.IResolvable) {
    this._advancedDatapathObservabilityConfig.internalValue = value;
  }
  public resetAdvancedDatapathObservabilityConfig() {
    this._advancedDatapathObservabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDatapathObservabilityConfigInput() {
    return this._advancedDatapathObservabilityConfig.internalValue;
  }

  // managed_prometheus - computed: false, optional: true, required: false
  private _managedPrometheus = new GoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference(this, "managed_prometheus");
  public get managedPrometheus() {
    return this._managedPrometheus;
  }
  public putManagedPrometheus(value: GoogleContainerClusterMonitoringConfigManagedPrometheus) {
    this._managedPrometheus.internalValue = value;
  }
  public resetManagedPrometheus() {
    this._managedPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrometheusInput() {
    return this._managedPrometheus.internalValue;
  }
}
export interface GoogleContainerClusterNetworkPolicy {
  /**
  * Whether network policy is enabled on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The selected network policy provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#provider GoogleContainerCluster#provider}
  */
  readonly provider?: string;
}

export function googleContainerClusterNetworkPolicyToTerraform(struct?: GoogleContainerClusterNetworkPolicyOutputReference | GoogleContainerClusterNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function googleContainerClusterNetworkPolicyToHclTerraform(struct?: GoogleContainerClusterNetworkPolicyOutputReference | GoogleContainerClusterNetworkPolicy): any {
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
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._provider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._provider = value.provider;
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

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface GoogleContainerClusterNodeConfigEffectiveTaints {
}

export function googleContainerClusterNodeConfigEffectiveTaintsToTerraform(struct?: GoogleContainerClusterNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerClusterNodeConfigEffectiveTaintsToHclTerraform(struct?: GoogleContainerClusterNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerClusterNodeConfigEffectiveTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigEffectiveTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class GoogleContainerClusterNodeConfigEffectiveTaintsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleContainerClusterNodeConfigEffectiveTaintsOutputReference {
    return new GoogleContainerClusterNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_driver_version GoogleContainerCluster#gpu_driver_version}
  */
  readonly gpuDriverVersion?: string;
}

export function googleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_driver_version: cdktf.stringToTerraform(struct!.gpuDriverVersion),
  }
}


export function googleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_driver_version: {
      value: cdktf.stringToHclTerraform(struct!.gpuDriverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gpuDriverVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gpuDriverVersion = value.gpuDriverVersion;
    }
  }

  // gpu_driver_version - computed: true, optional: true, required: false
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  public resetGpuDriverVersion() {
    this._gpuDriverVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference {
    return new GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_sharing_strategy GoogleContainerCluster#gpu_sharing_strategy}
  */
  readonly gpuSharingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_shared_clients_per_gpu GoogleContainerCluster#max_shared_clients_per_gpu}
  */
  readonly maxSharedClientsPerGpu?: number;
}

export function googleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_sharing_strategy: cdktf.stringToTerraform(struct!.gpuSharingStrategy),
    max_shared_clients_per_gpu: cdktf.numberToTerraform(struct!.maxSharedClientsPerGpu),
  }
}


export function googleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_sharing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.gpuSharingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_shared_clients_per_gpu: {
      value: cdktf.numberToHclTerraform(struct!.maxSharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuSharingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingStrategy = this._gpuSharingStrategy;
    }
    if (this._maxSharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharedClientsPerGpu = this._maxSharedClientsPerGpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gpuSharingStrategy = undefined;
      this._maxSharedClientsPerGpu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gpuSharingStrategy = value.gpuSharingStrategy;
      this._maxSharedClientsPerGpu = value.maxSharedClientsPerGpu;
    }
  }

  // gpu_sharing_strategy - computed: true, optional: true, required: false
  private _gpuSharingStrategy?: string; 
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }
  public set gpuSharingStrategy(value: string) {
    this._gpuSharingStrategy = value;
  }
  public resetGpuSharingStrategy() {
    this._gpuSharingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingStrategyInput() {
    return this._gpuSharingStrategy;
  }

  // max_shared_clients_per_gpu - computed: true, optional: true, required: false
  private _maxSharedClientsPerGpu?: number; 
  public get maxSharedClientsPerGpu() {
    return this.getNumberAttribute('max_shared_clients_per_gpu');
  }
  public set maxSharedClientsPerGpu(value: number) {
    this._maxSharedClientsPerGpu = value;
  }
  public resetMaxSharedClientsPerGpu() {
    this._maxSharedClientsPerGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharedClientsPerGpuInput() {
    return this._maxSharedClientsPerGpu;
  }
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference {
    return new GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigGuestAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#count GoogleContainerCluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_driver_installation_config GoogleContainerCluster#gpu_driver_installation_config}
  */
  readonly gpuDriverInstallationConfig?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_partition_size GoogleContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_sharing_config GoogleContainerCluster#gpu_sharing_config}
  */
  readonly gpuSharingConfig?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type?: string;
}

export function googleContainerClusterNodeConfigGuestAcceleratorToTerraform(struct?: GoogleContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_driver_installation_config: cdktf.listMapper(googleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform, false)(struct!.gpuDriverInstallationConfig),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    gpu_sharing_config: cdktf.listMapper(googleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToTerraform, false)(struct!.gpuSharingConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterNodeConfigGuestAcceleratorToHclTerraform(struct?: GoogleContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_driver_installation_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform, false)(struct!.gpuDriverInstallationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigList",
    },
    gpu_partition_size: {
      value: cdktf.stringToHclTerraform(struct!.gpuPartitionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_sharing_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform, false)(struct!.gpuSharingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigList",
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

export class GoogleContainerClusterNodeConfigGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuDriverInstallationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverInstallationConfig = this._gpuDriverInstallationConfig?.internalValue;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._gpuSharingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingConfig = this._gpuSharingConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuDriverInstallationConfig.internalValue = undefined;
      this._gpuPartitionSize = undefined;
      this._gpuSharingConfig.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuDriverInstallationConfig.internalValue = value.gpuDriverInstallationConfig;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._gpuSharingConfig.internalValue = value.gpuSharingConfig;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_driver_installation_config - computed: true, optional: true, required: false
  private _gpuDriverInstallationConfig = new GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigList(this, "gpu_driver_installation_config", false);
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }
  public putGpuDriverInstallationConfig(value: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig[] | cdktf.IResolvable) {
    this._gpuDriverInstallationConfig.internalValue = value;
  }
  public resetGpuDriverInstallationConfig() {
    this._gpuDriverInstallationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInstallationConfigInput() {
    return this._gpuDriverInstallationConfig.internalValue;
  }

  // gpu_partition_size - computed: true, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
  }

  // gpu_sharing_config - computed: true, optional: true, required: false
  private _gpuSharingConfig = new GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigList(this, "gpu_sharing_config", false);
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }
  public putGpuSharingConfig(value: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig[] | cdktf.IResolvable) {
    this._gpuSharingConfig.internalValue = value;
  }
  public resetGpuSharingConfig() {
    this._gpuSharingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingConfigInput() {
    return this._gpuSharingConfig.internalValue;
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
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodeConfigGuestAcceleratorOutputReference {
    return new GoogleContainerClusterNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigAdvancedMachineFeatures {
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#threads_per_core GoogleContainerCluster#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function googleContainerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct?: GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference | GoogleContainerClusterNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function googleContainerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference | GoogleContainerClusterNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface GoogleContainerClusterNodeConfigConfidentialNodes {
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodeConfigConfidentialNodesToTerraform(struct?: GoogleContainerClusterNodeConfigConfidentialNodesOutputReference | GoogleContainerClusterNodeConfigConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigConfidentialNodesToHclTerraform(struct?: GoogleContainerClusterNodeConfigConfidentialNodesOutputReference | GoogleContainerClusterNodeConfigConfidentialNodes): any {
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

export class GoogleContainerClusterNodeConfigConfidentialNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigConfidentialNodes | undefined) {
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
export interface GoogleContainerClusterNodeConfigEphemeralStorageConfig {
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodeConfigEphemeralStorageConfigToTerraform(struct?: GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerClusterNodeConfigEphemeralStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodeConfigEphemeralStorageConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerClusterNodeConfigEphemeralStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigEphemeralStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigEphemeralStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig {
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference | GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference | GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodeConfigFastSocket {
  /**
  * Whether or not NCCL Fast Socket is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodeConfigFastSocketToTerraform(struct?: GoogleContainerClusterNodeConfigFastSocketOutputReference | GoogleContainerClusterNodeConfigFastSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigFastSocketToHclTerraform(struct?: GoogleContainerClusterNodeConfigFastSocketOutputReference | GoogleContainerClusterNodeConfigFastSocket): any {
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

export class GoogleContainerClusterNodeConfigFastSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigFastSocket | undefined) {
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
export interface GoogleContainerClusterNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodeConfigGcfsConfigToTerraform(struct?: GoogleContainerClusterNodeConfigGcfsConfigOutputReference | GoogleContainerClusterNodeConfigGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigGcfsConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigGcfsConfigOutputReference | GoogleContainerClusterNodeConfigGcfsConfig): any {
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

export class GoogleContainerClusterNodeConfigGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGcfsConfig | undefined) {
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
export interface GoogleContainerClusterNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodeConfigGvnicToTerraform(struct?: GoogleContainerClusterNodeConfigGvnicOutputReference | GoogleContainerClusterNodeConfigGvnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigGvnicToHclTerraform(struct?: GoogleContainerClusterNodeConfigGvnicOutputReference | GoogleContainerClusterNodeConfigGvnic): any {
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

export class GoogleContainerClusterNodeConfigGvnicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGvnic | undefined) {
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
export interface GoogleContainerClusterNodeConfigHostMaintenancePolicy {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#maintenance_interval GoogleContainerCluster#maintenance_interval}
  */
  readonly maintenanceInterval: string;
}

export function googleContainerClusterNodeConfigHostMaintenancePolicyToTerraform(struct?: GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference | GoogleContainerClusterNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_interval: cdktf.stringToTerraform(struct!.maintenanceInterval),
  }
}


export function googleContainerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct?: GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference | GoogleContainerClusterNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_interval: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigHostMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceInterval = value.maintenanceInterval;
    }
  }

  // maintenance_interval - computed: false, optional: false, required: true
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }
}
export interface GoogleContainerClusterNodeConfigKubeletConfig {
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cpu_cfs_quota GoogleContainerCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cpu_cfs_quota_period GoogleContainerCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cpu_manager_policy GoogleContainerCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy: string;
  /**
  * Controls the maximum number of processes allowed to run in a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#pod_pids_limit GoogleContainerCluster#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
}

export function googleContainerClusterNodeConfigKubeletConfigToTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigOutputReference | GoogleContainerClusterNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    pod_pids_limit: cdktf.numberToTerraform(struct!.podPidsLimit),
  }
}


export function googleContainerClusterNodeConfigKubeletConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigOutputReference | GoogleContainerClusterNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_pids_limit: {
      value: cdktf.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._podPidsLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._podPidsLimit = value.podPidsLimit;
    }
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: false, required: true
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cgroup_mode GoogleContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#sysctls GoogleContainerCluster#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
}

export function googleContainerClusterNodeConfigLinuxNodeConfigToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktf.stringToTerraform(struct!.cgroupMode),
    sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sysctls),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktf.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sysctls),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._sysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._sysctls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._sysctls = value.sysctls;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }
}
export interface GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig {
  /**
  * Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct?: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference | GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference | GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#consume_reservation_type GoogleContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values?: string[];
}

export function googleContainerClusterNodeConfigReservationAffinityToTerraform(struct?: GoogleContainerClusterNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleContainerClusterNodeConfigReservationAffinityToHclTerraform(struct?: GoogleContainerClusterNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktf.stringToHclTerraform(struct!.consumeReservationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleContainerClusterNodeConfigSandboxConfig {
  /**
  * Type of the sandbox to use for the node (e.g. 'gvisor')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#sandbox_type GoogleContainerCluster#sandbox_type}
  */
  readonly sandboxType: string;
}

export function googleContainerClusterNodeConfigSandboxConfigToTerraform(struct?: GoogleContainerClusterNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sandbox_type: cdktf.stringToTerraform(struct!.sandboxType),
  }
}


export function googleContainerClusterNodeConfigSandboxConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sandbox_type: {
      value: cdktf.stringToHclTerraform(struct!.sandboxType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSandboxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigSandboxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sandboxType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxType = this._sandboxType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSandboxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sandboxType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sandboxType = value.sandboxType;
    }
  }

  // sandbox_type - computed: false, optional: false, required: true
  private _sandboxType?: string; 
  public get sandboxType() {
    return this.getStringAttribute('sandbox_type');
  }
  public set sandboxType(value: string) {
    this._sandboxType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxTypeInput() {
    return this._sandboxType;
  }
}
export interface GoogleContainerClusterNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_integrity_monitoring GoogleContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_secure_boot GoogleContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodeConfigShieldedInstanceConfigToTerraform(struct?: GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function googleContainerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#operator GoogleContainerCluster#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values: string[];
}

export function googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigSoleTenantConfig {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_affinity GoogleContainerCluster#node_affinity}
  */
  readonly nodeAffinity: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable;
}

export function googleContainerClusterNodeConfigSoleTenantConfigToTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.listMapper(googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function googleContainerClusterNodeConfigSoleTenantConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
    }
  }

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity = new GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface GoogleContainerClusterNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#effect GoogleContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#value GoogleContainerCluster#value}
  */
  readonly value: string;
}

export function googleContainerClusterNodeConfigTaintToTerraform(struct?: GoogleContainerClusterNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleContainerClusterNodeConfigTaintToHclTerraform(struct?: GoogleContainerClusterNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleContainerClusterNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleContainerClusterNodeConfigTaintList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigTaint[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodeConfigTaintOutputReference {
    return new GoogleContainerClusterNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode: string;
}

export function googleContainerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct?: GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodeConfigWorkloadMetadataConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
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
}
export interface GoogleContainerClusterNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#boot_disk_kms_key GoogleContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disk_size_gb GoogleContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_confidential_storage GoogleContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktf.IResolvable;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#guest_accelerator GoogleContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: GoogleContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#image_type GoogleContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#labels GoogleContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#machine_type GoogleContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#metadata GoogleContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#min_cpu_platform GoogleContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_group GoogleContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#oauth_scopes GoogleContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#preemptible GoogleContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#resource_labels GoogleContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#service_account GoogleContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#spot GoogleContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#advanced_machine_features GoogleContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleContainerClusterNodeConfigAdvancedMachineFeatures;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#confidential_nodes GoogleContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: GoogleContainerClusterNodeConfigConfidentialNodes;
  /**
  * ephemeral_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#ephemeral_storage_config GoogleContainerCluster#ephemeral_storage_config}
  */
  readonly ephemeralStorageConfig?: GoogleContainerClusterNodeConfigEphemeralStorageConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#ephemeral_storage_local_ssd_config GoogleContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#fast_socket GoogleContainerCluster#fast_socket}
  */
  readonly fastSocket?: GoogleContainerClusterNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodeConfigGcfsConfig;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gvnic GoogleContainerCluster#gvnic}
  */
  readonly gvnic?: GoogleContainerClusterNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#host_maintenance_policy GoogleContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: GoogleContainerClusterNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#kubelet_config GoogleContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: GoogleContainerClusterNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#linux_node_config GoogleContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerClusterNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_nvme_ssd_block_config GoogleContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#reservation_affinity GoogleContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleContainerClusterNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#sandbox_config GoogleContainerCluster#sandbox_config}
  */
  readonly sandboxConfig?: GoogleContainerClusterNodeConfigSandboxConfig;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#shielded_instance_config GoogleContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerClusterNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#sole_tenant_config GoogleContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: GoogleContainerClusterNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#taint GoogleContainerCluster#taint}
  */
  readonly taint?: GoogleContainerClusterNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#workload_metadata_config GoogleContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: GoogleContainerClusterNodeConfigWorkloadMetadataConfig;
}

export function googleContainerClusterNodeConfigToTerraform(struct?: GoogleContainerClusterNodeConfigOutputReference | GoogleContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktf.booleanToTerraform(struct!.enableConfidentialStorage),
    guest_accelerator: cdktf.listMapper(googleContainerClusterNodeConfigGuestAcceleratorToTerraform, false)(struct!.guestAccelerator),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: googleContainerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    confidential_nodes: googleContainerClusterNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    ephemeral_storage_config: googleContainerClusterNodeConfigEphemeralStorageConfigToTerraform(struct!.ephemeralStorageConfig),
    ephemeral_storage_local_ssd_config: googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: googleContainerClusterNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: googleContainerClusterNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    gvnic: googleContainerClusterNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: googleContainerClusterNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: googleContainerClusterNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: googleContainerClusterNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    reservation_affinity: googleContainerClusterNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: googleContainerClusterNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    shielded_instance_config: googleContainerClusterNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: googleContainerClusterNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktf.listMapper(googleContainerClusterNodeConfigTaintToTerraform, true)(struct!.taint),
    workload_metadata_config: googleContainerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function googleContainerClusterNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigOutputReference | GoogleContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    guest_accelerator: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigGuestAcceleratorToHclTerraform, false)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGuestAcceleratorList",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: googleContainerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigAdvancedMachineFeaturesList",
    },
    confidential_nodes: {
      value: googleContainerClusterNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigConfidentialNodesList",
    },
    ephemeral_storage_config: {
      value: googleContainerClusterNodeConfigEphemeralStorageConfigToHclTerraform(struct!.ephemeralStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigEphemeralStorageConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: googleContainerClusterNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: googleContainerClusterNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGcfsConfigList",
    },
    gvnic: {
      value: googleContainerClusterNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: googleContainerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: googleContainerClusterNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigList",
    },
    reservation_affinity: {
      value: googleContainerClusterNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: googleContainerClusterNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigSandboxConfigList",
    },
    shielded_instance_config: {
      value: googleContainerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: googleContainerClusterNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigTaintList",
    },
    workload_metadata_config: {
      value: googleContainerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._ephemeralStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageConfig = this._ephemeralStorageConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._sandboxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxConfig = this._sandboxConfig?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._ephemeralStorageConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._ephemeralStorageConfig.internalValue = value.ephemeralStorageConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new GoogleContainerClusterNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktf.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator = new GoogleContainerClusterNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: GoogleContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
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

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleContainerClusterNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new GoogleContainerClusterNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: GoogleContainerClusterNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // ephemeral_storage_config - computed: false, optional: true, required: false
  private _ephemeralStorageConfig = new GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference(this, "ephemeral_storage_config");
  public get ephemeralStorageConfig() {
    return this._ephemeralStorageConfig;
  }
  public putEphemeralStorageConfig(value: GoogleContainerClusterNodeConfigEphemeralStorageConfig) {
    this._ephemeralStorageConfig.internalValue = value;
  }
  public resetEphemeralStorageConfig() {
    this._ephemeralStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageConfigInput() {
    return this._ephemeralStorageConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new GoogleContainerClusterNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: GoogleContainerClusterNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new GoogleContainerClusterNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: GoogleContainerClusterNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: GoogleContainerClusterNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new GoogleContainerClusterNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: GoogleContainerClusterNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerClusterNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleContainerClusterNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleContainerClusterNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // sandbox_config - computed: false, optional: true, required: false
  private _sandboxConfig = new GoogleContainerClusterNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: GoogleContainerClusterNodeConfigSandboxConfig) {
    this._sandboxConfig.internalValue = value;
  }
  public resetSandboxConfig() {
    this._sandboxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxConfigInput() {
    return this._sandboxConfig.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerClusterNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: GoogleContainerClusterNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new GoogleContainerClusterNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: GoogleContainerClusterNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: GoogleContainerClusterNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolAutoscaling {
  /**
  * Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#location_policy GoogleContainerCluster#location_policy}
  */
  readonly locationPolicy?: string;
  /**
  * Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_node_count GoogleContainerCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#min_node_count GoogleContainerCluster#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#total_max_node_count GoogleContainerCluster#total_max_node_count}
  */
  readonly totalMaxNodeCount?: number;
  /**
  * Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#total_min_node_count GoogleContainerCluster#total_min_node_count}
  */
  readonly totalMinNodeCount?: number;
}

export function googleContainerClusterNodePoolAutoscalingToTerraform(struct?: GoogleContainerClusterNodePoolAutoscalingOutputReference | GoogleContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_policy: cdktf.stringToTerraform(struct!.locationPolicy),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    total_max_node_count: cdktf.numberToTerraform(struct!.totalMaxNodeCount),
    total_min_node_count: cdktf.numberToTerraform(struct!.totalMinNodeCount),
  }
}


export function googleContainerClusterNodePoolAutoscalingToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoscalingOutputReference | GoogleContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_policy: {
      value: cdktf.stringToHclTerraform(struct!.locationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    total_max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.totalMaxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.totalMinNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPolicy = this._locationPolicy;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._totalMaxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxNodeCount = this._totalMaxNodeCount;
    }
    if (this._totalMinNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMinNodeCount = this._totalMinNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationPolicy = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._totalMaxNodeCount = undefined;
      this._totalMinNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationPolicy = value.locationPolicy;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._totalMaxNodeCount = value.totalMaxNodeCount;
      this._totalMinNodeCount = value.totalMinNodeCount;
    }
  }

  // location_policy - computed: true, optional: true, required: false
  private _locationPolicy?: string; 
  public get locationPolicy() {
    return this.getStringAttribute('location_policy');
  }
  public set locationPolicy(value: string) {
    this._locationPolicy = value;
  }
  public resetLocationPolicy() {
    this._locationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPolicyInput() {
    return this._locationPolicy;
  }

  // max_node_count - computed: false, optional: true, required: false
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

  // min_node_count - computed: false, optional: true, required: false
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

  // total_max_node_count - computed: false, optional: true, required: false
  private _totalMaxNodeCount?: number; 
  public get totalMaxNodeCount() {
    return this.getNumberAttribute('total_max_node_count');
  }
  public set totalMaxNodeCount(value: number) {
    this._totalMaxNodeCount = value;
  }
  public resetTotalMaxNodeCount() {
    this._totalMaxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxNodeCountInput() {
    return this._totalMaxNodeCount;
  }

  // total_min_node_count - computed: false, optional: true, required: false
  private _totalMinNodeCount?: number; 
  public get totalMinNodeCount() {
    return this.getNumberAttribute('total_min_node_count');
  }
  public set totalMinNodeCount(value: number) {
    this._totalMinNodeCount = value;
  }
  public resetTotalMinNodeCount() {
    this._totalMinNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMinNodeCountInput() {
    return this._totalMinNodeCount;
  }
}
export interface GoogleContainerClusterNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#auto_repair GoogleContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#auto_upgrade GoogleContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolManagementToTerraform(struct?: GoogleContainerClusterNodePoolManagementOutputReference | GoogleContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function googleContainerClusterNodePoolManagementToHclTerraform(struct?: GoogleContainerClusterNodePoolManagementOutputReference | GoogleContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktf.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: false, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs {
  /**
  * Name of the VPC where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#network GoogleContainerCluster#network}
  */
  readonly network?: string;
  /**
  * Name of the subnetwork where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#subnetwork GoogleContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}

export class GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference {
    return new GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs {
  /**
  * The maximum number of pods per node which use this pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_pods_per_node GoogleContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the secondary range on the subnet which provides IP address for this pod range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#secondary_pod_range GoogleContainerCluster#secondary_pod_range}
  */
  readonly secondaryPodRange?: string;
  /**
  * Name of the subnetwork where the additional pod network belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#subnetwork GoogleContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    secondary_pod_range: cdktf.stringToTerraform(struct!.secondaryPodRange),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_pod_range: {
      value: cdktf.stringToHclTerraform(struct!.secondaryPodRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._secondaryPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPodRange = this._secondaryPodRange;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPodsPerNode = undefined;
      this._secondaryPodRange = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._secondaryPodRange = value.secondaryPodRange;
      this._subnetwork = value.subnetwork;
    }
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // secondary_pod_range - computed: false, optional: true, required: false
  private _secondaryPodRange?: string; 
  public get secondaryPodRange() {
    return this.getStringAttribute('secondary_pod_range');
  }
  public set secondaryPodRange(value: string) {
    this._secondaryPodRange = value;
  }
  public resetSecondaryPodRange() {
    this._secondaryPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPodRangeInput() {
    return this._secondaryPodRange;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}

export class GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference {
    return new GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig {
  /**
  * Specifies the total network bandwidth tier for the NodePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#total_egress_bandwidth_tier GoogleContainerCluster#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function googleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktf.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function googleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_egress_bandwidth_tier: {
      value: cdktf.stringToHclTerraform(struct!.totalEgressBandwidthTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: false, required: true
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfig {
  /**
  * Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#create_pod_range GoogleContainerCluster#create_pod_range}
  */
  readonly createPodRange?: boolean | cdktf.IResolvable;
  /**
  * Whether nodes have internal IP addresses only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_private_nodes GoogleContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#pod_ipv4_cidr_block GoogleContainerCluster#pod_ipv4_cidr_block}
  */
  readonly podIpv4CidrBlock?: string;
  /**
  * The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#pod_range GoogleContainerCluster#pod_range}
  */
  readonly podRange?: string;
  /**
  * additional_node_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#additional_node_network_configs GoogleContainerCluster#additional_node_network_configs}
  */
  readonly additionalNodeNetworkConfigs?: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable;
  /**
  * additional_pod_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#additional_pod_network_configs GoogleContainerCluster#additional_pod_network_configs}
  */
  readonly additionalPodNetworkConfigs?: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#network_performance_config GoogleContainerCluster#network_performance_config}
  */
  readonly networkPerformanceConfig?: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig;
  /**
  * pod_cidr_overprovision_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#pod_cidr_overprovision_config GoogleContainerCluster#pod_cidr_overprovision_config}
  */
  readonly podCidrOverprovisionConfig?: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig;
}

export function googleContainerClusterNodePoolNetworkConfigToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_pod_range: cdktf.booleanToTerraform(struct!.createPodRange),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    pod_ipv4_cidr_block: cdktf.stringToTerraform(struct!.podIpv4CidrBlock),
    pod_range: cdktf.stringToTerraform(struct!.podRange),
    additional_node_network_configs: cdktf.listMapper(googleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform, true)(struct!.additionalNodeNetworkConfigs),
    additional_pod_network_configs: cdktf.listMapper(googleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform, true)(struct!.additionalPodNetworkConfigs),
    network_performance_config: googleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct!.networkPerformanceConfig),
    pod_cidr_overprovision_config: googleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct!.podCidrOverprovisionConfig),
  }
}


export function googleContainerClusterNodePoolNetworkConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_pod_range: {
      value: cdktf.booleanToHclTerraform(struct!.createPodRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.podIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_range: {
      value: cdktf.stringToHclTerraform(struct!.podRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_node_network_configs: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform, true)(struct!.additionalNodeNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList",
    },
    additional_pod_network_configs: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform, true)(struct!.additionalPodNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList",
    },
    network_performance_config: {
      value: googleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct!.networkPerformanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigList",
    },
    pod_cidr_overprovision_config: {
      value: googleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct!.podCidrOverprovisionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPodRange = this._createPodRange;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._podIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpv4CidrBlock = this._podIpv4CidrBlock;
    }
    if (this._podRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRange = this._podRange;
    }
    if (this._additionalNodeNetworkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalNodeNetworkConfigs = this._additionalNodeNetworkConfigs?.internalValue;
    }
    if (this._additionalPodNetworkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPodNetworkConfigs = this._additionalPodNetworkConfigs?.internalValue;
    }
    if (this._networkPerformanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPerformanceConfig = this._networkPerformanceConfig?.internalValue;
    }
    if (this._podCidrOverprovisionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrOverprovisionConfig = this._podCidrOverprovisionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createPodRange = undefined;
      this._enablePrivateNodes = undefined;
      this._podIpv4CidrBlock = undefined;
      this._podRange = undefined;
      this._additionalNodeNetworkConfigs.internalValue = undefined;
      this._additionalPodNetworkConfigs.internalValue = undefined;
      this._networkPerformanceConfig.internalValue = undefined;
      this._podCidrOverprovisionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createPodRange = value.createPodRange;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._podIpv4CidrBlock = value.podIpv4CidrBlock;
      this._podRange = value.podRange;
      this._additionalNodeNetworkConfigs.internalValue = value.additionalNodeNetworkConfigs;
      this._additionalPodNetworkConfigs.internalValue = value.additionalPodNetworkConfigs;
      this._networkPerformanceConfig.internalValue = value.networkPerformanceConfig;
      this._podCidrOverprovisionConfig.internalValue = value.podCidrOverprovisionConfig;
    }
  }

  // create_pod_range - computed: false, optional: true, required: false
  private _createPodRange?: boolean | cdktf.IResolvable; 
  public get createPodRange() {
    return this.getBooleanAttribute('create_pod_range');
  }
  public set createPodRange(value: boolean | cdktf.IResolvable) {
    this._createPodRange = value;
  }
  public resetCreatePodRange() {
    this._createPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPodRangeInput() {
    return this._createPodRange;
  }

  // enable_private_nodes - computed: true, optional: true, required: false
  private _enablePrivateNodes?: boolean | cdktf.IResolvable; 
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }
  public set enablePrivateNodes(value: boolean | cdktf.IResolvable) {
    this._enablePrivateNodes = value;
  }
  public resetEnablePrivateNodes() {
    this._enablePrivateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNodesInput() {
    return this._enablePrivateNodes;
  }

  // pod_ipv4_cidr_block - computed: true, optional: true, required: false
  private _podIpv4CidrBlock?: string; 
  public get podIpv4CidrBlock() {
    return this.getStringAttribute('pod_ipv4_cidr_block');
  }
  public set podIpv4CidrBlock(value: string) {
    this._podIpv4CidrBlock = value;
  }
  public resetPodIpv4CidrBlock() {
    this._podIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpv4CidrBlockInput() {
    return this._podIpv4CidrBlock;
  }

  // pod_range - computed: true, optional: true, required: false
  private _podRange?: string; 
  public get podRange() {
    return this.getStringAttribute('pod_range');
  }
  public set podRange(value: string) {
    this._podRange = value;
  }
  public resetPodRange() {
    this._podRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podRangeInput() {
    return this._podRange;
  }

  // additional_node_network_configs - computed: false, optional: true, required: false
  private _additionalNodeNetworkConfigs = new GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList(this, "additional_node_network_configs", false);
  public get additionalNodeNetworkConfigs() {
    return this._additionalNodeNetworkConfigs;
  }
  public putAdditionalNodeNetworkConfigs(value: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable) {
    this._additionalNodeNetworkConfigs.internalValue = value;
  }
  public resetAdditionalNodeNetworkConfigs() {
    this._additionalNodeNetworkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNodeNetworkConfigsInput() {
    return this._additionalNodeNetworkConfigs.internalValue;
  }

  // additional_pod_network_configs - computed: false, optional: true, required: false
  private _additionalPodNetworkConfigs = new GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList(this, "additional_pod_network_configs", false);
  public get additionalPodNetworkConfigs() {
    return this._additionalPodNetworkConfigs;
  }
  public putAdditionalPodNetworkConfigs(value: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable) {
    this._additionalPodNetworkConfigs.internalValue = value;
  }
  public resetAdditionalPodNetworkConfigs() {
    this._additionalPodNetworkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPodNetworkConfigsInput() {
    return this._additionalPodNetworkConfigs.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // pod_cidr_overprovision_config - computed: false, optional: true, required: false
  private _podCidrOverprovisionConfig = new GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference(this, "pod_cidr_overprovision_config");
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }
  public putPodCidrOverprovisionConfig(value: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig) {
    this._podCidrOverprovisionConfig.internalValue = value;
  }
  public resetPodCidrOverprovisionConfig() {
    this._podCidrOverprovisionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrOverprovisionConfigInput() {
    return this._podCidrOverprovisionConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigEffectiveTaints {
}

export function googleContainerClusterNodePoolNodeConfigEffectiveTaintsToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerClusterNodePoolNodeConfigEffectiveTaintsToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigEffectiveTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_driver_version GoogleContainerCluster#gpu_driver_version}
  */
  readonly gpuDriverVersion?: string;
}

export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_driver_version: cdktf.stringToTerraform(struct!.gpuDriverVersion),
  }
}


export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_driver_version: {
      value: cdktf.stringToHclTerraform(struct!.gpuDriverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gpuDriverVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gpuDriverVersion = value.gpuDriverVersion;
    }
  }

  // gpu_driver_version - computed: true, optional: true, required: false
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  public resetGpuDriverVersion() {
    this._gpuDriverVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_sharing_strategy GoogleContainerCluster#gpu_sharing_strategy}
  */
  readonly gpuSharingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_shared_clients_per_gpu GoogleContainerCluster#max_shared_clients_per_gpu}
  */
  readonly maxSharedClientsPerGpu?: number;
}

export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_sharing_strategy: cdktf.stringToTerraform(struct!.gpuSharingStrategy),
    max_shared_clients_per_gpu: cdktf.numberToTerraform(struct!.maxSharedClientsPerGpu),
  }
}


export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_sharing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.gpuSharingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_shared_clients_per_gpu: {
      value: cdktf.numberToHclTerraform(struct!.maxSharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuSharingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingStrategy = this._gpuSharingStrategy;
    }
    if (this._maxSharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharedClientsPerGpu = this._maxSharedClientsPerGpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gpuSharingStrategy = undefined;
      this._maxSharedClientsPerGpu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gpuSharingStrategy = value.gpuSharingStrategy;
      this._maxSharedClientsPerGpu = value.maxSharedClientsPerGpu;
    }
  }

  // gpu_sharing_strategy - computed: true, optional: true, required: false
  private _gpuSharingStrategy?: string; 
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }
  public set gpuSharingStrategy(value: string) {
    this._gpuSharingStrategy = value;
  }
  public resetGpuSharingStrategy() {
    this._gpuSharingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingStrategyInput() {
    return this._gpuSharingStrategy;
  }

  // max_shared_clients_per_gpu - computed: true, optional: true, required: false
  private _maxSharedClientsPerGpu?: number; 
  public get maxSharedClientsPerGpu() {
    return this.getNumberAttribute('max_shared_clients_per_gpu');
  }
  public set maxSharedClientsPerGpu(value: number) {
    this._maxSharedClientsPerGpu = value;
  }
  public resetMaxSharedClientsPerGpu() {
    this._maxSharedClientsPerGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharedClientsPerGpuInput() {
    return this._maxSharedClientsPerGpu;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigGuestAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#count GoogleContainerCluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_driver_installation_config GoogleContainerCluster#gpu_driver_installation_config}
  */
  readonly gpuDriverInstallationConfig?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_partition_size GoogleContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gpu_sharing_config GoogleContainerCluster#gpu_sharing_config}
  */
  readonly gpuSharingConfig?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type?: string;
}

export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_driver_installation_config: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform, false)(struct!.gpuDriverInstallationConfig),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    gpu_sharing_config: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform, false)(struct!.gpuSharingConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_driver_installation_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform, false)(struct!.gpuDriverInstallationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList",
    },
    gpu_partition_size: {
      value: cdktf.stringToHclTerraform(struct!.gpuPartitionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_sharing_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform, false)(struct!.gpuSharingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList",
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

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuDriverInstallationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverInstallationConfig = this._gpuDriverInstallationConfig?.internalValue;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._gpuSharingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingConfig = this._gpuSharingConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuDriverInstallationConfig.internalValue = undefined;
      this._gpuPartitionSize = undefined;
      this._gpuSharingConfig.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuDriverInstallationConfig.internalValue = value.gpuDriverInstallationConfig;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._gpuSharingConfig.internalValue = value.gpuSharingConfig;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_driver_installation_config - computed: true, optional: true, required: false
  private _gpuDriverInstallationConfig = new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList(this, "gpu_driver_installation_config", false);
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }
  public putGpuDriverInstallationConfig(value: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig[] | cdktf.IResolvable) {
    this._gpuDriverInstallationConfig.internalValue = value;
  }
  public resetGpuDriverInstallationConfig() {
    this._gpuDriverInstallationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInstallationConfigInput() {
    return this._gpuDriverInstallationConfig.internalValue;
  }

  // gpu_partition_size - computed: true, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
  }

  // gpu_sharing_config - computed: true, optional: true, required: false
  private _gpuSharingConfig = new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList(this, "gpu_sharing_config", false);
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }
  public putGpuSharingConfig(value: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig[] | cdktf.IResolvable) {
    this._gpuSharingConfig.internalValue = value;
  }
  public resetGpuSharingConfig() {
    this._gpuSharingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingConfigInput() {
    return this._gpuSharingConfig.internalValue;
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
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures {
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#threads_per_core GoogleContainerCluster#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigConfidentialNodes {
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference | GoogleContainerClusterNodePoolNodeConfigConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference | GoogleContainerClusterNodePoolNodeConfigConfidentialNodes): any {
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

export class GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigConfidentialNodes | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig {
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig {
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigFastSocket {
  /**
  * Whether or not NCCL Fast Socket is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigFastSocketToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference | GoogleContainerClusterNodePoolNodeConfigFastSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference | GoogleContainerClusterNodePoolNodeConfigFastSocket): any {
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

export class GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigFastSocket | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigGcfsConfig): any {
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

export class GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGcfsConfig | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigGvnicToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference | GoogleContainerClusterNodePoolNodeConfigGvnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigGvnicToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference | GoogleContainerClusterNodePoolNodeConfigGvnic): any {
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

export class GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGvnic | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#maintenance_interval GoogleContainerCluster#maintenance_interval}
  */
  readonly maintenanceInterval: string;
}

export function googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference | GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_interval: cdktf.stringToTerraform(struct!.maintenanceInterval),
  }
}


export function googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference | GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_interval: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceInterval = value.maintenanceInterval;
    }
  }

  // maintenance_interval - computed: false, optional: false, required: true
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigKubeletConfig {
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cpu_cfs_quota GoogleContainerCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cpu_cfs_quota_period GoogleContainerCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cpu_manager_policy GoogleContainerCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy: string;
  /**
  * Controls the maximum number of processes allowed to run in a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#pod_pids_limit GoogleContainerCluster#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
}

export function googleContainerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    pod_pids_limit: cdktf.numberToTerraform(struct!.podPidsLimit),
  }
}


export function googleContainerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_pids_limit: {
      value: cdktf.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._podPidsLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._podPidsLimit = value.podPidsLimit;
    }
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: false, required: true
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#cgroup_mode GoogleContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#sysctls GoogleContainerCluster#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktf.stringToTerraform(struct!.cgroupMode),
    sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sysctls),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktf.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sysctls),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._sysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._sysctls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._sysctls = value.sysctls;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig {
  /**
  * Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#consume_reservation_type GoogleContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values?: string[];
}

export function googleContainerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodePoolNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleContainerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodePoolNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktf.stringToHclTerraform(struct!.consumeReservationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigSandboxConfig {
  /**
  * Type of the sandbox to use for the node (e.g. 'gvisor')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#sandbox_type GoogleContainerCluster#sandbox_type}
  */
  readonly sandboxType: string;
}

export function googleContainerClusterNodePoolNodeConfigSandboxConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sandbox_type: cdktf.stringToTerraform(struct!.sandboxType),
  }
}


export function googleContainerClusterNodePoolNodeConfigSandboxConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sandbox_type: {
      value: cdktf.stringToHclTerraform(struct!.sandboxType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigSandboxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sandboxType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxType = this._sandboxType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigSandboxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sandboxType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sandboxType = value.sandboxType;
    }
  }

  // sandbox_type - computed: false, optional: false, required: true
  private _sandboxType?: string; 
  public get sandboxType() {
    return this.getStringAttribute('sandbox_type');
  }
  public set sandboxType(value: string) {
    this._sandboxType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxTypeInput() {
    return this._sandboxType;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_integrity_monitoring GoogleContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_secure_boot GoogleContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#operator GoogleContainerCluster#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values: string[];
}

export function googleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_affinity GoogleContainerCluster#node_affinity}
  */
  readonly nodeAffinity: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function googleContainerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
    }
  }

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity = new GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#effect GoogleContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#value GoogleContainerCluster#value}
  */
  readonly value: string;
}

export function googleContainerClusterNodePoolNodeConfigTaintToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleContainerClusterNodePoolNodeConfigTaintToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleContainerClusterNodePoolNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigTaintList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigTaintOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode: string;
}

export function googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
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
}
export interface GoogleContainerClusterNodePoolNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#boot_disk_kms_key GoogleContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disk_size_gb GoogleContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_confidential_storage GoogleContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktf.IResolvable;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#guest_accelerator GoogleContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#image_type GoogleContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#labels GoogleContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#machine_type GoogleContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#metadata GoogleContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#min_cpu_platform GoogleContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_group GoogleContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#oauth_scopes GoogleContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#preemptible GoogleContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#resource_labels GoogleContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#service_account GoogleContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#spot GoogleContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#advanced_machine_features GoogleContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#confidential_nodes GoogleContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: GoogleContainerClusterNodePoolNodeConfigConfidentialNodes;
  /**
  * ephemeral_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#ephemeral_storage_config GoogleContainerCluster#ephemeral_storage_config}
  */
  readonly ephemeralStorageConfig?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#ephemeral_storage_local_ssd_config GoogleContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#fast_socket GoogleContainerCluster#fast_socket}
  */
  readonly fastSocket?: GoogleContainerClusterNodePoolNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodePoolNodeConfigGcfsConfig;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gvnic GoogleContainerCluster#gvnic}
  */
  readonly gvnic?: GoogleContainerClusterNodePoolNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#host_maintenance_policy GoogleContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#kubelet_config GoogleContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: GoogleContainerClusterNodePoolNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#linux_node_config GoogleContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#local_nvme_ssd_block_config GoogleContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#reservation_affinity GoogleContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleContainerClusterNodePoolNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#sandbox_config GoogleContainerCluster#sandbox_config}
  */
  readonly sandboxConfig?: GoogleContainerClusterNodePoolNodeConfigSandboxConfig;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#shielded_instance_config GoogleContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#sole_tenant_config GoogleContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#taint GoogleContainerCluster#taint}
  */
  readonly taint?: GoogleContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#workload_metadata_config GoogleContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig;
}

export function googleContainerClusterNodePoolNodeConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktf.booleanToTerraform(struct!.enableConfidentialStorage),
    guest_accelerator: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigGuestAcceleratorToTerraform, false)(struct!.guestAccelerator),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    confidential_nodes: googleContainerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    ephemeral_storage_config: googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToTerraform(struct!.ephemeralStorageConfig),
    ephemeral_storage_local_ssd_config: googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: googleContainerClusterNodePoolNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: googleContainerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    gvnic: googleContainerClusterNodePoolNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: googleContainerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    reservation_affinity: googleContainerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: googleContainerClusterNodePoolNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    shielded_instance_config: googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: googleContainerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigTaintToTerraform, true)(struct!.taint),
    workload_metadata_config: googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function googleContainerClusterNodePoolNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    guest_accelerator: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform, false)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesList",
    },
    confidential_nodes: {
      value: googleContainerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigConfidentialNodesList",
    },
    ephemeral_storage_config: {
      value: googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToHclTerraform(struct!.ephemeralStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: googleContainerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: googleContainerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGcfsConfigList",
    },
    gvnic: {
      value: googleContainerClusterNodePoolNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigList",
    },
    reservation_affinity: {
      value: googleContainerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: googleContainerClusterNodePoolNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSandboxConfigList",
    },
    shielded_instance_config: {
      value: googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: googleContainerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigTaintList",
    },
    workload_metadata_config: {
      value: googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._ephemeralStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageConfig = this._ephemeralStorageConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._sandboxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxConfig = this._sandboxConfig?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._ephemeralStorageConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._ephemeralStorageConfig.internalValue = value.ephemeralStorageConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktf.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator = new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
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

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: GoogleContainerClusterNodePoolNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // ephemeral_storage_config - computed: false, optional: true, required: false
  private _ephemeralStorageConfig = new GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference(this, "ephemeral_storage_config");
  public get ephemeralStorageConfig() {
    return this._ephemeralStorageConfig;
  }
  public putEphemeralStorageConfig(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig) {
    this._ephemeralStorageConfig.internalValue = value;
  }
  public resetEphemeralStorageConfig() {
    this._ephemeralStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageConfigInput() {
    return this._ephemeralStorageConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: GoogleContainerClusterNodePoolNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodePoolNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: GoogleContainerClusterNodePoolNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleContainerClusterNodePoolNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // sandbox_config - computed: false, optional: true, required: false
  private _sandboxConfig = new GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: GoogleContainerClusterNodePoolNodeConfigSandboxConfig) {
    this._sandboxConfig.internalValue = value;
  }
  public resetSandboxConfig() {
    this._sandboxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxConfigInput() {
    return this._sandboxConfig.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new GoogleContainerClusterNodePoolNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: GoogleContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolPlacementPolicy {
  /**
  * If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#policy_name GoogleContainerCluster#policy_name}
  */
  readonly policyName?: string;
  /**
  * TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#tpu_topology GoogleContainerCluster#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * Type defines the type of placement policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type: string;
}

export function googleContainerClusterNodePoolPlacementPolicyToTerraform(struct?: GoogleContainerClusterNodePoolPlacementPolicyOutputReference | GoogleContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    tpu_topology: cdktf.stringToTerraform(struct!.tpuTopology),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterNodePoolPlacementPolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolPlacementPolicyOutputReference | GoogleContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpu_topology: {
      value: cdktf.stringToHclTerraform(struct!.tpuTopology),
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

export class GoogleContainerClusterNodePoolPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._tpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpuTopology = this._tpuTopology;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
      this._tpuTopology = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
      this._tpuTopology = value.tpuTopology;
      this._type = value.type;
    }
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // tpu_topology - computed: false, optional: true, required: false
  private _tpuTopology?: string; 
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }
  public set tpuTopology(value: string) {
    this._tpuTopology = value;
  }
  public resetTpuTopology() {
    this._tpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuTopologyInput() {
    return this._tpuTopology;
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
export interface GoogleContainerClusterNodePoolQueuedProvisioning {
  /**
  * Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolQueuedProvisioningToTerraform(struct?: GoogleContainerClusterNodePoolQueuedProvisioningOutputReference | GoogleContainerClusterNodePoolQueuedProvisioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolQueuedProvisioningToHclTerraform(struct?: GoogleContainerClusterNodePoolQueuedProvisioningOutputReference | GoogleContainerClusterNodePoolQueuedProvisioning): any {
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

export class GoogleContainerClusterNodePoolQueuedProvisioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolQueuedProvisioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolQueuedProvisioning | undefined) {
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
export interface GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#batch_node_count GoogleContainerCluster#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Percentage of the blue pool nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#batch_percentage GoogleContainerCluster#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Soak time after each batch gets drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#batch_soak_duration GoogleContainerCluster#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
}

export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_node_count: cdktf.numberToTerraform(struct!.batchNodeCount),
    batch_percentage: cdktf.numberToTerraform(struct!.batchPercentage),
    batch_soak_duration: cdktf.stringToTerraform(struct!.batchSoakDuration),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_node_count: {
      value: cdktf.numberToHclTerraform(struct!.batchNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.batchSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNodeCount = this._batchNodeCount;
    }
    if (this._batchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPercentage = this._batchPercentage;
    }
    if (this._batchSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSoakDuration = this._batchSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNodeCount = undefined;
      this._batchPercentage = undefined;
      this._batchSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNodeCount = value.batchNodeCount;
      this._batchPercentage = value.batchPercentage;
      this._batchSoakDuration = value.batchSoakDuration;
    }
  }

  // batch_node_count - computed: true, optional: true, required: false
  private _batchNodeCount?: number; 
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }
  public set batchNodeCount(value: number) {
    this._batchNodeCount = value;
  }
  public resetBatchNodeCount() {
    this._batchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNodeCountInput() {
    return this._batchNodeCount;
  }

  // batch_percentage - computed: true, optional: true, required: false
  private _batchPercentage?: number; 
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }
  public set batchPercentage(value: number) {
    this._batchPercentage = value;
  }
  public resetBatchPercentage() {
    this._batchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPercentageInput() {
    return this._batchPercentage;
  }

  // batch_soak_duration - computed: true, optional: true, required: false
  private _batchSoakDuration?: string; 
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
  public set batchSoakDuration(value: string) {
    this._batchSoakDuration = value;
  }
  public resetBatchSoakDuration() {
    this._batchSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSoakDurationInput() {
    return this._batchSoakDuration;
  }
}
export interface GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings {
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_pool_soak_duration GoogleContainerCluster#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
  /**
  * standard_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#standard_rollout_policy GoogleContainerCluster#standard_rollout_policy}
  */
  readonly standardRolloutPolicy: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_soak_duration: cdktf.stringToTerraform(struct!.nodePoolSoakDuration),
    standard_rollout_policy: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct!.standardRolloutPolicy),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_rollout_policy: {
      value: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct!.standardRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolSoakDuration = this._nodePoolSoakDuration;
    }
    if (this._standardRolloutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardRolloutPolicy = this._standardRolloutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolSoakDuration = undefined;
      this._standardRolloutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolSoakDuration = value.nodePoolSoakDuration;
      this._standardRolloutPolicy.internalValue = value.standardRolloutPolicy;
    }
  }

  // node_pool_soak_duration - computed: true, optional: true, required: false
  private _nodePoolSoakDuration?: string; 
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }
  public set nodePoolSoakDuration(value: string) {
    this._nodePoolSoakDuration = value;
  }
  public resetNodePoolSoakDuration() {
    this._nodePoolSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolSoakDurationInput() {
    return this._nodePoolSoakDuration;
  }

  // standard_rollout_policy - computed: false, optional: false, required: true
  private _standardRolloutPolicy = new GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this, "standard_rollout_policy");
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
  public putStandardRolloutPolicy(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy) {
    this._standardRolloutPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardRolloutPolicyInput() {
    return this._standardRolloutPolicy.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolUpgradeSettings {
  /**
  * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_surge GoogleContainerCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_unavailable GoogleContainerCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Update strategy for the given nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#strategy GoogleContainerCluster#strategy}
  */
  readonly strategy?: string;
  /**
  * blue_green_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#blue_green_settings GoogleContainerCluster#blue_green_settings}
  */
  readonly blueGreenSettings?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings;
}

export function googleContainerClusterNodePoolUpgradeSettingsToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    blue_green_settings: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct!.blueGreenSettings),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blue_green_settings: {
      value: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct!.blueGreenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._blueGreenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenSettings = this._blueGreenSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._strategy = undefined;
      this._blueGreenSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._strategy = value.strategy;
      this._blueGreenSettings.internalValue = value.blueGreenSettings;
    }
  }

  // max_surge - computed: true, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: true, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // blue_green_settings - computed: false, optional: true, required: false
  private _blueGreenSettings = new GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(this, "blue_green_settings");
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }
  public putBlueGreenSettings(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings) {
    this._blueGreenSettings.internalValue = value;
  }
  public resetBlueGreenSettings() {
    this._blueGreenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenSettingsInput() {
    return this._blueGreenSettings.internalValue;
  }
}
export interface GoogleContainerClusterNodePool {
  /**
  * The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#initial_node_count GoogleContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#max_pods_per_node GoogleContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#name GoogleContainerCluster#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#name_prefix GoogleContainerCluster#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_count GoogleContainerCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_locations GoogleContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#version GoogleContainerCluster#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#autoscaling GoogleContainerCluster#autoscaling}
  */
  readonly autoscaling?: GoogleContainerClusterNodePoolAutoscaling;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#management GoogleContainerCluster#management}
  */
  readonly management?: GoogleContainerClusterNodePoolManagement;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#network_config GoogleContainerCluster#network_config}
  */
  readonly networkConfig?: GoogleContainerClusterNodePoolNetworkConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_config GoogleContainerCluster#node_config}
  */
  readonly nodeConfig?: GoogleContainerClusterNodePoolNodeConfig;
  /**
  * placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#placement_policy GoogleContainerCluster#placement_policy}
  */
  readonly placementPolicy?: GoogleContainerClusterNodePoolPlacementPolicy;
  /**
  * queued_provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#queued_provisioning GoogleContainerCluster#queued_provisioning}
  */
  readonly queuedProvisioning?: GoogleContainerClusterNodePoolQueuedProvisioning;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#upgrade_settings GoogleContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: GoogleContainerClusterNodePoolUpgradeSettings;
}

export function googleContainerClusterNodePoolToTerraform(struct?: GoogleContainerClusterNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_node_count: cdktf.numberToTerraform(struct!.initialNodeCount),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    name: cdktf.stringToTerraform(struct!.name),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeLocations),
    version: cdktf.stringToTerraform(struct!.version),
    autoscaling: googleContainerClusterNodePoolAutoscalingToTerraform(struct!.autoscaling),
    management: googleContainerClusterNodePoolManagementToTerraform(struct!.management),
    network_config: googleContainerClusterNodePoolNetworkConfigToTerraform(struct!.networkConfig),
    node_config: googleContainerClusterNodePoolNodeConfigToTerraform(struct!.nodeConfig),
    placement_policy: googleContainerClusterNodePoolPlacementPolicyToTerraform(struct!.placementPolicy),
    queued_provisioning: googleContainerClusterNodePoolQueuedProvisioningToTerraform(struct!.queuedProvisioning),
    upgrade_settings: googleContainerClusterNodePoolUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function googleContainerClusterNodePoolToHclTerraform(struct?: GoogleContainerClusterNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_node_count: {
      value: cdktf.numberToHclTerraform(struct!.initialNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling: {
      value: googleContainerClusterNodePoolAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoscalingList",
    },
    management: {
      value: googleContainerClusterNodePoolManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolManagementList",
    },
    network_config: {
      value: googleContainerClusterNodePoolNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigList",
    },
    node_config: {
      value: googleContainerClusterNodePoolNodeConfigToHclTerraform(struct!.nodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigList",
    },
    placement_policy: {
      value: googleContainerClusterNodePoolPlacementPolicyToHclTerraform(struct!.placementPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolPlacementPolicyList",
    },
    queued_provisioning: {
      value: googleContainerClusterNodePoolQueuedProvisioningToHclTerraform(struct!.queuedProvisioning),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolQueuedProvisioningList",
    },
    upgrade_settings: {
      value: googleContainerClusterNodePoolUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialNodeCount = this._initialNodeCount;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLocations = this._nodeLocations;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._placementPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementPolicy = this._placementPolicy?.internalValue;
    }
    if (this._queuedProvisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuedProvisioning = this._queuedProvisioning?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialNodeCount = undefined;
      this._maxPodsPerNode = undefined;
      this._name = undefined;
      this._namePrefix = undefined;
      this._nodeCount = undefined;
      this._nodeLocations = undefined;
      this._version = undefined;
      this._autoscaling.internalValue = undefined;
      this._management.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._nodeConfig.internalValue = undefined;
      this._placementPolicy.internalValue = undefined;
      this._queuedProvisioning.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialNodeCount = value.initialNodeCount;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._name = value.name;
      this._namePrefix = value.namePrefix;
      this._nodeCount = value.nodeCount;
      this._nodeLocations = value.nodeLocations;
      this._version = value.version;
      this._autoscaling.internalValue = value.autoscaling;
      this._management.internalValue = value.management;
      this._networkConfig.internalValue = value.networkConfig;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._placementPolicy.internalValue = value.placementPolicy;
      this._queuedProvisioning.internalValue = value.queuedProvisioning;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // initial_node_count - computed: true, optional: true, required: false
  private _initialNodeCount?: number; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number) {
    this._initialNodeCount = value;
  }
  public resetInitialNodeCount() {
    this._initialNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount;
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // managed_instance_group_urls - computed: true, optional: false, required: false
  public get managedInstanceGroupUrls() {
    return this.getListAttribute('managed_instance_group_urls');
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[]; 
  public get nodeLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('node_locations'));
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations;
  }

  // version - computed: true, optional: true, required: false
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

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new GoogleContainerClusterNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: GoogleContainerClusterNodePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new GoogleContainerClusterNodePoolManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: GoogleContainerClusterNodePoolManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleContainerClusterNodePoolNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleContainerClusterNodePoolNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new GoogleContainerClusterNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GoogleContainerClusterNodePoolNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new GoogleContainerClusterNodePoolPlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: GoogleContainerClusterNodePoolPlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // queued_provisioning - computed: false, optional: true, required: false
  private _queuedProvisioning = new GoogleContainerClusterNodePoolQueuedProvisioningOutputReference(this, "queued_provisioning");
  public get queuedProvisioning() {
    return this._queuedProvisioning;
  }
  public putQueuedProvisioning(value: GoogleContainerClusterNodePoolQueuedProvisioning) {
    this._queuedProvisioning.internalValue = value;
  }
  public resetQueuedProvisioning() {
    this._queuedProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedProvisioningInput() {
    return this._queuedProvisioning.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new GoogleContainerClusterNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: GoogleContainerClusterNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}

export class GoogleContainerClusterNodePoolList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePool[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolOutputReference {
    return new GoogleContainerClusterNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolAutoConfigNetworkTags {
  /**
  * List of network tags applied to auto-provisioned node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
}

export function googleContainerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference | GoogleContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function googleContainerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference | GoogleContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfigNetworkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfigNetworkTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface GoogleContainerClusterNodePoolAutoConfig {
  /**
  * network_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#network_tags GoogleContainerCluster#network_tags}
  */
  readonly networkTags?: GoogleContainerClusterNodePoolAutoConfigNetworkTags;
}

export function googleContainerClusterNodePoolAutoConfigToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigOutputReference | GoogleContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_tags: googleContainerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct!.networkTags),
  }
}


export function googleContainerClusterNodePoolAutoConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigOutputReference | GoogleContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_tags: {
      value: googleContainerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct!.networkTags),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoConfigNetworkTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkTags.internalValue = value.networkTags;
    }
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags = new GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference(this, "network_tags");
  public get networkTags() {
    return this._networkTags;
  }
  public putNetworkTags(value: GoogleContainerClusterNodePoolAutoConfigNetworkTags) {
    this._networkTags.internalValue = value;
  }
  public resetNetworkTags() {
    this._networkTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
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

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined) {
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
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults {
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    gcfs_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct!.gcfsConfig),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcfs_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loggingVariant = undefined;
      this._gcfsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loggingVariant = value.loggingVariant;
      this._gcfsConfig.internalValue = value.gcfsConfig;
    }
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaults {
  /**
  * node_config_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#node_config_defaults GoogleContainerCluster#node_config_defaults}
  */
  readonly nodeConfigDefaults?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults;
}

export function googleContainerClusterNodePoolDefaultsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsOutputReference | GoogleContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_config_defaults: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct!.nodeConfigDefaults),
  }
}


export function googleContainerClusterNodePoolDefaultsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsOutputReference | GoogleContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_config_defaults: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct!.nodeConfigDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeConfigDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigDefaults = this._nodeConfigDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeConfigDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeConfigDefaults.internalValue = value.nodeConfigDefaults;
    }
  }

  // node_config_defaults - computed: false, optional: true, required: false
  private _nodeConfigDefaults = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference(this, "node_config_defaults");
  public get nodeConfigDefaults() {
    return this._nodeConfigDefaults;
  }
  public putNodeConfigDefaults(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults) {
    this._nodeConfigDefaults.internalValue = value;
  }
  public resetNodeConfigDefaults() {
    this._nodeConfigDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigDefaultsInput() {
    return this._nodeConfigDefaults.internalValue;
  }
}
export interface GoogleContainerClusterNotificationConfigPubsubFilter {
  /**
  * Can be used to filter what notifications are sent. Valid values include include UPGRADE_AVAILABLE_EVENT, UPGRADE_EVENT and SECURITY_BULLETIN_EVENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#event_type GoogleContainerCluster#event_type}
  */
  readonly eventType: string[];
}

export function googleContainerClusterNotificationConfigPubsubFilterToTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubFilterOutputReference | GoogleContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventType),
  }
}


export function googleContainerClusterNotificationConfigPubsubFilterToHclTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubFilterOutputReference | GoogleContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigPubsubFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfigPubsubFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfigPubsubFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string[]; 
  public get eventType() {
    return this.getListAttribute('event_type');
  }
  public set eventType(value: string[]) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }
}
export interface GoogleContainerClusterNotificationConfigPubsub {
  /**
  * Whether or not the notification config is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#topic GoogleContainerCluster#topic}
  */
  readonly topic?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#filter GoogleContainerCluster#filter}
  */
  readonly filter?: GoogleContainerClusterNotificationConfigPubsubFilter;
}

export function googleContainerClusterNotificationConfigPubsubToTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubOutputReference | GoogleContainerClusterNotificationConfigPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    topic: cdktf.stringToTerraform(struct!.topic),
    filter: googleContainerClusterNotificationConfigPubsubFilterToTerraform(struct!.filter),
  }
}


export function googleContainerClusterNotificationConfigPubsubToHclTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubOutputReference | GoogleContainerClusterNotificationConfigPubsub): any {
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
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: googleContainerClusterNotificationConfigPubsubFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNotificationConfigPubsubFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfigPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfigPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topic = undefined;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topic = value.topic;
      this._filter.internalValue = value.filter;
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

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleContainerClusterNotificationConfigPubsubFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleContainerClusterNotificationConfigPubsubFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface GoogleContainerClusterNotificationConfig {
  /**
  * pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#pubsub GoogleContainerCluster#pubsub}
  */
  readonly pubsub: GoogleContainerClusterNotificationConfigPubsub;
}

export function googleContainerClusterNotificationConfigToTerraform(struct?: GoogleContainerClusterNotificationConfigOutputReference | GoogleContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub: googleContainerClusterNotificationConfigPubsubToTerraform(struct!.pubsub),
  }
}


export function googleContainerClusterNotificationConfigToHclTerraform(struct?: GoogleContainerClusterNotificationConfigOutputReference | GoogleContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pubsub: {
      value: googleContainerClusterNotificationConfigPubsubToHclTerraform(struct!.pubsub),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNotificationConfigPubsubList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsub = this._pubsub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsub.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsub.internalValue = value.pubsub;
    }
  }

  // pubsub - computed: false, optional: false, required: true
  private _pubsub = new GoogleContainerClusterNotificationConfigPubsubOutputReference(this, "pubsub");
  public get pubsub() {
    return this._pubsub;
  }
  public putPubsub(value: GoogleContainerClusterNotificationConfigPubsub) {
    this._pubsub.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub.internalValue;
  }
}
export interface GoogleContainerClusterPodSecurityPolicyConfig {
  /**
  * Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterPodSecurityPolicyConfigToTerraform(struct?: GoogleContainerClusterPodSecurityPolicyConfigOutputReference | GoogleContainerClusterPodSecurityPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterPodSecurityPolicyConfigToHclTerraform(struct?: GoogleContainerClusterPodSecurityPolicyConfigOutputReference | GoogleContainerClusterPodSecurityPolicyConfig): any {
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

export class GoogleContainerClusterPodSecurityPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPodSecurityPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPodSecurityPolicyConfig | undefined) {
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
export interface GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /**
  * Whether the cluster master is accessible globally or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
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

export class GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined) {
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
export interface GoogleContainerClusterPrivateClusterConfig {
  /**
  * When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_private_endpoint GoogleContainerCluster#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#enable_private_nodes GoogleContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#master_ipv4_cidr_block GoogleContainerCluster#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * Subnetwork in cluster's network where master's endpoint will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#private_endpoint_subnetwork GoogleContainerCluster#private_endpoint_subnetwork}
  */
  readonly privateEndpointSubnetwork?: string;
  /**
  * master_global_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#master_global_access_config GoogleContainerCluster#master_global_access_config}
  */
  readonly masterGlobalAccessConfig?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig;
}

export function googleContainerClusterPrivateClusterConfigToTerraform(struct?: GoogleContainerClusterPrivateClusterConfigOutputReference | GoogleContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    master_ipv4_cidr_block: cdktf.stringToTerraform(struct!.masterIpv4CidrBlock),
    private_endpoint_subnetwork: cdktf.stringToTerraform(struct!.privateEndpointSubnetwork),
    master_global_access_config: googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct!.masterGlobalAccessConfig),
  }
}


export function googleContainerClusterPrivateClusterConfigToHclTerraform(struct?: GoogleContainerClusterPrivateClusterConfigOutputReference | GoogleContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_private_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.masterIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointSubnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_global_access_config: {
      value: googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct!.masterGlobalAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterPrivateClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPrivateClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._masterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterIpv4CidrBlock = this._masterIpv4CidrBlock;
    }
    if (this._privateEndpointSubnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointSubnetwork = this._privateEndpointSubnetwork;
    }
    if (this._masterGlobalAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterGlobalAccessConfig = this._masterGlobalAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPrivateClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateEndpoint = undefined;
      this._enablePrivateNodes = undefined;
      this._masterIpv4CidrBlock = undefined;
      this._privateEndpointSubnetwork = undefined;
      this._masterGlobalAccessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._privateEndpointSubnetwork = value.privateEndpointSubnetwork;
      this._masterGlobalAccessConfig.internalValue = value.masterGlobalAccessConfig;
    }
  }

  // enable_private_endpoint - computed: false, optional: true, required: false
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  public resetEnablePrivateEndpoint() {
    this._enablePrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // enable_private_nodes - computed: false, optional: true, required: false
  private _enablePrivateNodes?: boolean | cdktf.IResolvable; 
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }
  public set enablePrivateNodes(value: boolean | cdktf.IResolvable) {
    this._enablePrivateNodes = value;
  }
  public resetEnablePrivateNodes() {
    this._enablePrivateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNodesInput() {
    return this._enablePrivateNodes;
  }

  // master_ipv4_cidr_block - computed: true, optional: true, required: false
  private _masterIpv4CidrBlock?: string; 
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }
  public set masterIpv4CidrBlock(value: string) {
    this._masterIpv4CidrBlock = value;
  }
  public resetMasterIpv4CidrBlock() {
    this._masterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpv4CidrBlockInput() {
    return this._masterIpv4CidrBlock;
  }

  // peering_name - computed: true, optional: false, required: false
  public get peeringName() {
    return this.getStringAttribute('peering_name');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_subnetwork - computed: false, optional: true, required: false
  private _privateEndpointSubnetwork?: string; 
  public get privateEndpointSubnetwork() {
    return this.getStringAttribute('private_endpoint_subnetwork');
  }
  public set privateEndpointSubnetwork(value: string) {
    this._privateEndpointSubnetwork = value;
  }
  public resetPrivateEndpointSubnetwork() {
    this._privateEndpointSubnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointSubnetworkInput() {
    return this._privateEndpointSubnetwork;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // master_global_access_config - computed: false, optional: true, required: false
  private _masterGlobalAccessConfig = new GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference(this, "master_global_access_config");
  public get masterGlobalAccessConfig() {
    return this._masterGlobalAccessConfig;
  }
  public putMasterGlobalAccessConfig(value: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig) {
    this._masterGlobalAccessConfig.internalValue = value;
  }
  public resetMasterGlobalAccessConfig() {
    this._masterGlobalAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterGlobalAccessConfigInput() {
    return this._masterGlobalAccessConfig.internalValue;
  }
}
export interface GoogleContainerClusterProtectConfigWorkloadConfig {
  /**
  * Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#audit_mode GoogleContainerCluster#audit_mode}
  */
  readonly auditMode: string;
}

export function googleContainerClusterProtectConfigWorkloadConfigToTerraform(struct?: GoogleContainerClusterProtectConfigWorkloadConfigOutputReference | GoogleContainerClusterProtectConfigWorkloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_mode: cdktf.stringToTerraform(struct!.auditMode),
  }
}


export function googleContainerClusterProtectConfigWorkloadConfigToHclTerraform(struct?: GoogleContainerClusterProtectConfigWorkloadConfigOutputReference | GoogleContainerClusterProtectConfigWorkloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.auditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterProtectConfigWorkloadConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterProtectConfigWorkloadConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditMode = this._auditMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterProtectConfigWorkloadConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditMode = value.auditMode;
    }
  }

  // audit_mode - computed: false, optional: false, required: true
  private _auditMode?: string; 
  public get auditMode() {
    return this.getStringAttribute('audit_mode');
  }
  public set auditMode(value: string) {
    this._auditMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditModeInput() {
    return this._auditMode;
  }
}
export interface GoogleContainerClusterProtectConfig {
  /**
  * Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#workload_vulnerability_mode GoogleContainerCluster#workload_vulnerability_mode}
  */
  readonly workloadVulnerabilityMode?: string;
  /**
  * workload_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#workload_config GoogleContainerCluster#workload_config}
  */
  readonly workloadConfig?: GoogleContainerClusterProtectConfigWorkloadConfig;
}

export function googleContainerClusterProtectConfigToTerraform(struct?: GoogleContainerClusterProtectConfigOutputReference | GoogleContainerClusterProtectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_vulnerability_mode: cdktf.stringToTerraform(struct!.workloadVulnerabilityMode),
    workload_config: googleContainerClusterProtectConfigWorkloadConfigToTerraform(struct!.workloadConfig),
  }
}


export function googleContainerClusterProtectConfigToHclTerraform(struct?: GoogleContainerClusterProtectConfigOutputReference | GoogleContainerClusterProtectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_vulnerability_mode: {
      value: cdktf.stringToHclTerraform(struct!.workloadVulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_config: {
      value: googleContainerClusterProtectConfigWorkloadConfigToHclTerraform(struct!.workloadConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterProtectConfigWorkloadConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterProtectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterProtectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadVulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadVulnerabilityMode = this._workloadVulnerabilityMode;
    }
    if (this._workloadConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadConfig = this._workloadConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterProtectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workloadVulnerabilityMode = undefined;
      this._workloadConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workloadVulnerabilityMode = value.workloadVulnerabilityMode;
      this._workloadConfig.internalValue = value.workloadConfig;
    }
  }

  // workload_vulnerability_mode - computed: true, optional: true, required: false
  private _workloadVulnerabilityMode?: string; 
  public get workloadVulnerabilityMode() {
    return this.getStringAttribute('workload_vulnerability_mode');
  }
  public set workloadVulnerabilityMode(value: string) {
    this._workloadVulnerabilityMode = value;
  }
  public resetWorkloadVulnerabilityMode() {
    this._workloadVulnerabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadVulnerabilityModeInput() {
    return this._workloadVulnerabilityMode;
  }

  // workload_config - computed: false, optional: true, required: false
  private _workloadConfig = new GoogleContainerClusterProtectConfigWorkloadConfigOutputReference(this, "workload_config");
  public get workloadConfig() {
    return this._workloadConfig;
  }
  public putWorkloadConfig(value: GoogleContainerClusterProtectConfigWorkloadConfig) {
    this._workloadConfig.internalValue = value;
  }
  public resetWorkloadConfig() {
    this._workloadConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadConfigInput() {
    return this._workloadConfig.internalValue;
  }
}
export interface GoogleContainerClusterReleaseChannel {
  /**
  * The selected release channel. Accepted values are:
  * * UNSPECIFIED: Not set.
  * * RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
  * * REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
  * * STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#channel GoogleContainerCluster#channel}
  */
  readonly channel: string;
}

export function googleContainerClusterReleaseChannelToTerraform(struct?: GoogleContainerClusterReleaseChannelOutputReference | GoogleContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
  }
}


export function googleContainerClusterReleaseChannelToHclTerraform(struct?: GoogleContainerClusterReleaseChannelOutputReference | GoogleContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterReleaseChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterReleaseChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterReleaseChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface GoogleContainerClusterResourceUsageExportConfigBigqueryDestination {
  /**
  * The ID of a BigQuery Dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_container_cluster#dataset_id GoogleContainerCluster#dataset_id}
  */
  readonly datasetId: string;
}

export function googleContainerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | GoogleContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}


export function googleContainerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | GoogleContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterResourceUsageExportConfigBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterResourceUsageExportConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }
}
