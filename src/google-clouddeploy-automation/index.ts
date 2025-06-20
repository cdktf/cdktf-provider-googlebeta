/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleClouddeployAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#annotations GoogleClouddeployAutomation#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The delivery_pipeline for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#delivery_pipeline GoogleClouddeployAutomation#delivery_pipeline}
  */
  readonly deliveryPipeline: string;
  /**
  * Optional. Description of the 'Automation'. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#description GoogleClouddeployAutomation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#location GoogleClouddeployAutomation#location}
  */
  readonly location: string;
  /**
  * Name of the 'Automation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#name GoogleClouddeployAutomation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}
  */
  readonly project?: string;
  /**
  * Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#service_account GoogleClouddeployAutomation#service_account}
  */
  readonly serviceAccount: string;
  /**
  * Optional. When Suspended, automation is deactivated from execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#suspended GoogleClouddeployAutomation#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#rules GoogleClouddeployAutomation#rules}
  */
  readonly rules: GoogleClouddeployAutomationRules[] | cdktf.IResolvable;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#selector GoogleClouddeployAutomation#selector}
  */
  readonly selector: GoogleClouddeployAutomationSelector;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#timeouts GoogleClouddeployAutomation#timeouts}
  */
  readonly timeouts?: GoogleClouddeployAutomationTimeouts;
}
export interface GoogleClouddeployAutomationRulesAdvanceRolloutRule {
  /**
  * Required. ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#source_phases GoogleClouddeployAutomation#source_phases}
  */
  readonly sourcePhases?: string[];
  /**
  * Optional. How long to wait after a rollout is finished.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}
  */
  readonly wait?: string;
}

export function googleClouddeployAutomationRulesAdvanceRolloutRuleToTerraform(struct?: GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference | GoogleClouddeployAutomationRulesAdvanceRolloutRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    source_phases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePhases),
    wait: cdktf.stringToTerraform(struct!.wait),
  }
}


export function googleClouddeployAutomationRulesAdvanceRolloutRuleToHclTerraform(struct?: GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference | GoogleClouddeployAutomationRulesAdvanceRolloutRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_phases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePhases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wait: {
      value: cdktf.stringToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployAutomationRulesAdvanceRolloutRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._sourcePhases !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePhases = this._sourcePhases;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationRulesAdvanceRolloutRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._sourcePhases = undefined;
      this._wait = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._sourcePhases = value.sourcePhases;
      this._wait = value.wait;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // source_phases - computed: false, optional: true, required: false
  private _sourcePhases?: string[]; 
  public get sourcePhases() {
    return this.getListAttribute('source_phases');
  }
  public set sourcePhases(value: string[]) {
    this._sourcePhases = value;
  }
  public resetSourcePhases() {
    this._sourcePhases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePhasesInput() {
    return this._sourcePhases;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: string; 
  public get wait() {
    return this.getStringAttribute('wait');
  }
  public set wait(value: string) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}
export interface GoogleClouddeployAutomationRulesPromoteReleaseRule {
  /**
  * Optional. The starting phase of the rollout created by this operation. Default to the first phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}
  */
  readonly destinationPhase?: string;
  /**
  * Optional. The ID of the stage in the pipeline to which this 'Release' is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#destination_target_id GoogleClouddeployAutomation#destination_target_id}
  */
  readonly destinationTargetId?: string;
  /**
  * Required. ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. How long the release need to be paused until being promoted to the next target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}
  */
  readonly wait?: string;
}

export function googleClouddeployAutomationRulesPromoteReleaseRuleToTerraform(struct?: GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference | GoogleClouddeployAutomationRulesPromoteReleaseRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_phase: cdktf.stringToTerraform(struct!.destinationPhase),
    destination_target_id: cdktf.stringToTerraform(struct!.destinationTargetId),
    id: cdktf.stringToTerraform(struct!.id),
    wait: cdktf.stringToTerraform(struct!.wait),
  }
}


export function googleClouddeployAutomationRulesPromoteReleaseRuleToHclTerraform(struct?: GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference | GoogleClouddeployAutomationRulesPromoteReleaseRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_phase: {
      value: cdktf.stringToHclTerraform(struct!.destinationPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_target_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.stringToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployAutomationRulesPromoteReleaseRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPhase = this._destinationPhase;
    }
    if (this._destinationTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTargetId = this._destinationTargetId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationRulesPromoteReleaseRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPhase = undefined;
      this._destinationTargetId = undefined;
      this._id = undefined;
      this._wait = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPhase = value.destinationPhase;
      this._destinationTargetId = value.destinationTargetId;
      this._id = value.id;
      this._wait = value.wait;
    }
  }

  // destination_phase - computed: false, optional: true, required: false
  private _destinationPhase?: string; 
  public get destinationPhase() {
    return this.getStringAttribute('destination_phase');
  }
  public set destinationPhase(value: string) {
    this._destinationPhase = value;
  }
  public resetDestinationPhase() {
    this._destinationPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPhaseInput() {
    return this._destinationPhase;
  }

  // destination_target_id - computed: false, optional: true, required: false
  private _destinationTargetId?: string; 
  public get destinationTargetId() {
    return this.getStringAttribute('destination_target_id');
  }
  public set destinationTargetId(value: string) {
    this._destinationTargetId = value;
  }
  public resetDestinationTargetId() {
    this._destinationTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTargetIdInput() {
    return this._destinationTargetId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: string; 
  public get wait() {
    return this.getStringAttribute('wait');
  }
  public set wait(value: string) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}
export interface GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry {
  /**
  * Required. Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#attempts GoogleClouddeployAutomation#attempts}
  */
  readonly attempts: string;
  /**
  * Optional. The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if wait is 0. Possible values: ["BACKOFF_MODE_UNSPECIFIED", "BACKOFF_MODE_LINEAR", "BACKOFF_MODE_EXPONENTIAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#backoff_mode GoogleClouddeployAutomation#backoff_mode}
  */
  readonly backoffMode?: string;
  /**
  * Optional. How long to wait for the first retry. Default is 0, and the maximum value is 14d. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}
  */
  readonly wait?: string;
}

export function googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryToTerraform(struct?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference | GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.stringToTerraform(struct!.attempts),
    backoff_mode: cdktf.stringToTerraform(struct!.backoffMode),
    wait: cdktf.stringToTerraform(struct!.wait),
  }
}


export function googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryToHclTerraform(struct?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference | GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.stringToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff_mode: {
      value: cdktf.stringToHclTerraform(struct!.backoffMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.stringToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._backoffMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffMode = this._backoffMode;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attempts = undefined;
      this._backoffMode = undefined;
      this._wait = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attempts = value.attempts;
      this._backoffMode = value.backoffMode;
      this._wait = value.wait;
    }
  }

  // attempts - computed: false, optional: false, required: true
  private _attempts?: string; 
  public get attempts() {
    return this.getStringAttribute('attempts');
  }
  public set attempts(value: string) {
    this._attempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // backoff_mode - computed: false, optional: true, required: false
  private _backoffMode?: string; 
  public get backoffMode() {
    return this.getStringAttribute('backoff_mode');
  }
  public set backoffMode(value: string) {
    this._backoffMode = value;
  }
  public resetBackoffMode() {
    this._backoffMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffModeInput() {
    return this._backoffMode;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: string; 
  public get wait() {
    return this.getStringAttribute('wait');
  }
  public set wait(value: string) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}
export interface GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback {
  /**
  * Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}
  */
  readonly destinationPhase?: string;
  /**
  * Optional. If pending rollout exists on the target, the rollback operation will be aborted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#disable_rollback_if_rollout_pending GoogleClouddeployAutomation#disable_rollback_if_rollout_pending}
  */
  readonly disableRollbackIfRolloutPending?: boolean | cdktf.IResolvable;
}

export function googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackToTerraform(struct?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference | GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_phase: cdktf.stringToTerraform(struct!.destinationPhase),
    disable_rollback_if_rollout_pending: cdktf.booleanToTerraform(struct!.disableRollbackIfRolloutPending),
  }
}


export function googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackToHclTerraform(struct?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference | GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_phase: {
      value: cdktf.stringToHclTerraform(struct!.destinationPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_rollback_if_rollout_pending: {
      value: cdktf.booleanToHclTerraform(struct!.disableRollbackIfRolloutPending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPhase = this._destinationPhase;
    }
    if (this._disableRollbackIfRolloutPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRollbackIfRolloutPending = this._disableRollbackIfRolloutPending;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPhase = undefined;
      this._disableRollbackIfRolloutPending = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPhase = value.destinationPhase;
      this._disableRollbackIfRolloutPending = value.disableRollbackIfRolloutPending;
    }
  }

  // destination_phase - computed: false, optional: true, required: false
  private _destinationPhase?: string; 
  public get destinationPhase() {
    return this.getStringAttribute('destination_phase');
  }
  public set destinationPhase(value: string) {
    this._destinationPhase = value;
  }
  public resetDestinationPhase() {
    this._destinationPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPhaseInput() {
    return this._destinationPhase;
  }

  // disable_rollback_if_rollout_pending - computed: false, optional: true, required: false
  private _disableRollbackIfRolloutPending?: boolean | cdktf.IResolvable; 
  public get disableRollbackIfRolloutPending() {
    return this.getBooleanAttribute('disable_rollback_if_rollout_pending');
  }
  public set disableRollbackIfRolloutPending(value: boolean | cdktf.IResolvable) {
    this._disableRollbackIfRolloutPending = value;
  }
  public resetDisableRollbackIfRolloutPending() {
    this._disableRollbackIfRolloutPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRollbackIfRolloutPendingInput() {
    return this._disableRollbackIfRolloutPending;
  }
}
export interface GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases {
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#retry GoogleClouddeployAutomation#retry}
  */
  readonly retry?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry;
  /**
  * rollback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#rollback GoogleClouddeployAutomation#rollback}
  */
  readonly rollback?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback;
}

export function googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesToTerraform(struct?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retry: googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryToTerraform(struct!.retry),
    rollback: googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackToTerraform(struct!.rollback),
  }
}


export function googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesToHclTerraform(struct?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retry: {
      value: googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryList",
    },
    rollback: {
      value: googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackToHclTerraform(struct!.rollback),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._rollback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollback = this._rollback?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retry.internalValue = undefined;
      this._rollback.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retry.internalValue = value.retry;
      this._rollback.internalValue = value.rollback;
    }
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // rollback - computed: false, optional: true, required: false
  private _rollback = new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference(this, "rollback");
  public get rollback() {
    return this._rollback;
  }
  public putRollback(value: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback) {
    this._rollback.internalValue = value;
  }
  public resetRollback() {
    this._rollback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback.internalValue;
  }
}

export class GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference {
    return new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployAutomationRulesRepairRolloutRule {
  /**
  * Required. ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in sourcePhase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#jobs GoogleClouddeployAutomation#jobs}
  */
  readonly jobs?: string[];
  /**
  * Optional. Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#phases GoogleClouddeployAutomation#phases}
  */
  readonly phases?: string[];
  /**
  * repair_phases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#repair_phases GoogleClouddeployAutomation#repair_phases}
  */
  readonly repairPhases?: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases[] | cdktf.IResolvable;
}

export function googleClouddeployAutomationRulesRepairRolloutRuleToTerraform(struct?: GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference | GoogleClouddeployAutomationRulesRepairRolloutRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    jobs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jobs),
    phases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phases),
    repair_phases: cdktf.listMapper(googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesToTerraform, true)(struct!.repairPhases),
  }
}


export function googleClouddeployAutomationRulesRepairRolloutRuleToHclTerraform(struct?: GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference | GoogleClouddeployAutomationRulesRepairRolloutRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jobs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jobs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    phases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repair_phases: {
      value: cdktf.listMapperHcl(googleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesToHclTerraform, true)(struct!.repairPhases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployAutomationRulesRepairRolloutRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._phases !== undefined) {
      hasAnyValues = true;
      internalValueResult.phases = this._phases;
    }
    if (this._repairPhases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repairPhases = this._repairPhases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationRulesRepairRolloutRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._jobs = undefined;
      this._phases = undefined;
      this._repairPhases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._jobs = value.jobs;
      this._phases = value.phases;
      this._repairPhases.internalValue = value.repairPhases;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs?: string[]; 
  public get jobs() {
    return this.getListAttribute('jobs');
  }
  public set jobs(value: string[]) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // phases - computed: false, optional: true, required: false
  private _phases?: string[]; 
  public get phases() {
    return this.getListAttribute('phases');
  }
  public set phases(value: string[]) {
    this._phases = value;
  }
  public resetPhases() {
    this._phases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phasesInput() {
    return this._phases;
  }

  // repair_phases - computed: false, optional: true, required: false
  private _repairPhases = new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList(this, "repair_phases", false);
  public get repairPhases() {
    return this._repairPhases;
  }
  public putRepairPhases(value: GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases[] | cdktf.IResolvable) {
    this._repairPhases.internalValue = value;
  }
  public resetRepairPhases() {
    this._repairPhases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repairPhasesInput() {
    return this._repairPhases.internalValue;
  }
}
export interface GoogleClouddeployAutomationRulesTimedPromoteReleaseRule {
  /**
  * Optional. The starting phase of the rollout created by this rule. Default to the first phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}
  */
  readonly destinationPhase?: string;
  /**
  * Optional. The ID of the stage in the pipeline to which this Release is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following:
  *   - The last segment of a target name
  *   - "@next", the next target in the promotion sequence"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#destination_target_id GoogleClouddeployAutomation#destination_target_id}
  */
  readonly destinationTargetId?: string;
  /**
  * Required. ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#schedule GoogleClouddeployAutomation#schedule}
  */
  readonly schedule: string;
  /**
  * Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#time_zone GoogleClouddeployAutomation#time_zone}
  */
  readonly timeZone: string;
}

export function googleClouddeployAutomationRulesTimedPromoteReleaseRuleToTerraform(struct?: GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference | GoogleClouddeployAutomationRulesTimedPromoteReleaseRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_phase: cdktf.stringToTerraform(struct!.destinationPhase),
    destination_target_id: cdktf.stringToTerraform(struct!.destinationTargetId),
    id: cdktf.stringToTerraform(struct!.id),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function googleClouddeployAutomationRulesTimedPromoteReleaseRuleToHclTerraform(struct?: GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference | GoogleClouddeployAutomationRulesTimedPromoteReleaseRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_phase: {
      value: cdktf.stringToHclTerraform(struct!.destinationPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_target_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployAutomationRulesTimedPromoteReleaseRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPhase = this._destinationPhase;
    }
    if (this._destinationTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTargetId = this._destinationTargetId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationRulesTimedPromoteReleaseRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPhase = undefined;
      this._destinationTargetId = undefined;
      this._id = undefined;
      this._schedule = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPhase = value.destinationPhase;
      this._destinationTargetId = value.destinationTargetId;
      this._id = value.id;
      this._schedule = value.schedule;
      this._timeZone = value.timeZone;
    }
  }

  // destination_phase - computed: false, optional: true, required: false
  private _destinationPhase?: string; 
  public get destinationPhase() {
    return this.getStringAttribute('destination_phase');
  }
  public set destinationPhase(value: string) {
    this._destinationPhase = value;
  }
  public resetDestinationPhase() {
    this._destinationPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPhaseInput() {
    return this._destinationPhase;
  }

  // destination_target_id - computed: false, optional: true, required: false
  private _destinationTargetId?: string; 
  public get destinationTargetId() {
    return this.getStringAttribute('destination_target_id');
  }
  public set destinationTargetId(value: string) {
    this._destinationTargetId = value;
  }
  public resetDestinationTargetId() {
    this._destinationTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTargetIdInput() {
    return this._destinationTargetId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface GoogleClouddeployAutomationRules {
  /**
  * advance_rollout_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#advance_rollout_rule GoogleClouddeployAutomation#advance_rollout_rule}
  */
  readonly advanceRolloutRule?: GoogleClouddeployAutomationRulesAdvanceRolloutRule;
  /**
  * promote_release_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#promote_release_rule GoogleClouddeployAutomation#promote_release_rule}
  */
  readonly promoteReleaseRule?: GoogleClouddeployAutomationRulesPromoteReleaseRule;
  /**
  * repair_rollout_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#repair_rollout_rule GoogleClouddeployAutomation#repair_rollout_rule}
  */
  readonly repairRolloutRule?: GoogleClouddeployAutomationRulesRepairRolloutRule;
  /**
  * timed_promote_release_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#timed_promote_release_rule GoogleClouddeployAutomation#timed_promote_release_rule}
  */
  readonly timedPromoteReleaseRule?: GoogleClouddeployAutomationRulesTimedPromoteReleaseRule;
}

export function googleClouddeployAutomationRulesToTerraform(struct?: GoogleClouddeployAutomationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advance_rollout_rule: googleClouddeployAutomationRulesAdvanceRolloutRuleToTerraform(struct!.advanceRolloutRule),
    promote_release_rule: googleClouddeployAutomationRulesPromoteReleaseRuleToTerraform(struct!.promoteReleaseRule),
    repair_rollout_rule: googleClouddeployAutomationRulesRepairRolloutRuleToTerraform(struct!.repairRolloutRule),
    timed_promote_release_rule: googleClouddeployAutomationRulesTimedPromoteReleaseRuleToTerraform(struct!.timedPromoteReleaseRule),
  }
}


export function googleClouddeployAutomationRulesToHclTerraform(struct?: GoogleClouddeployAutomationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advance_rollout_rule: {
      value: googleClouddeployAutomationRulesAdvanceRolloutRuleToHclTerraform(struct!.advanceRolloutRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployAutomationRulesAdvanceRolloutRuleList",
    },
    promote_release_rule: {
      value: googleClouddeployAutomationRulesPromoteReleaseRuleToHclTerraform(struct!.promoteReleaseRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployAutomationRulesPromoteReleaseRuleList",
    },
    repair_rollout_rule: {
      value: googleClouddeployAutomationRulesRepairRolloutRuleToHclTerraform(struct!.repairRolloutRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployAutomationRulesRepairRolloutRuleList",
    },
    timed_promote_release_rule: {
      value: googleClouddeployAutomationRulesTimedPromoteReleaseRuleToHclTerraform(struct!.timedPromoteReleaseRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployAutomationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanceRolloutRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanceRolloutRule = this._advanceRolloutRule?.internalValue;
    }
    if (this._promoteReleaseRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promoteReleaseRule = this._promoteReleaseRule?.internalValue;
    }
    if (this._repairRolloutRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repairRolloutRule = this._repairRolloutRule?.internalValue;
    }
    if (this._timedPromoteReleaseRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedPromoteReleaseRule = this._timedPromoteReleaseRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advanceRolloutRule.internalValue = undefined;
      this._promoteReleaseRule.internalValue = undefined;
      this._repairRolloutRule.internalValue = undefined;
      this._timedPromoteReleaseRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advanceRolloutRule.internalValue = value.advanceRolloutRule;
      this._promoteReleaseRule.internalValue = value.promoteReleaseRule;
      this._repairRolloutRule.internalValue = value.repairRolloutRule;
      this._timedPromoteReleaseRule.internalValue = value.timedPromoteReleaseRule;
    }
  }

  // advance_rollout_rule - computed: false, optional: true, required: false
  private _advanceRolloutRule = new GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference(this, "advance_rollout_rule");
  public get advanceRolloutRule() {
    return this._advanceRolloutRule;
  }
  public putAdvanceRolloutRule(value: GoogleClouddeployAutomationRulesAdvanceRolloutRule) {
    this._advanceRolloutRule.internalValue = value;
  }
  public resetAdvanceRolloutRule() {
    this._advanceRolloutRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advanceRolloutRuleInput() {
    return this._advanceRolloutRule.internalValue;
  }

  // promote_release_rule - computed: false, optional: true, required: false
  private _promoteReleaseRule = new GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference(this, "promote_release_rule");
  public get promoteReleaseRule() {
    return this._promoteReleaseRule;
  }
  public putPromoteReleaseRule(value: GoogleClouddeployAutomationRulesPromoteReleaseRule) {
    this._promoteReleaseRule.internalValue = value;
  }
  public resetPromoteReleaseRule() {
    this._promoteReleaseRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoteReleaseRuleInput() {
    return this._promoteReleaseRule.internalValue;
  }

  // repair_rollout_rule - computed: false, optional: true, required: false
  private _repairRolloutRule = new GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference(this, "repair_rollout_rule");
  public get repairRolloutRule() {
    return this._repairRolloutRule;
  }
  public putRepairRolloutRule(value: GoogleClouddeployAutomationRulesRepairRolloutRule) {
    this._repairRolloutRule.internalValue = value;
  }
  public resetRepairRolloutRule() {
    this._repairRolloutRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repairRolloutRuleInput() {
    return this._repairRolloutRule.internalValue;
  }

  // timed_promote_release_rule - computed: false, optional: true, required: false
  private _timedPromoteReleaseRule = new GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference(this, "timed_promote_release_rule");
  public get timedPromoteReleaseRule() {
    return this._timedPromoteReleaseRule;
  }
  public putTimedPromoteReleaseRule(value: GoogleClouddeployAutomationRulesTimedPromoteReleaseRule) {
    this._timedPromoteReleaseRule.internalValue = value;
  }
  public resetTimedPromoteReleaseRule() {
    this._timedPromoteReleaseRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedPromoteReleaseRuleInput() {
    return this._timedPromoteReleaseRule.internalValue;
  }
}

export class GoogleClouddeployAutomationRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployAutomationRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployAutomationRulesOutputReference {
    return new GoogleClouddeployAutomationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployAutomationSelectorTargets {
  /**
  * ID of the 'Target'. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function googleClouddeployAutomationSelectorTargetsToTerraform(struct?: GoogleClouddeployAutomationSelectorTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function googleClouddeployAutomationSelectorTargetsToHclTerraform(struct?: GoogleClouddeployAutomationSelectorTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationSelectorTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployAutomationSelectorTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationSelectorTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._labels = value.labels;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class GoogleClouddeployAutomationSelectorTargetsList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployAutomationSelectorTargets[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployAutomationSelectorTargetsOutputReference {
    return new GoogleClouddeployAutomationSelectorTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployAutomationSelector {
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#targets GoogleClouddeployAutomation#targets}
  */
  readonly targets: GoogleClouddeployAutomationSelectorTargets[] | cdktf.IResolvable;
}

export function googleClouddeployAutomationSelectorToTerraform(struct?: GoogleClouddeployAutomationSelectorOutputReference | GoogleClouddeployAutomationSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(googleClouddeployAutomationSelectorTargetsToTerraform, true)(struct!.targets),
  }
}


export function googleClouddeployAutomationSelectorToHclTerraform(struct?: GoogleClouddeployAutomationSelectorOutputReference | GoogleClouddeployAutomationSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(googleClouddeployAutomationSelectorTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployAutomationSelectorTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployAutomationSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployAutomationSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployAutomationSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targets.internalValue = value.targets;
    }
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new GoogleClouddeployAutomationSelectorTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: GoogleClouddeployAutomationSelectorTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface GoogleClouddeployAutomationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#create GoogleClouddeployAutomation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#delete GoogleClouddeployAutomation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#update GoogleClouddeployAutomation#update}
  */
  readonly update?: string;
}

export function googleClouddeployAutomationTimeoutsToTerraform(struct?: GoogleClouddeployAutomationTimeouts | cdktf.IResolvable): any {
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


export function googleClouddeployAutomationTimeoutsToHclTerraform(struct?: GoogleClouddeployAutomationTimeouts | cdktf.IResolvable): any {
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

export class GoogleClouddeployAutomationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleClouddeployAutomationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleClouddeployAutomationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation google_clouddeploy_automation}
*/
export class GoogleClouddeployAutomation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleClouddeployAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleClouddeployAutomation to import
  * @param importFromId The id of the existing GoogleClouddeployAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleClouddeployAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddeploy_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_clouddeploy_automation google_clouddeploy_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleClouddeployAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleClouddeployAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_automation',
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
    this._annotations = config.annotations;
    this._deliveryPipeline = config.deliveryPipeline;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._suspended = config.suspended;
    this._rules.internalValue = config.rules;
    this._selector.internalValue = config.selector;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delivery_pipeline - computed: false, optional: false, required: true
  private _deliveryPipeline?: string; 
  public get deliveryPipeline() {
    return this.getStringAttribute('delivery_pipeline');
  }
  public set deliveryPipeline(value: string) {
    this._deliveryPipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPipelineInput() {
    return this._deliveryPipeline;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
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

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new GoogleClouddeployAutomationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleClouddeployAutomationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new GoogleClouddeployAutomationSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: GoogleClouddeployAutomationSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleClouddeployAutomationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleClouddeployAutomationTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      delivery_pipeline: cdktf.stringToTerraform(this._deliveryPipeline),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      suspended: cdktf.booleanToTerraform(this._suspended),
      rules: cdktf.listMapper(googleClouddeployAutomationRulesToTerraform, true)(this._rules.internalValue),
      selector: googleClouddeployAutomationSelectorToTerraform(this._selector.internalValue),
      timeouts: googleClouddeployAutomationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      delivery_pipeline: {
        value: cdktf.stringToHclTerraform(this._deliveryPipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rules: {
        value: cdktf.listMapperHcl(googleClouddeployAutomationRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployAutomationRulesList",
      },
      selector: {
        value: googleClouddeployAutomationSelectorToHclTerraform(this._selector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployAutomationSelectorList",
      },
      timeouts: {
        value: googleClouddeployAutomationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleClouddeployAutomationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
