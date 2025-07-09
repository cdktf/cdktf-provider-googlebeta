/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleApigeeSecurityProfileV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Description of the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#description GoogleApigeeSecurityProfileV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#id GoogleApigeeSecurityProfileV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Apigee Organization associated with the Apigee Security Profile V2,
  * in the format 'organizations/{{org_name}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#org_id GoogleApigeeSecurityProfileV2#org_id}
  */
  readonly orgId: string;
  /**
  * Resource ID of the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#profile_id GoogleApigeeSecurityProfileV2#profile_id}
  */
  readonly profileId: string;
  /**
  * profile_assessment_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#profile_assessment_configs GoogleApigeeSecurityProfileV2#profile_assessment_configs}
  */
  readonly profileAssessmentConfigs: GoogleApigeeSecurityProfileV2ProfileAssessmentConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#timeouts GoogleApigeeSecurityProfileV2#timeouts}
  */
  readonly timeouts?: GoogleApigeeSecurityProfileV2Timeouts;
}
export interface GoogleApigeeSecurityProfileV2ProfileAssessmentConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#assessment GoogleApigeeSecurityProfileV2#assessment}
  */
  readonly assessment: string;
  /**
  * The weight of the assessment. Possible values: ["MINOR", "MODERATE", "MAJOR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#weight GoogleApigeeSecurityProfileV2#weight}
  */
  readonly weight: string;
}

export function googleApigeeSecurityProfileV2ProfileAssessmentConfigsToTerraform(struct?: GoogleApigeeSecurityProfileV2ProfileAssessmentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assessment: cdktf.stringToTerraform(struct!.assessment),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function googleApigeeSecurityProfileV2ProfileAssessmentConfigsToHclTerraform(struct?: GoogleApigeeSecurityProfileV2ProfileAssessmentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assessment: {
      value: cdktf.stringToHclTerraform(struct!.assessment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApigeeSecurityProfileV2ProfileAssessmentConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assessment !== undefined) {
      hasAnyValues = true;
      internalValueResult.assessment = this._assessment;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeSecurityProfileV2ProfileAssessmentConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assessment = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assessment = value.assessment;
      this._weight = value.weight;
    }
  }

  // assessment - computed: false, optional: false, required: true
  private _assessment?: string; 
  public get assessment() {
    return this.getStringAttribute('assessment');
  }
  public set assessment(value: string) {
    this._assessment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentInput() {
    return this._assessment;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GoogleApigeeSecurityProfileV2ProfileAssessmentConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleApigeeSecurityProfileV2ProfileAssessmentConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference {
    return new GoogleApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApigeeSecurityProfileV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#create GoogleApigeeSecurityProfileV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#delete GoogleApigeeSecurityProfileV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#update GoogleApigeeSecurityProfileV2#update}
  */
  readonly update?: string;
}

export function googleApigeeSecurityProfileV2TimeoutsToTerraform(struct?: GoogleApigeeSecurityProfileV2Timeouts | cdktf.IResolvable): any {
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


export function googleApigeeSecurityProfileV2TimeoutsToHclTerraform(struct?: GoogleApigeeSecurityProfileV2Timeouts | cdktf.IResolvable): any {
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

export class GoogleApigeeSecurityProfileV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleApigeeSecurityProfileV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApigeeSecurityProfileV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2 google_apigee_security_profile_v2}
*/
export class GoogleApigeeSecurityProfileV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_security_profile_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleApigeeSecurityProfileV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleApigeeSecurityProfileV2 to import
  * @param importFromId The id of the existing GoogleApigeeSecurityProfileV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleApigeeSecurityProfileV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_security_profile_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_apigee_security_profile_v2 google_apigee_security_profile_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApigeeSecurityProfileV2Config
  */
  public constructor(scope: Construct, id: string, config: GoogleApigeeSecurityProfileV2Config) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_security_profile_v2',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.43.0',
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
    this._orgId = config.orgId;
    this._profileId = config.profileId;
    this._profileAssessmentConfigs.internalValue = config.profileAssessmentConfigs;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // profile_assessment_configs - computed: false, optional: false, required: true
  private _profileAssessmentConfigs = new GoogleApigeeSecurityProfileV2ProfileAssessmentConfigsList(this, "profile_assessment_configs", true);
  public get profileAssessmentConfigs() {
    return this._profileAssessmentConfigs;
  }
  public putProfileAssessmentConfigs(value: GoogleApigeeSecurityProfileV2ProfileAssessmentConfigs[] | cdktf.IResolvable) {
    this._profileAssessmentConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAssessmentConfigsInput() {
    return this._profileAssessmentConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApigeeSecurityProfileV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApigeeSecurityProfileV2Timeouts) {
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
      org_id: cdktf.stringToTerraform(this._orgId),
      profile_id: cdktf.stringToTerraform(this._profileId),
      profile_assessment_configs: cdktf.listMapper(googleApigeeSecurityProfileV2ProfileAssessmentConfigsToTerraform, true)(this._profileAssessmentConfigs.internalValue),
      timeouts: googleApigeeSecurityProfileV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_assessment_configs: {
        value: cdktf.listMapperHcl(googleApigeeSecurityProfileV2ProfileAssessmentConfigsToHclTerraform, true)(this._profileAssessmentConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleApigeeSecurityProfileV2ProfileAssessmentConfigsList",
      },
      timeouts: {
        value: googleApigeeSecurityProfileV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleApigeeSecurityProfileV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
