/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglePrivatecaCaPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels with user-defined metadata.
  * 
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
  * "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#labels GooglePrivatecaCaPool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location of the CaPool. A full list of valid locations can be found by
  * running 'gcloud privateca locations list'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}
  */
  readonly location: string;
  /**
  * The name for this CaPool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#name GooglePrivatecaCaPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}
  */
  readonly project?: string;
  /**
  * The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#tier GooglePrivatecaCaPool#tier}
  */
  readonly tier: string;
  /**
  * issuance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#issuance_policy GooglePrivatecaCaPool#issuance_policy}
  */
  readonly issuancePolicy?: GooglePrivatecaCaPoolIssuancePolicy;
  /**
  * publishing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#publishing_options GooglePrivatecaCaPool#publishing_options}
  */
  readonly publishingOptions?: GooglePrivatecaCaPoolPublishingOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#timeouts GooglePrivatecaCaPool#timeouts}
  */
  readonly timeouts?: GooglePrivatecaCaPoolTimeouts;
}
export interface GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes {
  /**
  * When true, allows callers to create Certificates by specifying a CertificateConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#allow_config_based_issuance GooglePrivatecaCaPool#allow_config_based_issuance}
  */
  readonly allowConfigBasedIssuance: boolean | cdktf.IResolvable;
  /**
  * When true, allows callers to create Certificates by specifying a CSR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#allow_csr_based_issuance GooglePrivatecaCaPool#allow_csr_based_issuance}
  */
  readonly allowCsrBasedIssuance: boolean | cdktf.IResolvable;
}

export function googlePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference | GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_config_based_issuance: cdktf.booleanToTerraform(struct!.allowConfigBasedIssuance),
    allow_csr_based_issuance: cdktf.booleanToTerraform(struct!.allowCsrBasedIssuance),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference | GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_config_based_issuance: {
      value: cdktf.booleanToHclTerraform(struct!.allowConfigBasedIssuance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_csr_based_issuance: {
      value: cdktf.booleanToHclTerraform(struct!.allowCsrBasedIssuance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowConfigBasedIssuance !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowConfigBasedIssuance = this._allowConfigBasedIssuance;
    }
    if (this._allowCsrBasedIssuance !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCsrBasedIssuance = this._allowCsrBasedIssuance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowConfigBasedIssuance = undefined;
      this._allowCsrBasedIssuance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowConfigBasedIssuance = value.allowConfigBasedIssuance;
      this._allowCsrBasedIssuance = value.allowCsrBasedIssuance;
    }
  }

  // allow_config_based_issuance - computed: false, optional: false, required: true
  private _allowConfigBasedIssuance?: boolean | cdktf.IResolvable; 
  public get allowConfigBasedIssuance() {
    return this.getBooleanAttribute('allow_config_based_issuance');
  }
  public set allowConfigBasedIssuance(value: boolean | cdktf.IResolvable) {
    this._allowConfigBasedIssuance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConfigBasedIssuanceInput() {
    return this._allowConfigBasedIssuance;
  }

  // allow_csr_based_issuance - computed: false, optional: false, required: true
  private _allowCsrBasedIssuance?: boolean | cdktf.IResolvable; 
  public get allowCsrBasedIssuance() {
    return this.getBooleanAttribute('allow_csr_based_issuance');
  }
  public set allowCsrBasedIssuance(value: boolean | cdktf.IResolvable) {
    this._allowCsrBasedIssuance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCsrBasedIssuanceInput() {
    return this._allowCsrBasedIssuance;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve {
  /**
  * The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#signature_algorithm GooglePrivatecaCaPool#signature_algorithm}
  */
  readonly signatureAlgorithm: string;
}

export function googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference | GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference | GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signatureAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signatureAlgorithm = value.signatureAlgorithm;
    }
  }

  // signature_algorithm - computed: false, optional: false, required: true
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa {
  /**
  * The maximum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
  * service will not enforce an explicit upper bound on RSA modulus sizes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#max_modulus_size GooglePrivatecaCaPool#max_modulus_size}
  */
  readonly maxModulusSize?: string;
  /**
  * The minimum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
  * service-level min RSA modulus size will continue to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#min_modulus_size GooglePrivatecaCaPool#min_modulus_size}
  */
  readonly minModulusSize?: string;
}

export function googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference | GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_modulus_size: cdktf.stringToTerraform(struct!.maxModulusSize),
    min_modulus_size: cdktf.stringToTerraform(struct!.minModulusSize),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference | GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_modulus_size: {
      value: cdktf.stringToHclTerraform(struct!.maxModulusSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_modulus_size: {
      value: cdktf.stringToHclTerraform(struct!.minModulusSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxModulusSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxModulusSize = this._maxModulusSize;
    }
    if (this._minModulusSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minModulusSize = this._minModulusSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxModulusSize = undefined;
      this._minModulusSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxModulusSize = value.maxModulusSize;
      this._minModulusSize = value.minModulusSize;
    }
  }

  // max_modulus_size - computed: false, optional: true, required: false
  private _maxModulusSize?: string; 
  public get maxModulusSize() {
    return this.getStringAttribute('max_modulus_size');
  }
  public set maxModulusSize(value: string) {
    this._maxModulusSize = value;
  }
  public resetMaxModulusSize() {
    this._maxModulusSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxModulusSizeInput() {
    return this._maxModulusSize;
  }

  // min_modulus_size - computed: false, optional: true, required: false
  private _minModulusSize?: string; 
  public get minModulusSize() {
    return this.getStringAttribute('min_modulus_size');
  }
  public set minModulusSize(value: string) {
    this._minModulusSize = value;
  }
  public resetMinModulusSize() {
    this._minModulusSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minModulusSizeInput() {
    return this._minModulusSize;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes {
  /**
  * elliptic_curve block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#elliptic_curve GooglePrivatecaCaPool#elliptic_curve}
  */
  readonly ellipticCurve?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve;
  /**
  * rsa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#rsa GooglePrivatecaCaPool#rsa}
  */
  readonly rsa?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa;
}

export function googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elliptic_curve: googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToTerraform(struct!.ellipticCurve),
    rsa: googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToTerraform(struct!.rsa),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elliptic_curve: {
      value: googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToHclTerraform(struct!.ellipticCurve),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveList",
    },
    rsa: {
      value: googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToHclTerraform(struct!.rsa),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ellipticCurve?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ellipticCurve = this._ellipticCurve?.internalValue;
    }
    if (this._rsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsa = this._rsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ellipticCurve.internalValue = undefined;
      this._rsa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ellipticCurve.internalValue = value.ellipticCurve;
      this._rsa.internalValue = value.rsa;
    }
  }

  // elliptic_curve - computed: false, optional: true, required: false
  private _ellipticCurve = new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference(this, "elliptic_curve");
  public get ellipticCurve() {
    return this._ellipticCurve;
  }
  public putEllipticCurve(value: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve) {
    this._ellipticCurve.internalValue = value;
  }
  public resetEllipticCurve() {
    this._ellipticCurve.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ellipticCurveInput() {
    return this._ellipticCurve.internalValue;
  }

  // rsa - computed: false, optional: true, required: false
  private _rsa = new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference(this, "rsa");
  public get rsa() {
    return this._rsa;
  }
  public putRsa(value: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa) {
    this._rsa.internalValue = value;
  }
  public resetRsa() {
    this._rsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaInput() {
    return this._rsa.internalValue;
  }
}

export class GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList extends cdktf.ComplexList {
  public internalValue? : GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes[] | cdktf.IResolvable

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
  public get(index: number): GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference {
    return new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_id_path: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.objectIdPath),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectIdPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions {
  /**
  * Indicates whether or not this extension is critical (i.e., if the client does not know how to
  * handle this extension, the client should consider this to be an error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#critical GooglePrivatecaCaPool#critical}
  */
  readonly critical: boolean | cdktf.IResolvable;
  /**
  * The value of this X.509 extension. A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#value GooglePrivatecaCaPool#value}
  */
  readonly value: string;
  /**
  * object_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#object_id GooglePrivatecaCaPool#object_id}
  */
  readonly objectId: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId;
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: googlePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: googlePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToHclTerraform(struct!.objectId),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._objectId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._value = undefined;
      this._objectId.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._value = value.value;
      this._objectId.internalValue = value.objectId;
    }
  }

  // critical - computed: false, optional: false, required: true
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
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

  // object_id - computed: false, optional: false, required: true
  private _objectId = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference(this, "object_id");
  public get objectId() {
    return this._objectId;
  }
  public putObjectId(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId) {
    this._objectId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId.internalValue;
  }
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList extends cdktf.ComplexList {
  public internalValue? : GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[] | cdktf.IResolvable

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
  public get(index: number): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference {
    return new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions {
  /**
  * When true, the "CA" in Basic Constraints extension will be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#is_ca GooglePrivatecaCaPool#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
  * subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#max_issuer_path_length GooglePrivatecaCaPool#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
  /**
  * When true, the "CA" in Basic Constraints extension will be set to false.
  * If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#non_ca GooglePrivatecaCaPool#non_ca}
  */
  readonly nonCa?: boolean | cdktf.IResolvable;
  /**
  * When true, the "path length constraint" in Basic Constraints extension will be set to 0.
  * if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
  * the max path length will be omitted from the CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#zero_max_issuer_path_length GooglePrivatecaCaPool#zero_max_issuer_path_length}
  */
  readonly zeroMaxIssuerPathLength?: boolean | cdktf.IResolvable;
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
    non_ca: cdktf.booleanToTerraform(struct!.nonCa),
    zero_max_issuer_path_length: cdktf.booleanToTerraform(struct!.zeroMaxIssuerPathLength),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_ca: {
      value: cdktf.booleanToHclTerraform(struct!.isCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_issuer_path_length: {
      value: cdktf.numberToHclTerraform(struct!.maxIssuerPathLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_ca: {
      value: cdktf.booleanToHclTerraform(struct!.nonCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zero_max_issuer_path_length: {
      value: cdktf.booleanToHclTerraform(struct!.zeroMaxIssuerPathLength),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCa = this._isCa;
    }
    if (this._maxIssuerPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIssuerPathLength = this._maxIssuerPathLength;
    }
    if (this._nonCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonCa = this._nonCa;
    }
    if (this._zeroMaxIssuerPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroMaxIssuerPathLength = this._zeroMaxIssuerPathLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isCa = undefined;
      this._maxIssuerPathLength = undefined;
      this._nonCa = undefined;
      this._zeroMaxIssuerPathLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isCa = value.isCa;
      this._maxIssuerPathLength = value.maxIssuerPathLength;
      this._nonCa = value.nonCa;
      this._zeroMaxIssuerPathLength = value.zeroMaxIssuerPathLength;
    }
  }

  // is_ca - computed: false, optional: true, required: false
  private _isCa?: boolean | cdktf.IResolvable; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }
  public set isCa(value: boolean | cdktf.IResolvable) {
    this._isCa = value;
  }
  public resetIsCa() {
    this._isCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa;
  }

  // max_issuer_path_length - computed: false, optional: true, required: false
  private _maxIssuerPathLength?: number; 
  public get maxIssuerPathLength() {
    return this.getNumberAttribute('max_issuer_path_length');
  }
  public set maxIssuerPathLength(value: number) {
    this._maxIssuerPathLength = value;
  }
  public resetMaxIssuerPathLength() {
    this._maxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIssuerPathLengthInput() {
    return this._maxIssuerPathLength;
  }

  // non_ca - computed: false, optional: true, required: false
  private _nonCa?: boolean | cdktf.IResolvable; 
  public get nonCa() {
    return this.getBooleanAttribute('non_ca');
  }
  public set nonCa(value: boolean | cdktf.IResolvable) {
    this._nonCa = value;
  }
  public resetNonCa() {
    this._nonCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCaInput() {
    return this._nonCa;
  }

  // zero_max_issuer_path_length - computed: false, optional: true, required: false
  private _zeroMaxIssuerPathLength?: boolean | cdktf.IResolvable; 
  public get zeroMaxIssuerPathLength() {
    return this.getBooleanAttribute('zero_max_issuer_path_length');
  }
  public set zeroMaxIssuerPathLength(value: boolean | cdktf.IResolvable) {
    this._zeroMaxIssuerPathLength = value;
  }
  public resetZeroMaxIssuerPathLength() {
    this._zeroMaxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroMaxIssuerPathLengthInput() {
    return this._zeroMaxIssuerPathLength;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#cert_sign GooglePrivatecaCaPool#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#content_commitment GooglePrivatecaCaPool#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#crl_sign GooglePrivatecaCaPool#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#data_encipherment GooglePrivatecaCaPool#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#decipher_only GooglePrivatecaCaPool#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#digital_signature GooglePrivatecaCaPool#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#encipher_only GooglePrivatecaCaPool#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#key_agreement GooglePrivatecaCaPool#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#key_encipherment GooglePrivatecaCaPool#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_sign: cdktf.booleanToTerraform(struct!.certSign),
    content_commitment: cdktf.booleanToTerraform(struct!.contentCommitment),
    crl_sign: cdktf.booleanToTerraform(struct!.crlSign),
    data_encipherment: cdktf.booleanToTerraform(struct!.dataEncipherment),
    decipher_only: cdktf.booleanToTerraform(struct!.decipherOnly),
    digital_signature: cdktf.booleanToTerraform(struct!.digitalSignature),
    encipher_only: cdktf.booleanToTerraform(struct!.encipherOnly),
    key_agreement: cdktf.booleanToTerraform(struct!.keyAgreement),
    key_encipherment: cdktf.booleanToTerraform(struct!.keyEncipherment),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_sign: {
      value: cdktf.booleanToHclTerraform(struct!.certSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_commitment: {
      value: cdktf.booleanToHclTerraform(struct!.contentCommitment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl_sign: {
      value: cdktf.booleanToHclTerraform(struct!.crlSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_encipherment: {
      value: cdktf.booleanToHclTerraform(struct!.dataEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    decipher_only: {
      value: cdktf.booleanToHclTerraform(struct!.decipherOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digital_signature: {
      value: cdktf.booleanToHclTerraform(struct!.digitalSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encipher_only: {
      value: cdktf.booleanToHclTerraform(struct!.encipherOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktf.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_encipherment: {
      value: cdktf.booleanToHclTerraform(struct!.keyEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSign = this._certSign;
    }
    if (this._contentCommitment !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCommitment = this._contentCommitment;
    }
    if (this._crlSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSign = this._crlSign;
    }
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._decipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.decipherOnly = this._decipherOnly;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._encipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.encipherOnly = this._encipherOnly;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certSign = undefined;
      this._contentCommitment = undefined;
      this._crlSign = undefined;
      this._dataEncipherment = undefined;
      this._decipherOnly = undefined;
      this._digitalSignature = undefined;
      this._encipherOnly = undefined;
      this._keyAgreement = undefined;
      this._keyEncipherment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certSign = value.certSign;
      this._contentCommitment = value.contentCommitment;
      this._crlSign = value.crlSign;
      this._dataEncipherment = value.dataEncipherment;
      this._decipherOnly = value.decipherOnly;
      this._digitalSignature = value.digitalSignature;
      this._encipherOnly = value.encipherOnly;
      this._keyAgreement = value.keyAgreement;
      this._keyEncipherment = value.keyEncipherment;
    }
  }

  // cert_sign - computed: false, optional: true, required: false
  private _certSign?: boolean | cdktf.IResolvable; 
  public get certSign() {
    return this.getBooleanAttribute('cert_sign');
  }
  public set certSign(value: boolean | cdktf.IResolvable) {
    this._certSign = value;
  }
  public resetCertSign() {
    this._certSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSignInput() {
    return this._certSign;
  }

  // content_commitment - computed: false, optional: true, required: false
  private _contentCommitment?: boolean | cdktf.IResolvable; 
  public get contentCommitment() {
    return this.getBooleanAttribute('content_commitment');
  }
  public set contentCommitment(value: boolean | cdktf.IResolvable) {
    this._contentCommitment = value;
  }
  public resetContentCommitment() {
    this._contentCommitment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCommitmentInput() {
    return this._contentCommitment;
  }

  // crl_sign - computed: false, optional: true, required: false
  private _crlSign?: boolean | cdktf.IResolvable; 
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }
  public set crlSign(value: boolean | cdktf.IResolvable) {
    this._crlSign = value;
  }
  public resetCrlSign() {
    this._crlSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSignInput() {
    return this._crlSign;
  }

  // data_encipherment - computed: false, optional: true, required: false
  private _dataEncipherment?: boolean | cdktf.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktf.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // decipher_only - computed: false, optional: true, required: false
  private _decipherOnly?: boolean | cdktf.IResolvable; 
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }
  public set decipherOnly(value: boolean | cdktf.IResolvable) {
    this._decipherOnly = value;
  }
  public resetDecipherOnly() {
    this._decipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decipherOnlyInput() {
    return this._decipherOnly;
  }

  // digital_signature - computed: false, optional: true, required: false
  private _digitalSignature?: boolean | cdktf.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktf.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // encipher_only - computed: false, optional: true, required: false
  private _encipherOnly?: boolean | cdktf.IResolvable; 
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }
  public set encipherOnly(value: boolean | cdktf.IResolvable) {
    this._encipherOnly = value;
  }
  public resetEncipherOnly() {
    this._encipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encipherOnlyInput() {
    return this._encipherOnly;
  }

  // key_agreement - computed: false, optional: true, required: false
  private _keyAgreement?: boolean | cdktf.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktf.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_encipherment - computed: false, optional: true, required: false
  private _keyEncipherment?: boolean | cdktf.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktf.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#client_auth GooglePrivatecaCaPool#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#code_signing GooglePrivatecaCaPool#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#email_protection GooglePrivatecaCaPool#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#ocsp_signing GooglePrivatecaCaPool#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#server_auth GooglePrivatecaCaPool#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#time_stamping GooglePrivatecaCaPool#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_auth: cdktf.booleanToTerraform(struct!.clientAuth),
    code_signing: cdktf.booleanToTerraform(struct!.codeSigning),
    email_protection: cdktf.booleanToTerraform(struct!.emailProtection),
    ocsp_signing: cdktf.booleanToTerraform(struct!.ocspSigning),
    server_auth: cdktf.booleanToTerraform(struct!.serverAuth),
    time_stamping: cdktf.booleanToTerraform(struct!.timeStamping),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_auth: {
      value: cdktf.booleanToHclTerraform(struct!.clientAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_signing: {
      value: cdktf.booleanToHclTerraform(struct!.codeSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_protection: {
      value: cdktf.booleanToHclTerraform(struct!.emailProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_signing: {
      value: cdktf.booleanToHclTerraform(struct!.ocspSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_auth: {
      value: cdktf.booleanToHclTerraform(struct!.serverAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_stamping: {
      value: cdktf.booleanToHclTerraform(struct!.timeStamping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth;
    }
    if (this._codeSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSigning = this._codeSigning;
    }
    if (this._emailProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailProtection = this._emailProtection;
    }
    if (this._ocspSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspSigning = this._ocspSigning;
    }
    if (this._serverAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuth = this._serverAuth;
    }
    if (this._timeStamping !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStamping = this._timeStamping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAuth = undefined;
      this._codeSigning = undefined;
      this._emailProtection = undefined;
      this._ocspSigning = undefined;
      this._serverAuth = undefined;
      this._timeStamping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAuth = value.clientAuth;
      this._codeSigning = value.codeSigning;
      this._emailProtection = value.emailProtection;
      this._ocspSigning = value.ocspSigning;
      this._serverAuth = value.serverAuth;
      this._timeStamping = value.timeStamping;
    }
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: boolean | cdktf.IResolvable; 
  public get clientAuth() {
    return this.getBooleanAttribute('client_auth');
  }
  public set clientAuth(value: boolean | cdktf.IResolvable) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // code_signing - computed: false, optional: true, required: false
  private _codeSigning?: boolean | cdktf.IResolvable; 
  public get codeSigning() {
    return this.getBooleanAttribute('code_signing');
  }
  public set codeSigning(value: boolean | cdktf.IResolvable) {
    this._codeSigning = value;
  }
  public resetCodeSigning() {
    this._codeSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningInput() {
    return this._codeSigning;
  }

  // email_protection - computed: false, optional: true, required: false
  private _emailProtection?: boolean | cdktf.IResolvable; 
  public get emailProtection() {
    return this.getBooleanAttribute('email_protection');
  }
  public set emailProtection(value: boolean | cdktf.IResolvable) {
    this._emailProtection = value;
  }
  public resetEmailProtection() {
    this._emailProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProtectionInput() {
    return this._emailProtection;
  }

  // ocsp_signing - computed: false, optional: true, required: false
  private _ocspSigning?: boolean | cdktf.IResolvable; 
  public get ocspSigning() {
    return this.getBooleanAttribute('ocsp_signing');
  }
  public set ocspSigning(value: boolean | cdktf.IResolvable) {
    this._ocspSigning = value;
  }
  public resetOcspSigning() {
    this._ocspSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSigningInput() {
    return this._ocspSigning;
  }

  // server_auth - computed: false, optional: true, required: false
  private _serverAuth?: boolean | cdktf.IResolvable; 
  public get serverAuth() {
    return this.getBooleanAttribute('server_auth');
  }
  public set serverAuth(value: boolean | cdktf.IResolvable) {
    this._serverAuth = value;
  }
  public resetServerAuth() {
    this._serverAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthInput() {
    return this._serverAuth;
  }

  // time_stamping - computed: false, optional: true, required: false
  private _timeStamping?: boolean | cdktf.IResolvable; 
  public get timeStamping() {
    return this.getBooleanAttribute('time_stamping');
  }
  public set timeStamping(value: boolean | cdktf.IResolvable) {
    this._timeStamping = value;
  }
  public resetTimeStamping() {
    this._timeStamping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampingInput() {
    return this._timeStamping;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_id_path: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.objectIdPath),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList extends cdktf.ComplexList {
  public internalValue? : GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable

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
  public get(index: number): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference {
    return new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage {
  /**
  * base_key_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#base_key_usage GooglePrivatecaCaPool#base_key_usage}
  */
  readonly baseKeyUsage: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#extended_key_usage GooglePrivatecaCaPool#extended_key_usage}
  */
  readonly extendedKeyUsage: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#unknown_extended_key_usages GooglePrivatecaCaPool#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable;
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_key_usage: googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToTerraform, true)(struct!.unknownExtendedKeyUsages),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_key_usage: {
      value: googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToHclTerraform(struct!.baseKeyUsage),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageList",
    },
    extended_key_usage: {
      value: googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToHclTerraform(struct!.extendedKeyUsage),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageList",
    },
    unknown_extended_key_usages: {
      value: cdktf.listMapperHcl(googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToHclTerraform, true)(struct!.unknownExtendedKeyUsages),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseKeyUsage = this._baseKeyUsage?.internalValue;
    }
    if (this._extendedKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage?.internalValue;
    }
    if (this._unknownExtendedKeyUsages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownExtendedKeyUsages = this._unknownExtendedKeyUsages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseKeyUsage.internalValue = undefined;
      this._extendedKeyUsage.internalValue = undefined;
      this._unknownExtendedKeyUsages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseKeyUsage.internalValue = value.baseKeyUsage;
      this._extendedKeyUsage.internalValue = value.extendedKeyUsage;
      this._unknownExtendedKeyUsages.internalValue = value.unknownExtendedKeyUsages;
    }
  }

  // base_key_usage - computed: false, optional: false, required: true
  private _baseKeyUsage = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(this, "base_key_usage");
  public get baseKeyUsage() {
    return this._baseKeyUsage;
  }
  public putBaseKeyUsage(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage) {
    this._baseKeyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage.internalValue;
  }

  // extended_key_usage - computed: false, optional: false, required: true
  private _extendedKeyUsage = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(this, "extended_key_usage");
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }
  public putExtendedKeyUsage(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage.internalValue;
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList(this, "unknown_extended_key_usages", false);
  public get unknownExtendedKeyUsages() {
    return this._unknownExtendedKeyUsages;
  }
  public putUnknownExtendedKeyUsages(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable) {
    this._unknownExtendedKeyUsages.internalValue = value;
  }
  public resetUnknownExtendedKeyUsages() {
    this._unknownExtendedKeyUsages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownExtendedKeyUsagesInput() {
    return this._unknownExtendedKeyUsages.internalValue;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints {
  /**
  * Indicates whether or not the name constraints are marked critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#critical GooglePrivatecaCaPool#critical}
  */
  readonly critical: boolean | cdktf.IResolvable;
  /**
  * Contains excluded DNS names. Any DNS name that can be
  * constructed by simply adding zero or more labels to
  * the left-hand side of the name satisfies the name constraint.
  * For example, 'example.com', 'www.example.com', 'www.sub.example.com'
  * would satisfy 'example.com' while 'example1.com' does not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#excluded_dns_names GooglePrivatecaCaPool#excluded_dns_names}
  */
  readonly excludedDnsNames?: string[];
  /**
  * Contains the excluded email addresses. The value can be a particular
  * email address, a hostname to indicate all email addresses on that host or
  * a domain with a leading period (e.g. '.example.com') to indicate
  * all email addresses in that domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#excluded_email_addresses GooglePrivatecaCaPool#excluded_email_addresses}
  */
  readonly excludedEmailAddresses?: string[];
  /**
  * Contains the excluded IP ranges. For IPv4 addresses, the ranges
  * are expressed using CIDR notation as specified in RFC 4632.
  * For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
  * addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#excluded_ip_ranges GooglePrivatecaCaPool#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: string[];
  /**
  * Contains the excluded URIs that apply to the host part of the name.
  * The value can be a hostname or a domain with a
  * leading period (like '.example.com')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#excluded_uris GooglePrivatecaCaPool#excluded_uris}
  */
  readonly excludedUris?: string[];
  /**
  * Contains permitted DNS names. Any DNS name that can be
  * constructed by simply adding zero or more labels to
  * the left-hand side of the name satisfies the name constraint.
  * For example, 'example.com', 'www.example.com', 'www.sub.example.com'
  * would satisfy 'example.com' while 'example1.com' does not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#permitted_dns_names GooglePrivatecaCaPool#permitted_dns_names}
  */
  readonly permittedDnsNames?: string[];
  /**
  * Contains the permitted email addresses. The value can be a particular
  * email address, a hostname to indicate all email addresses on that host or
  * a domain with a leading period (e.g. '.example.com') to indicate
  * all email addresses in that domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#permitted_email_addresses GooglePrivatecaCaPool#permitted_email_addresses}
  */
  readonly permittedEmailAddresses?: string[];
  /**
  * Contains the permitted IP ranges. For IPv4 addresses, the ranges
  * are expressed using CIDR notation as specified in RFC 4632.
  * For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
  * addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#permitted_ip_ranges GooglePrivatecaCaPool#permitted_ip_ranges}
  */
  readonly permittedIpRanges?: string[];
  /**
  * Contains the permitted URIs that apply to the host part of the name.
  * The value can be a hostname or a domain with a
  * leading period (like '.example.com')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#permitted_uris GooglePrivatecaCaPool#permitted_uris}
  */
  readonly permittedUris?: string[];
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    excluded_dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedDnsNames),
    excluded_email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEmailAddresses),
    excluded_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedIpRanges),
    excluded_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedUris),
    permitted_dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permittedDnsNames),
    permitted_email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permittedEmailAddresses),
    permitted_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permittedIpRanges),
    permitted_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permittedUris),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedDnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEmailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permitted_dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permittedDnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permitted_email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permittedEmailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permitted_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permittedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permitted_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permittedUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._excludedDnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedDnsNames = this._excludedDnsNames;
    }
    if (this._excludedEmailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEmailAddresses = this._excludedEmailAddresses;
    }
    if (this._excludedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIpRanges = this._excludedIpRanges;
    }
    if (this._excludedUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedUris = this._excludedUris;
    }
    if (this._permittedDnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedDnsNames = this._permittedDnsNames;
    }
    if (this._permittedEmailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedEmailAddresses = this._permittedEmailAddresses;
    }
    if (this._permittedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedIpRanges = this._permittedIpRanges;
    }
    if (this._permittedUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedUris = this._permittedUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._excludedDnsNames = undefined;
      this._excludedEmailAddresses = undefined;
      this._excludedIpRanges = undefined;
      this._excludedUris = undefined;
      this._permittedDnsNames = undefined;
      this._permittedEmailAddresses = undefined;
      this._permittedIpRanges = undefined;
      this._permittedUris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._excludedDnsNames = value.excludedDnsNames;
      this._excludedEmailAddresses = value.excludedEmailAddresses;
      this._excludedIpRanges = value.excludedIpRanges;
      this._excludedUris = value.excludedUris;
      this._permittedDnsNames = value.permittedDnsNames;
      this._permittedEmailAddresses = value.permittedEmailAddresses;
      this._permittedIpRanges = value.permittedIpRanges;
      this._permittedUris = value.permittedUris;
    }
  }

  // critical - computed: false, optional: false, required: true
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // excluded_dns_names - computed: false, optional: true, required: false
  private _excludedDnsNames?: string[]; 
  public get excludedDnsNames() {
    return this.getListAttribute('excluded_dns_names');
  }
  public set excludedDnsNames(value: string[]) {
    this._excludedDnsNames = value;
  }
  public resetExcludedDnsNames() {
    this._excludedDnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedDnsNamesInput() {
    return this._excludedDnsNames;
  }

  // excluded_email_addresses - computed: false, optional: true, required: false
  private _excludedEmailAddresses?: string[]; 
  public get excludedEmailAddresses() {
    return this.getListAttribute('excluded_email_addresses');
  }
  public set excludedEmailAddresses(value: string[]) {
    this._excludedEmailAddresses = value;
  }
  public resetExcludedEmailAddresses() {
    this._excludedEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedEmailAddressesInput() {
    return this._excludedEmailAddresses;
  }

  // excluded_ip_ranges - computed: false, optional: true, required: false
  private _excludedIpRanges?: string[]; 
  public get excludedIpRanges() {
    return this.getListAttribute('excluded_ip_ranges');
  }
  public set excludedIpRanges(value: string[]) {
    this._excludedIpRanges = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges;
  }

  // excluded_uris - computed: false, optional: true, required: false
  private _excludedUris?: string[]; 
  public get excludedUris() {
    return this.getListAttribute('excluded_uris');
  }
  public set excludedUris(value: string[]) {
    this._excludedUris = value;
  }
  public resetExcludedUris() {
    this._excludedUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUrisInput() {
    return this._excludedUris;
  }

  // permitted_dns_names - computed: false, optional: true, required: false
  private _permittedDnsNames?: string[]; 
  public get permittedDnsNames() {
    return this.getListAttribute('permitted_dns_names');
  }
  public set permittedDnsNames(value: string[]) {
    this._permittedDnsNames = value;
  }
  public resetPermittedDnsNames() {
    this._permittedDnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedDnsNamesInput() {
    return this._permittedDnsNames;
  }

  // permitted_email_addresses - computed: false, optional: true, required: false
  private _permittedEmailAddresses?: string[]; 
  public get permittedEmailAddresses() {
    return this.getListAttribute('permitted_email_addresses');
  }
  public set permittedEmailAddresses(value: string[]) {
    this._permittedEmailAddresses = value;
  }
  public resetPermittedEmailAddresses() {
    this._permittedEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedEmailAddressesInput() {
    return this._permittedEmailAddresses;
  }

  // permitted_ip_ranges - computed: false, optional: true, required: false
  private _permittedIpRanges?: string[]; 
  public get permittedIpRanges() {
    return this.getListAttribute('permitted_ip_ranges');
  }
  public set permittedIpRanges(value: string[]) {
    this._permittedIpRanges = value;
  }
  public resetPermittedIpRanges() {
    this._permittedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedIpRangesInput() {
    return this._permittedIpRanges;
  }

  // permitted_uris - computed: false, optional: true, required: false
  private _permittedUris?: string[]; 
  public get permittedUris() {
    return this.getListAttribute('permitted_uris');
  }
  public set permittedUris(value: string[]) {
    this._permittedUris = value;
  }
  public resetPermittedUris() {
    this._permittedUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedUrisInput() {
    return this._permittedUris;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_id_path: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.objectIdPath),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList extends cdktf.ComplexList {
  public internalValue? : GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[] | cdktf.IResolvable

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
  public get(index: number): GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference {
    return new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyBaselineValues {
  /**
  * Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
  * "Authority Information Access" extension in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#aia_ocsp_servers GooglePrivatecaCaPool#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#additional_extensions GooglePrivatecaCaPool#additional_extensions}
  */
  readonly additionalExtensions?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[] | cdktf.IResolvable;
  /**
  * ca_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#ca_options GooglePrivatecaCaPool#ca_options}
  */
  readonly caOptions: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions;
  /**
  * key_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#key_usage GooglePrivatecaCaPool#key_usage}
  */
  readonly keyUsage: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage;
  /**
  * name_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#name_constraints GooglePrivatecaCaPool#name_constraints}
  */
  readonly nameConstraints?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints;
  /**
  * policy_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#policy_ids GooglePrivatecaCaPool#policy_ids}
  */
  readonly policyIds?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[] | cdktf.IResolvable;
}

export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(googlePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToTerraform, true)(struct!.additionalExtensions),
    ca_options: googlePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToTerraform(struct!.caOptions),
    key_usage: googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToTerraform(struct!.keyUsage),
    name_constraints: googlePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsToTerraform(struct!.nameConstraints),
    policy_ids: cdktf.listMapper(googlePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToTerraform, true)(struct!.policyIds),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyBaselineValuesToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference | GooglePrivatecaCaPoolIssuancePolicyBaselineValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aia_ocsp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aiaOcspServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_extensions: {
      value: cdktf.listMapperHcl(googlePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToHclTerraform, true)(struct!.additionalExtensions),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList",
    },
    ca_options: {
      value: googlePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToHclTerraform(struct!.caOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsList",
    },
    key_usage: {
      value: googlePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToHclTerraform(struct!.keyUsage),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageList",
    },
    name_constraints: {
      value: googlePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsToHclTerraform(struct!.nameConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsList",
    },
    policy_ids: {
      value: cdktf.listMapperHcl(googlePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToHclTerraform, true)(struct!.policyIds),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyBaselineValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiaOcspServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiaOcspServers = this._aiaOcspServers;
    }
    if (this._additionalExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions?.internalValue;
    }
    if (this._caOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caOptions = this._caOptions?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    if (this._nameConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameConstraints = this._nameConstraints?.internalValue;
    }
    if (this._policyIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyIds = this._policyIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aiaOcspServers = undefined;
      this._additionalExtensions.internalValue = undefined;
      this._caOptions.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
      this._nameConstraints.internalValue = undefined;
      this._policyIds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aiaOcspServers = value.aiaOcspServers;
      this._additionalExtensions.internalValue = value.additionalExtensions;
      this._caOptions.internalValue = value.caOptions;
      this._keyUsage.internalValue = value.keyUsage;
      this._nameConstraints.internalValue = value.nameConstraints;
      this._policyIds.internalValue = value.policyIds;
    }
  }

  // aia_ocsp_servers - computed: false, optional: true, required: false
  private _aiaOcspServers?: string[]; 
  public get aiaOcspServers() {
    return this.getListAttribute('aia_ocsp_servers');
  }
  public set aiaOcspServers(value: string[]) {
    this._aiaOcspServers = value;
  }
  public resetAiaOcspServers() {
    this._aiaOcspServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiaOcspServersInput() {
    return this._aiaOcspServers;
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList(this, "additional_extensions", false);
  public get additionalExtensions() {
    return this._additionalExtensions;
  }
  public putAdditionalExtensions(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[] | cdktf.IResolvable) {
    this._additionalExtensions.internalValue = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions.internalValue;
  }

  // ca_options - computed: false, optional: false, required: true
  private _caOptions = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(this, "ca_options");
  public get caOptions() {
    return this._caOptions;
  }
  public putCaOptions(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions) {
    this._caOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions.internalValue;
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // name_constraints - computed: false, optional: true, required: false
  private _nameConstraints = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference(this, "name_constraints");
  public get nameConstraints() {
    return this._nameConstraints;
  }
  public putNameConstraints(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints) {
    this._nameConstraints.internalValue = value;
  }
  public resetNameConstraints() {
    this._nameConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameConstraintsInput() {
    return this._nameConstraints.internalValue;
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList(this, "policy_ids", false);
  public get policyIds() {
    return this._policyIds;
  }
  public putPolicyIds(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[] | cdktf.IResolvable) {
    this._policyIds.internalValue = value;
  }
  public resetPolicyIds() {
    this._policyIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds.internalValue;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression {
  /**
  * Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#description GooglePrivatecaCaPool#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#expression GooglePrivatecaCaPool#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#title GooglePrivatecaCaPool#title}
  */
  readonly title?: string;
}

export function googlePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference | GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference | GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
    }
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints {
  /**
  * If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.
  * Otherwise, the requested SubjectAltNames will be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#allow_subject_alt_names_passthrough GooglePrivatecaCaPool#allow_subject_alt_names_passthrough}
  */
  readonly allowSubjectAltNamesPassthrough: boolean | cdktf.IResolvable;
  /**
  * If this is set, the Subject field may be copied from a certificate request into the signed certificate.
  * Otherwise, the requested Subject will be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#allow_subject_passthrough GooglePrivatecaCaPool#allow_subject_passthrough}
  */
  readonly allowSubjectPassthrough: boolean | cdktf.IResolvable;
  /**
  * cel_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#cel_expression GooglePrivatecaCaPool#cel_expression}
  */
  readonly celExpression?: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression;
}

export function googlePrivatecaCaPoolIssuancePolicyIdentityConstraintsToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference | GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_subject_alt_names_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectAltNamesPassthrough),
    allow_subject_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectPassthrough),
    cel_expression: googlePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToTerraform(struct!.celExpression),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyIdentityConstraintsToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference | GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_subject_alt_names_passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.allowSubjectAltNamesPassthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_subject_passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.allowSubjectPassthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cel_expression: {
      value: googlePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToHclTerraform(struct!.celExpression),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSubjectAltNamesPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSubjectAltNamesPassthrough = this._allowSubjectAltNamesPassthrough;
    }
    if (this._allowSubjectPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSubjectPassthrough = this._allowSubjectPassthrough;
    }
    if (this._celExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.celExpression = this._celExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSubjectAltNamesPassthrough = undefined;
      this._allowSubjectPassthrough = undefined;
      this._celExpression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSubjectAltNamesPassthrough = value.allowSubjectAltNamesPassthrough;
      this._allowSubjectPassthrough = value.allowSubjectPassthrough;
      this._celExpression.internalValue = value.celExpression;
    }
  }

  // allow_subject_alt_names_passthrough - computed: false, optional: false, required: true
  private _allowSubjectAltNamesPassthrough?: boolean | cdktf.IResolvable; 
  public get allowSubjectAltNamesPassthrough() {
    return this.getBooleanAttribute('allow_subject_alt_names_passthrough');
  }
  public set allowSubjectAltNamesPassthrough(value: boolean | cdktf.IResolvable) {
    this._allowSubjectAltNamesPassthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubjectAltNamesPassthroughInput() {
    return this._allowSubjectAltNamesPassthrough;
  }

  // allow_subject_passthrough - computed: false, optional: false, required: true
  private _allowSubjectPassthrough?: boolean | cdktf.IResolvable; 
  public get allowSubjectPassthrough() {
    return this.getBooleanAttribute('allow_subject_passthrough');
  }
  public set allowSubjectPassthrough(value: boolean | cdktf.IResolvable) {
    this._allowSubjectPassthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubjectPassthroughInput() {
    return this._allowSubjectPassthrough;
  }

  // cel_expression - computed: false, optional: true, required: false
  private _celExpression = new GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(this, "cel_expression");
  public get celExpression() {
    return this._celExpression;
  }
  public putCelExpression(value: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression) {
    this._celExpression.internalValue = value;
  }
  public resetCelExpression() {
    this._celExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celExpressionInput() {
    return this._celExpression.internalValue;
  }
}
export interface GooglePrivatecaCaPoolIssuancePolicy {
  /**
  * The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority
  * expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#maximum_lifetime GooglePrivatecaCaPool#maximum_lifetime}
  */
  readonly maximumLifetime?: string;
  /**
  * allowed_issuance_modes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#allowed_issuance_modes GooglePrivatecaCaPool#allowed_issuance_modes}
  */
  readonly allowedIssuanceModes?: GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes;
  /**
  * allowed_key_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#allowed_key_types GooglePrivatecaCaPool#allowed_key_types}
  */
  readonly allowedKeyTypes?: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes[] | cdktf.IResolvable;
  /**
  * baseline_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#baseline_values GooglePrivatecaCaPool#baseline_values}
  */
  readonly baselineValues?: GooglePrivatecaCaPoolIssuancePolicyBaselineValues;
  /**
  * identity_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#identity_constraints GooglePrivatecaCaPool#identity_constraints}
  */
  readonly identityConstraints?: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints;
}

export function googlePrivatecaCaPoolIssuancePolicyToTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyOutputReference | GooglePrivatecaCaPoolIssuancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_lifetime: cdktf.stringToTerraform(struct!.maximumLifetime),
    allowed_issuance_modes: googlePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesToTerraform(struct!.allowedIssuanceModes),
    allowed_key_types: cdktf.listMapper(googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesToTerraform, true)(struct!.allowedKeyTypes),
    baseline_values: googlePrivatecaCaPoolIssuancePolicyBaselineValuesToTerraform(struct!.baselineValues),
    identity_constraints: googlePrivatecaCaPoolIssuancePolicyIdentityConstraintsToTerraform(struct!.identityConstraints),
  }
}


export function googlePrivatecaCaPoolIssuancePolicyToHclTerraform(struct?: GooglePrivatecaCaPoolIssuancePolicyOutputReference | GooglePrivatecaCaPoolIssuancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.maximumLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_issuance_modes: {
      value: googlePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesToHclTerraform(struct!.allowedIssuanceModes),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesList",
    },
    allowed_key_types: {
      value: cdktf.listMapperHcl(googlePrivatecaCaPoolIssuancePolicyAllowedKeyTypesToHclTerraform, true)(struct!.allowedKeyTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList",
    },
    baseline_values: {
      value: googlePrivatecaCaPoolIssuancePolicyBaselineValuesToHclTerraform(struct!.baselineValues),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyBaselineValuesList",
    },
    identity_constraints: {
      value: googlePrivatecaCaPoolIssuancePolicyIdentityConstraintsToHclTerraform(struct!.identityConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolIssuancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolIssuancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLifetime = this._maximumLifetime;
    }
    if (this._allowedIssuanceModes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIssuanceModes = this._allowedIssuanceModes?.internalValue;
    }
    if (this._allowedKeyTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedKeyTypes = this._allowedKeyTypes?.internalValue;
    }
    if (this._baselineValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineValues = this._baselineValues?.internalValue;
    }
    if (this._identityConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityConstraints = this._identityConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolIssuancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumLifetime = undefined;
      this._allowedIssuanceModes.internalValue = undefined;
      this._allowedKeyTypes.internalValue = undefined;
      this._baselineValues.internalValue = undefined;
      this._identityConstraints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumLifetime = value.maximumLifetime;
      this._allowedIssuanceModes.internalValue = value.allowedIssuanceModes;
      this._allowedKeyTypes.internalValue = value.allowedKeyTypes;
      this._baselineValues.internalValue = value.baselineValues;
      this._identityConstraints.internalValue = value.identityConstraints;
    }
  }

  // maximum_lifetime - computed: false, optional: true, required: false
  private _maximumLifetime?: string; 
  public get maximumLifetime() {
    return this.getStringAttribute('maximum_lifetime');
  }
  public set maximumLifetime(value: string) {
    this._maximumLifetime = value;
  }
  public resetMaximumLifetime() {
    this._maximumLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLifetimeInput() {
    return this._maximumLifetime;
  }

  // allowed_issuance_modes - computed: false, optional: true, required: false
  private _allowedIssuanceModes = new GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(this, "allowed_issuance_modes");
  public get allowedIssuanceModes() {
    return this._allowedIssuanceModes;
  }
  public putAllowedIssuanceModes(value: GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes) {
    this._allowedIssuanceModes.internalValue = value;
  }
  public resetAllowedIssuanceModes() {
    this._allowedIssuanceModes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIssuanceModesInput() {
    return this._allowedIssuanceModes.internalValue;
  }

  // allowed_key_types - computed: false, optional: true, required: false
  private _allowedKeyTypes = new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList(this, "allowed_key_types", false);
  public get allowedKeyTypes() {
    return this._allowedKeyTypes;
  }
  public putAllowedKeyTypes(value: GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes[] | cdktf.IResolvable) {
    this._allowedKeyTypes.internalValue = value;
  }
  public resetAllowedKeyTypes() {
    this._allowedKeyTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKeyTypesInput() {
    return this._allowedKeyTypes.internalValue;
  }

  // baseline_values - computed: false, optional: true, required: false
  private _baselineValues = new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(this, "baseline_values");
  public get baselineValues() {
    return this._baselineValues;
  }
  public putBaselineValues(value: GooglePrivatecaCaPoolIssuancePolicyBaselineValues) {
    this._baselineValues.internalValue = value;
  }
  public resetBaselineValues() {
    this._baselineValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineValuesInput() {
    return this._baselineValues.internalValue;
  }

  // identity_constraints - computed: false, optional: true, required: false
  private _identityConstraints = new GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(this, "identity_constraints");
  public get identityConstraints() {
    return this._identityConstraints;
  }
  public putIdentityConstraints(value: GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints) {
    this._identityConstraints.internalValue = value;
  }
  public resetIdentityConstraints() {
    this._identityConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConstraintsInput() {
    return this._identityConstraints.internalValue;
  }
}
export interface GooglePrivatecaCaPoolPublishingOptions {
  /**
  * Specifies the encoding format of each CertificateAuthority's CA
  * certificate and CRLs. If this is omitted, CA certificates and CRLs
  * will be published in PEM. Possible values: ["PEM", "DER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#encoding_format GooglePrivatecaCaPool#encoding_format}
  */
  readonly encodingFormat?: string;
  /**
  * When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access"
  * X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding
  * X.509 extension will not be written in issued certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#publish_ca_cert GooglePrivatecaCaPool#publish_ca_cert}
  */
  readonly publishCaCert: boolean | cdktf.IResolvable;
  /**
  * When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension
  * in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not
  * be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are
  * also rebuilt shortly after a certificate is revoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#publish_crl GooglePrivatecaCaPool#publish_crl}
  */
  readonly publishCrl: boolean | cdktf.IResolvable;
}

export function googlePrivatecaCaPoolPublishingOptionsToTerraform(struct?: GooglePrivatecaCaPoolPublishingOptionsOutputReference | GooglePrivatecaCaPoolPublishingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding_format: cdktf.stringToTerraform(struct!.encodingFormat),
    publish_ca_cert: cdktf.booleanToTerraform(struct!.publishCaCert),
    publish_crl: cdktf.booleanToTerraform(struct!.publishCrl),
  }
}


export function googlePrivatecaCaPoolPublishingOptionsToHclTerraform(struct?: GooglePrivatecaCaPoolPublishingOptionsOutputReference | GooglePrivatecaCaPoolPublishingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding_format: {
      value: cdktf.stringToHclTerraform(struct!.encodingFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_ca_cert: {
      value: cdktf.booleanToHclTerraform(struct!.publishCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    publish_crl: {
      value: cdktf.booleanToHclTerraform(struct!.publishCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivatecaCaPoolPublishingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCaPoolPublishingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encodingFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingFormat = this._encodingFormat;
    }
    if (this._publishCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCaCert = this._publishCaCert;
    }
    if (this._publishCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCrl = this._publishCrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCaPoolPublishingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encodingFormat = undefined;
      this._publishCaCert = undefined;
      this._publishCrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encodingFormat = value.encodingFormat;
      this._publishCaCert = value.publishCaCert;
      this._publishCrl = value.publishCrl;
    }
  }

  // encoding_format - computed: false, optional: true, required: false
  private _encodingFormat?: string; 
  public get encodingFormat() {
    return this.getStringAttribute('encoding_format');
  }
  public set encodingFormat(value: string) {
    this._encodingFormat = value;
  }
  public resetEncodingFormat() {
    this._encodingFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingFormatInput() {
    return this._encodingFormat;
  }

  // publish_ca_cert - computed: false, optional: false, required: true
  private _publishCaCert?: boolean | cdktf.IResolvable; 
  public get publishCaCert() {
    return this.getBooleanAttribute('publish_ca_cert');
  }
  public set publishCaCert(value: boolean | cdktf.IResolvable) {
    this._publishCaCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCaCertInput() {
    return this._publishCaCert;
  }

  // publish_crl - computed: false, optional: false, required: true
  private _publishCrl?: boolean | cdktf.IResolvable; 
  public get publishCrl() {
    return this.getBooleanAttribute('publish_crl');
  }
  public set publishCrl(value: boolean | cdktf.IResolvable) {
    this._publishCrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCrlInput() {
    return this._publishCrl;
  }
}
export interface GooglePrivatecaCaPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#create GooglePrivatecaCaPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#delete GooglePrivatecaCaPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#update GooglePrivatecaCaPool#update}
  */
  readonly update?: string;
}

export function googlePrivatecaCaPoolTimeoutsToTerraform(struct?: GooglePrivatecaCaPoolTimeouts | cdktf.IResolvable): any {
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


export function googlePrivatecaCaPoolTimeoutsToHclTerraform(struct?: GooglePrivatecaCaPoolTimeouts | cdktf.IResolvable): any {
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

export class GooglePrivatecaCaPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GooglePrivatecaCaPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GooglePrivatecaCaPoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool google_privateca_ca_pool}
*/
export class GooglePrivatecaCaPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privateca_ca_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GooglePrivatecaCaPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GooglePrivatecaCaPool to import
  * @param importFromId The id of the existing GooglePrivatecaCaPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GooglePrivatecaCaPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_privateca_ca_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privateca_ca_pool google_privateca_ca_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GooglePrivatecaCaPoolConfig
  */
  public constructor(scope: Construct, id: string, config: GooglePrivatecaCaPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_ca_pool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.16.0',
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
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._tier = config.tier;
    this._issuancePolicy.internalValue = config.issuancePolicy;
    this._publishingOptions.internalValue = config.publishingOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // issuance_policy - computed: false, optional: true, required: false
  private _issuancePolicy = new GooglePrivatecaCaPoolIssuancePolicyOutputReference(this, "issuance_policy");
  public get issuancePolicy() {
    return this._issuancePolicy;
  }
  public putIssuancePolicy(value: GooglePrivatecaCaPoolIssuancePolicy) {
    this._issuancePolicy.internalValue = value;
  }
  public resetIssuancePolicy() {
    this._issuancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuancePolicyInput() {
    return this._issuancePolicy.internalValue;
  }

  // publishing_options - computed: false, optional: true, required: false
  private _publishingOptions = new GooglePrivatecaCaPoolPublishingOptionsOutputReference(this, "publishing_options");
  public get publishingOptions() {
    return this._publishingOptions;
  }
  public putPublishingOptions(value: GooglePrivatecaCaPoolPublishingOptions) {
    this._publishingOptions.internalValue = value;
  }
  public resetPublishingOptions() {
    this._publishingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishingOptionsInput() {
    return this._publishingOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GooglePrivatecaCaPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GooglePrivatecaCaPoolTimeouts) {
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
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tier: cdktf.stringToTerraform(this._tier),
      issuance_policy: googlePrivatecaCaPoolIssuancePolicyToTerraform(this._issuancePolicy.internalValue),
      publishing_options: googlePrivatecaCaPoolPublishingOptionsToTerraform(this._publishingOptions.internalValue),
      timeouts: googlePrivatecaCaPoolTimeoutsToTerraform(this._timeouts.internalValue),
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
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuance_policy: {
        value: googlePrivatecaCaPoolIssuancePolicyToHclTerraform(this._issuancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivatecaCaPoolIssuancePolicyList",
      },
      publishing_options: {
        value: googlePrivatecaCaPoolPublishingOptionsToHclTerraform(this._publishingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivatecaCaPoolPublishingOptionsList",
      },
      timeouts: {
        value: googlePrivatecaCaPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GooglePrivatecaCaPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
