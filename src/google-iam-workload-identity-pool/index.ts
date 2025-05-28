// https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIamWorkloadIdentityPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the pool. Cannot exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#description GoogleIamWorkloadIdentityPool#description}
  */
  readonly description?: string;
  /**
  * Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use
  * existing tokens to access resources. If the pool is re-enabled, existing tokens grant
  * access again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#disabled GoogleIamWorkloadIdentityPool#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A display name for the pool. Cannot exceed 32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#display_name GoogleIamWorkloadIdentityPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#id GoogleIamWorkloadIdentityPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The mode for the pool is operating in. Pools with an unspecified mode will operate as if they
  * are in 'FEDERATION_ONLY' mode.
  * 
  * 
  * ~> **Note** This field cannot be changed after the Workload Identity Pool is created. While
  * 'terraform plan' may show an update if you change this field's value, 'terraform apply'
  * **will fail with an API error** (such as 'Error 400: Attempted to update an immutable field.').
  * To specify a different 'mode', please create a new Workload Identity Pool resource.
  * 
  * * 'FEDERATION_ONLY': Pools can only be used for federating external workload identities into
  * Google Cloud. Unless otherwise noted, no structure or format constraints are applied to
  * workload identities in a 'FEDERATION_ONLY' mode pool, and you may not create any resources
  * within the pool besides providers.
  * * 'TRUST_DOMAIN': Pools can be used to assign identities to Google Cloud workloads. All
  * identities within a 'TRUST_DOMAIN' mode pool must consist of a single namespace and individual
  * workload identifier. The subject identifier for all identities must conform to the following
  * format: 'ns/<namespace>/sa/<workload_identifier>'.
  * 'google_iam_workload_identity_pool_provider's cannot be created within 'TRUST_DOMAIN'
  * mode pools. Possible values: ["FEDERATION_ONLY", "TRUST_DOMAIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#mode GoogleIamWorkloadIdentityPool#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#project GoogleIamWorkloadIdentityPool#project}
  */
  readonly project?: string;
  /**
  * The ID to use for the pool, which becomes the final component of the resource name. This
  * value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#workload_identity_pool_id GoogleIamWorkloadIdentityPool#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
  /**
  * inline_certificate_issuance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#inline_certificate_issuance_config GoogleIamWorkloadIdentityPool#inline_certificate_issuance_config}
  */
  readonly inlineCertificateIssuanceConfig?: GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig;
  /**
  * inline_trust_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#inline_trust_config GoogleIamWorkloadIdentityPool#inline_trust_config}
  */
  readonly inlineTrustConfig?: GoogleIamWorkloadIdentityPoolInlineTrustConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#timeouts GoogleIamWorkloadIdentityPool#timeouts}
  */
  readonly timeouts?: GoogleIamWorkloadIdentityPoolTimeouts;
}
export interface GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig {
  /**
  * A required mapping of a cloud region to the CA pool resource located in that region used
  * for certificate issuance, adhering to these constraints:
  * 
  * * **Key format:** A supported cloud region name equivalent to the location identifier in
  * the corresponding map entry's value.
  * * **Value format:** A valid CA pool resource path format like:
  * 'projects/{project}/locations/{location}/caPools/{ca_pool}'
  * * **Region Matching:** Workloads are ONLY issued certificates from CA pools within the
  * same region. Also the CA pool region (in value) must match the workload's region (key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#ca_pools GoogleIamWorkloadIdentityPool#ca_pools}
  */
  readonly caPools: { [key: string]: string };
  /**
  * Key algorithm to use when generating the key pair. This key pair will be used to create
  * the certificate. If unspecified, this will default to 'ECDSA_P256'.
  * 
  * * 'RSA_2048': Specifies RSA with a 2048-bit modulus.
  * * 'RSA_3072': Specifies RSA with a 3072-bit modulus.
  * * 'RSA_4096': Specifies RSA with a 4096-bit modulus.
  * * 'ECDSA_P256': Specifies ECDSA with curve P256.
  * * 'ECDSA_P384': Specifies ECDSA with curve P384. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096", "ECDSA_P256", "ECDSA_P384"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#key_algorithm GoogleIamWorkloadIdentityPool#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Lifetime of the workload certificates issued by the CA pool in seconds. Must be between
  * '86400s' (24 hours) to '2592000s' (30 days), ends in the suffix "'s'" (indicating seconds)
  * and is preceded by the number of seconds. If unspecified, this will be defaulted to
  * '86400s' (24 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#lifetime GoogleIamWorkloadIdentityPool#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Rotation window percentage indicating when certificate rotation should be initiated based
  * on remaining lifetime. Must be between '50' - '80'. If unspecified, this will be defaulted
  * to '50'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#rotation_window_percentage GoogleIamWorkloadIdentityPool#rotation_window_percentage}
  */
  readonly rotationWindowPercentage?: number;
}

export function googleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigToTerraform(struct?: GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference | GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_pools: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.caPools),
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    lifetime: cdktf.stringToTerraform(struct!.lifetime),
    rotation_window_percentage: cdktf.numberToTerraform(struct!.rotationWindowPercentage),
  }
}


export function googleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigToHclTerraform(struct?: GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference | GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_pools: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.caPools),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.keyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.stringToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_window_percentage: {
      value: cdktf.numberToHclTerraform(struct!.rotationWindowPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPools = this._caPools;
    }
    if (this._keyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAlgorithm = this._keyAlgorithm;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._rotationWindowPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationWindowPercentage = this._rotationWindowPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caPools = undefined;
      this._keyAlgorithm = undefined;
      this._lifetime = undefined;
      this._rotationWindowPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caPools = value.caPools;
      this._keyAlgorithm = value.keyAlgorithm;
      this._lifetime = value.lifetime;
      this._rotationWindowPercentage = value.rotationWindowPercentage;
    }
  }

  // ca_pools - computed: false, optional: false, required: true
  private _caPools?: { [key: string]: string }; 
  public get caPools() {
    return this.getStringMapAttribute('ca_pools');
  }
  public set caPools(value: { [key: string]: string }) {
    this._caPools = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caPoolsInput() {
    return this._caPools;
  }

  // key_algorithm - computed: true, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // rotation_window_percentage - computed: true, optional: true, required: false
  private _rotationWindowPercentage?: number; 
  public get rotationWindowPercentage() {
    return this.getNumberAttribute('rotation_window_percentage');
  }
  public set rotationWindowPercentage(value: number) {
    this._rotationWindowPercentage = value;
  }
  public resetRotationWindowPercentage() {
    this._rotationWindowPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationWindowPercentageInput() {
    return this._rotationWindowPercentage;
  }
}
export interface GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors {
  /**
  * PEM certificate of the PKI used for validation. Must only contain one ca
  * certificate(either root or intermediate cert).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#pem_certificate GoogleIamWorkloadIdentityPool#pem_certificate}
  */
  readonly pemCertificate: string;
}

export function googleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsToTerraform(struct?: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pem_certificate: cdktf.stringToTerraform(struct!.pemCertificate),
  }
}


export function googleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsToHclTerraform(struct?: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pem_certificate: {
      value: cdktf.stringToHclTerraform(struct!.pemCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemCertificate = value.pemCertificate;
    }
  }

  // pem_certificate - computed: false, optional: false, required: true
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }
}

export class GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList extends cdktf.ComplexList {
  public internalValue? : GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[] | cdktf.IResolvable

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
  public get(index: number): GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference {
    return new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#trust_domain GoogleIamWorkloadIdentityPool#trust_domain}
  */
  readonly trustDomain: string;
  /**
  * trust_anchors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#trust_anchors GoogleIamWorkloadIdentityPool#trust_anchors}
  */
  readonly trustAnchors: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[] | cdktf.IResolvable;
}

export function googleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesToTerraform(struct?: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trust_domain: cdktf.stringToTerraform(struct!.trustDomain),
    trust_anchors: cdktf.listMapper(googleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsToTerraform, true)(struct!.trustAnchors),
  }
}


export function googleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesToHclTerraform(struct?: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trust_domain: {
      value: cdktf.stringToHclTerraform(struct!.trustDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_anchors: {
      value: cdktf.listMapperHcl(googleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsToHclTerraform, true)(struct!.trustAnchors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustDomain = this._trustDomain;
    }
    if (this._trustAnchors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAnchors = this._trustAnchors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trustDomain = undefined;
      this._trustAnchors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trustDomain = value.trustDomain;
      this._trustAnchors.internalValue = value.trustAnchors;
    }
  }

  // trust_domain - computed: false, optional: false, required: true
  private _trustDomain?: string; 
  public get trustDomain() {
    return this.getStringAttribute('trust_domain');
  }
  public set trustDomain(value: string) {
    this._trustDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDomainInput() {
    return this._trustDomain;
  }

  // trust_anchors - computed: false, optional: false, required: true
  private _trustAnchors = new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList(this, "trust_anchors", false);
  public get trustAnchors() {
    return this._trustAnchors;
  }
  public putTrustAnchors(value: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[] | cdktf.IResolvable) {
    this._trustAnchors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAnchorsInput() {
    return this._trustAnchors.internalValue;
  }
}

export class GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList extends cdktf.ComplexList {
  public internalValue? : GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[] | cdktf.IResolvable

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
  public get(index: number): GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference {
    return new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIamWorkloadIdentityPoolInlineTrustConfig {
  /**
  * additional_trust_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#additional_trust_bundles GoogleIamWorkloadIdentityPool#additional_trust_bundles}
  */
  readonly additionalTrustBundles?: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[] | cdktf.IResolvable;
}

export function googleIamWorkloadIdentityPoolInlineTrustConfigToTerraform(struct?: GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference | GoogleIamWorkloadIdentityPoolInlineTrustConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_trust_bundles: cdktf.listMapper(googleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesToTerraform, true)(struct!.additionalTrustBundles),
  }
}


export function googleIamWorkloadIdentityPoolInlineTrustConfigToHclTerraform(struct?: GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference | GoogleIamWorkloadIdentityPoolInlineTrustConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_trust_bundles: {
      value: cdktf.listMapperHcl(googleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesToHclTerraform, true)(struct!.additionalTrustBundles),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIamWorkloadIdentityPoolInlineTrustConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalTrustBundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalTrustBundles = this._additionalTrustBundles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamWorkloadIdentityPoolInlineTrustConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalTrustBundles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalTrustBundles.internalValue = value.additionalTrustBundles;
    }
  }

  // additional_trust_bundles - computed: false, optional: true, required: false
  private _additionalTrustBundles = new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList(this, "additional_trust_bundles", true);
  public get additionalTrustBundles() {
    return this._additionalTrustBundles;
  }
  public putAdditionalTrustBundles(value: GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[] | cdktf.IResolvable) {
    this._additionalTrustBundles.internalValue = value;
  }
  public resetAdditionalTrustBundles() {
    this._additionalTrustBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTrustBundlesInput() {
    return this._additionalTrustBundles.internalValue;
  }
}
export interface GoogleIamWorkloadIdentityPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#create GoogleIamWorkloadIdentityPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#delete GoogleIamWorkloadIdentityPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#update GoogleIamWorkloadIdentityPool#update}
  */
  readonly update?: string;
}

export function googleIamWorkloadIdentityPoolTimeoutsToTerraform(struct?: GoogleIamWorkloadIdentityPoolTimeouts | cdktf.IResolvable): any {
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


export function googleIamWorkloadIdentityPoolTimeoutsToHclTerraform(struct?: GoogleIamWorkloadIdentityPoolTimeouts | cdktf.IResolvable): any {
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

export class GoogleIamWorkloadIdentityPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIamWorkloadIdentityPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIamWorkloadIdentityPoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool google_iam_workload_identity_pool}
*/
export class GoogleIamWorkloadIdentityPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleIamWorkloadIdentityPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIamWorkloadIdentityPool to import
  * @param importFromId The id of the existing GoogleIamWorkloadIdentityPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIamWorkloadIdentityPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workload_identity_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_iam_workload_identity_pool google_iam_workload_identity_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIamWorkloadIdentityPoolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIamWorkloadIdentityPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.37.0',
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
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._mode = config.mode;
    this._project = config.project;
    this._workloadIdentityPoolId = config.workloadIdentityPoolId;
    this._inlineCertificateIssuanceConfig.internalValue = config.inlineCertificateIssuanceConfig;
    this._inlineTrustConfig.internalValue = config.inlineTrustConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // workload_identity_pool_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolId?: string; 
  public get workloadIdentityPoolId() {
    return this.getStringAttribute('workload_identity_pool_id');
  }
  public set workloadIdentityPoolId(value: string) {
    this._workloadIdentityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolIdInput() {
    return this._workloadIdentityPoolId;
  }

  // inline_certificate_issuance_config - computed: false, optional: true, required: false
  private _inlineCertificateIssuanceConfig = new GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference(this, "inline_certificate_issuance_config");
  public get inlineCertificateIssuanceConfig() {
    return this._inlineCertificateIssuanceConfig;
  }
  public putInlineCertificateIssuanceConfig(value: GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig) {
    this._inlineCertificateIssuanceConfig.internalValue = value;
  }
  public resetInlineCertificateIssuanceConfig() {
    this._inlineCertificateIssuanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineCertificateIssuanceConfigInput() {
    return this._inlineCertificateIssuanceConfig.internalValue;
  }

  // inline_trust_config - computed: false, optional: true, required: false
  private _inlineTrustConfig = new GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference(this, "inline_trust_config");
  public get inlineTrustConfig() {
    return this._inlineTrustConfig;
  }
  public putInlineTrustConfig(value: GoogleIamWorkloadIdentityPoolInlineTrustConfig) {
    this._inlineTrustConfig.internalValue = value;
  }
  public resetInlineTrustConfig() {
    this._inlineTrustConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineTrustConfigInput() {
    return this._inlineTrustConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIamWorkloadIdentityPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIamWorkloadIdentityPoolTimeouts) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      project: cdktf.stringToTerraform(this._project),
      workload_identity_pool_id: cdktf.stringToTerraform(this._workloadIdentityPoolId),
      inline_certificate_issuance_config: googleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigToTerraform(this._inlineCertificateIssuanceConfig.internalValue),
      inline_trust_config: googleIamWorkloadIdentityPoolInlineTrustConfigToTerraform(this._inlineTrustConfig.internalValue),
      timeouts: googleIamWorkloadIdentityPoolTimeoutsToTerraform(this._timeouts.internalValue),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      workload_identity_pool_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inline_certificate_issuance_config: {
        value: googleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigToHclTerraform(this._inlineCertificateIssuanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList",
      },
      inline_trust_config: {
        value: googleIamWorkloadIdentityPoolInlineTrustConfigToHclTerraform(this._inlineTrustConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIamWorkloadIdentityPoolInlineTrustConfigList",
      },
      timeouts: {
        value: googleIamWorkloadIdentityPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIamWorkloadIdentityPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
