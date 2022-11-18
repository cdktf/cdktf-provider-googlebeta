// https://www.terraform.io/docs/providers/google-beta/r/google_storage_object_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleStorageObjectAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_object_acl#bucket GoogleStorageObjectAcl#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_object_acl#id GoogleStorageObjectAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_object_acl#object GoogleStorageObjectAcl#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_object_acl#predefined_acl GoogleStorageObjectAcl#predefined_acl}
  */
  readonly predefinedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_object_acl#role_entity GoogleStorageObjectAcl#role_entity}
  */
  readonly roleEntity?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_object_acl google_storage_object_acl}
*/
export class GoogleStorageObjectAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_object_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_object_acl google_storage_object_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleStorageObjectAclConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleStorageObjectAclConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_object_acl',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.43.1',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._object = config.object;
    this._predefinedAcl = config.predefinedAcl;
    this._roleEntity = config.roleEntity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // predefined_acl - computed: false, optional: true, required: false
  private _predefinedAcl?: string; 
  public get predefinedAcl() {
    return this.getStringAttribute('predefined_acl');
  }
  public set predefinedAcl(value: string) {
    this._predefinedAcl = value;
  }
  public resetPredefinedAcl() {
    this._predefinedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedAclInput() {
    return this._predefinedAcl;
  }

  // role_entity - computed: true, optional: true, required: false
  private _roleEntity?: string[]; 
  public get roleEntity() {
    return cdktf.Fn.tolist(this.getListAttribute('role_entity'));
  }
  public set roleEntity(value: string[]) {
    this._roleEntity = value;
  }
  public resetRoleEntity() {
    this._roleEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleEntityInput() {
    return this._roleEntity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      object: cdktf.stringToTerraform(this._object),
      predefined_acl: cdktf.stringToTerraform(this._predefinedAcl),
      role_entity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleEntity),
    };
  }
}
