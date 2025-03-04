/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseHostingChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. Immutable. A unique ID within the site that identifies the channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#channel_id GoogleFirebaseHostingChannel#channel_id}
  */
  readonly channelId: string;
  /**
  * The time at which the channel will be automatically deleted. If null, the channel
  * will not be automatically deleted. This field is present in the output whether it's
  * set directly or via the 'ttl' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#expire_time GoogleFirebaseHostingChannel#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#id GoogleFirebaseHostingChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Text labels used for extra metadata and/or filtering
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#labels GoogleFirebaseHostingChannel#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of previous releases to retain on the channel for rollback or other
  * purposes. Must be a number between 1-100. Defaults to 10 for new channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#retained_release_count GoogleFirebaseHostingChannel#retained_release_count}
  */
  readonly retainedReleaseCount?: number;
  /**
  * Required. The ID of the site in which to create this channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#site_id GoogleFirebaseHostingChannel#site_id}
  */
  readonly siteId: string;
  /**
  * Input only. A time-to-live for this channel. Sets 'expire_time' to the provided
  * duration past the time of the request. A duration in seconds with up to nine fractional
  * digits, terminated by 's'. Example: "86400s" (one day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#ttl GoogleFirebaseHostingChannel#ttl}
  */
  readonly ttl?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#timeouts GoogleFirebaseHostingChannel#timeouts}
  */
  readonly timeouts?: GoogleFirebaseHostingChannelTimeouts;
}
export interface GoogleFirebaseHostingChannelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#create GoogleFirebaseHostingChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#delete GoogleFirebaseHostingChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#update GoogleFirebaseHostingChannel#update}
  */
  readonly update?: string;
}

export function googleFirebaseHostingChannelTimeoutsToTerraform(struct?: GoogleFirebaseHostingChannelTimeouts | cdktf.IResolvable): any {
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


export function googleFirebaseHostingChannelTimeoutsToHclTerraform(struct?: GoogleFirebaseHostingChannelTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirebaseHostingChannelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseHostingChannelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirebaseHostingChannelTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel google_firebase_hosting_channel}
*/
export class GoogleFirebaseHostingChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_hosting_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseHostingChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseHostingChannel to import
  * @param importFromId The id of the existing GoogleFirebaseHostingChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseHostingChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_hosting_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_hosting_channel google_firebase_hosting_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseHostingChannelConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseHostingChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_hosting_channel',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.24.0',
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
    this._channelId = config.channelId;
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._labels = config.labels;
    this._retainedReleaseCount = config.retainedReleaseCount;
    this._siteId = config.siteId;
    this._ttl = config.ttl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retained_release_count - computed: true, optional: true, required: false
  private _retainedReleaseCount?: number; 
  public get retainedReleaseCount() {
    return this.getNumberAttribute('retained_release_count');
  }
  public set retainedReleaseCount(value: number) {
    this._retainedReleaseCount = value;
  }
  public resetRetainedReleaseCount() {
    this._retainedReleaseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainedReleaseCountInput() {
    return this._retainedReleaseCount;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseHostingChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseHostingChannelTimeouts) {
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
      channel_id: cdktf.stringToTerraform(this._channelId),
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      retained_release_count: cdktf.numberToTerraform(this._retainedReleaseCount),
      site_id: cdktf.stringToTerraform(this._siteId),
      ttl: cdktf.stringToTerraform(this._ttl),
      timeouts: googleFirebaseHostingChannelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_id: {
        value: cdktf.stringToHclTerraform(this._channelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_time: {
        value: cdktf.stringToHclTerraform(this._expireTime),
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
      retained_release_count: {
        value: cdktf.numberToHclTerraform(this._retainedReleaseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleFirebaseHostingChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseHostingChannelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
