// https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleKmsAutokeyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The folder for which to retrieve config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config#folder GoogleKmsAutokeyConfig#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config#id GoogleKmsAutokeyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The target key project for a given folder where KMS Autokey will provision a
  * CryptoKey for any new KeyHandle the Developer creates. Should have the form
  * 'projects/<project_id_or_number>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config#key_project GoogleKmsAutokeyConfig#key_project}
  */
  readonly keyProject?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config#timeouts GoogleKmsAutokeyConfig#timeouts}
  */
  readonly timeouts?: GoogleKmsAutokeyConfigTimeouts;
}
export interface GoogleKmsAutokeyConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config#create GoogleKmsAutokeyConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config#delete GoogleKmsAutokeyConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config#update GoogleKmsAutokeyConfig#update}
  */
  readonly update?: string;
}

export function googleKmsAutokeyConfigTimeoutsToTerraform(struct?: GoogleKmsAutokeyConfigTimeouts | cdktf.IResolvable): any {
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


export function googleKmsAutokeyConfigTimeoutsToHclTerraform(struct?: GoogleKmsAutokeyConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleKmsAutokeyConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleKmsAutokeyConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleKmsAutokeyConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config google_kms_autokey_config}
*/
export class GoogleKmsAutokeyConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_autokey_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleKmsAutokeyConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleKmsAutokeyConfig to import
  * @param importFromId The id of the existing GoogleKmsAutokeyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleKmsAutokeyConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_kms_autokey_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_kms_autokey_config google_kms_autokey_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleKmsAutokeyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleKmsAutokeyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_autokey_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.33.0',
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
    this._folder = config.folder;
    this._id = config.id;
    this._keyProject = config.keyProject;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // key_project - computed: false, optional: true, required: false
  private _keyProject?: string; 
  public get keyProject() {
    return this.getStringAttribute('key_project');
  }
  public set keyProject(value: string) {
    this._keyProject = value;
  }
  public resetKeyProject() {
    this._keyProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyProjectInput() {
    return this._keyProject;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleKmsAutokeyConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleKmsAutokeyConfigTimeouts) {
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
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      key_project: cdktf.stringToTerraform(this._keyProject),
      timeouts: googleKmsAutokeyConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      key_project: {
        value: cdktf.stringToHclTerraform(this._keyProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleKmsAutokeyConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleKmsAutokeyConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
