// https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret_asymmetric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleKmsSecretAsymmetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * The public key encrypted ciphertext in base64 encoding
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret_asymmetric#ciphertext DataGoogleKmsSecretAsymmetric#ciphertext}
  */
  readonly ciphertext: string;
  /**
  * The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret_asymmetric#crc32 DataGoogleKmsSecretAsymmetric#crc32}
  */
  readonly crc32?: string;
  /**
  * The fully qualified KMS crypto key version name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret_asymmetric#crypto_key_version DataGoogleKmsSecretAsymmetric#crypto_key_version}
  */
  readonly cryptoKeyVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret_asymmetric google_kms_secret_asymmetric}
*/
export class DataGoogleKmsSecretAsymmetric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_secret_asymmetric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret_asymmetric google_kms_secret_asymmetric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleKmsSecretAsymmetricConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleKmsSecretAsymmetricConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_secret_asymmetric',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ciphertext = config.ciphertext;
    this._crc32 = config.crc32;
    this._cryptoKeyVersion = config.cryptoKeyVersion;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext?: string; 
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextInput() {
    return this._ciphertext;
  }

  // crc32 - computed: false, optional: true, required: false
  private _crc32?: string; 
  public get crc32() {
    return this.getStringAttribute('crc32');
  }
  public set crc32(value: string) {
    this._crc32 = value;
  }
  public resetCrc32() {
    this._crc32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crc32Input() {
    return this._crc32;
  }

  // crypto_key_version - computed: false, optional: false, required: true
  private _cryptoKeyVersion?: string; 
  public get cryptoKeyVersion() {
    return this.getStringAttribute('crypto_key_version');
  }
  public set cryptoKeyVersion(value: string) {
    this._cryptoKeyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyVersionInput() {
    return this._cryptoKeyVersion;
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

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphertext: cdktf.stringToTerraform(this._ciphertext),
      crc32: cdktf.stringToTerraform(this._crc32),
      crypto_key_version: cdktf.stringToTerraform(this._cryptoKeyVersion),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
