// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseAndroidAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.
  * If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.
  * This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#api_key_id GoogleFirebaseAndroidApp#api_key_id}
  */
  readonly apiKeyId?: string;
  /**
  * (Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state
  * rather than deleted upon 'terraform destroy'. This is useful because the AndroidApp may be
  * serving traffic. Set to 'DELETE' to delete the AndroidApp. Defaults to 'DELETE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#deletion_policy GoogleFirebaseAndroidApp#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The user-assigned display name of the AndroidApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#display_name GoogleFirebaseAndroidApp#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#id GoogleFirebaseAndroidApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The canonical package name of the Android app as would appear in the Google Play
  * Developer Console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#package_name GoogleFirebaseAndroidApp#package_name}
  */
  readonly packageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#project GoogleFirebaseAndroidApp#project}
  */
  readonly project?: string;
  /**
  * The SHA1 certificate hashes for the AndroidApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#sha1_hashes GoogleFirebaseAndroidApp#sha1_hashes}
  */
  readonly sha1Hashes?: string[];
  /**
  * The SHA256 certificate hashes for the AndroidApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#sha256_hashes GoogleFirebaseAndroidApp#sha256_hashes}
  */
  readonly sha256Hashes?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#timeouts GoogleFirebaseAndroidApp#timeouts}
  */
  readonly timeouts?: GoogleFirebaseAndroidAppTimeouts;
}
export interface GoogleFirebaseAndroidAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#create GoogleFirebaseAndroidApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#delete GoogleFirebaseAndroidApp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#update GoogleFirebaseAndroidApp#update}
  */
  readonly update?: string;
}

export function googleFirebaseAndroidAppTimeoutsToTerraform(struct?: GoogleFirebaseAndroidAppTimeouts | cdktf.IResolvable): any {
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


export function googleFirebaseAndroidAppTimeoutsToHclTerraform(struct?: GoogleFirebaseAndroidAppTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirebaseAndroidAppTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseAndroidAppTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirebaseAndroidAppTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app google_firebase_android_app}
*/
export class GoogleFirebaseAndroidApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_android_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseAndroidApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseAndroidApp to import
  * @param importFromId The id of the existing GoogleFirebaseAndroidApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseAndroidApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_android_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_android_app google_firebase_android_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseAndroidAppConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseAndroidAppConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_android_app',
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
    this._apiKeyId = config.apiKeyId;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._packageName = config.packageName;
    this._project = config.project;
    this._sha1Hashes = config.sha1Hashes;
    this._sha256Hashes = config.sha256Hashes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_id - computed: true, optional: true, required: false
  private _apiKeyId?: string; 
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }
  public set apiKeyId(value: string) {
    this._apiKeyId = value;
  }
  public resetApiKeyId() {
    this._apiKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyIdInput() {
    return this._apiKeyId;
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_name - computed: false, optional: false, required: true
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
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

  // sha1_hashes - computed: false, optional: true, required: false
  private _sha1Hashes?: string[]; 
  public get sha1Hashes() {
    return this.getListAttribute('sha1_hashes');
  }
  public set sha1Hashes(value: string[]) {
    this._sha1Hashes = value;
  }
  public resetSha1Hashes() {
    this._sha1Hashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1HashesInput() {
    return this._sha1Hashes;
  }

  // sha256_hashes - computed: false, optional: true, required: false
  private _sha256Hashes?: string[]; 
  public get sha256Hashes() {
    return this.getListAttribute('sha256_hashes');
  }
  public set sha256Hashes(value: string[]) {
    this._sha256Hashes = value;
  }
  public resetSha256Hashes() {
    this._sha256Hashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256HashesInput() {
    return this._sha256Hashes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseAndroidAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseAndroidAppTimeouts) {
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
      api_key_id: cdktf.stringToTerraform(this._apiKeyId),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      package_name: cdktf.stringToTerraform(this._packageName),
      project: cdktf.stringToTerraform(this._project),
      sha1_hashes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sha1Hashes),
      sha256_hashes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sha256Hashes),
      timeouts: googleFirebaseAndroidAppTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_id: {
        value: cdktf.stringToHclTerraform(this._apiKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_name: {
        value: cdktf.stringToHclTerraform(this._packageName),
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
      sha1_hashes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sha1Hashes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sha256_hashes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sha256Hashes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: googleFirebaseAndroidAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseAndroidAppTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
