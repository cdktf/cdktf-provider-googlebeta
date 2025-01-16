/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglePrivilegedAccessManagerEntitlementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID to use for this Entitlement. This will become the last part of the resource name.
  * This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
  * This value should be unique among all other Entitlements under the specified 'parent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#entitlement_id GooglePrivilegedAccessManagerEntitlement#entitlement_id}
  */
  readonly entitlementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region of the Entitlement resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#location GooglePrivilegedAccessManagerEntitlement#location}
  */
  readonly location: string;
  /**
  * The maximum amount of time for which access would be granted for a request.
  * A requester can choose to ask for access for less than this duration but never more.
  * Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#max_request_duration GooglePrivilegedAccessManagerEntitlement#max_request_duration}
  */
  readonly maxRequestDuration: string;
  /**
  * Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#parent GooglePrivilegedAccessManagerEntitlement#parent}
  */
  readonly parent: string;
  /**
  * additional_notification_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#additional_notification_targets GooglePrivilegedAccessManagerEntitlement#additional_notification_targets}
  */
  readonly additionalNotificationTargets?: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets;
  /**
  * approval_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#approval_workflow GooglePrivilegedAccessManagerEntitlement#approval_workflow}
  */
  readonly approvalWorkflow?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflow;
  /**
  * eligible_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#eligible_users GooglePrivilegedAccessManagerEntitlement#eligible_users}
  */
  readonly eligibleUsers: GooglePrivilegedAccessManagerEntitlementEligibleUsers[] | cdktf.IResolvable;
  /**
  * privileged_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#privileged_access GooglePrivilegedAccessManagerEntitlement#privileged_access}
  */
  readonly privilegedAccess: GooglePrivilegedAccessManagerEntitlementPrivilegedAccess;
  /**
  * requester_justification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#requester_justification_config GooglePrivilegedAccessManagerEntitlement#requester_justification_config}
  */
  readonly requesterJustificationConfig: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#timeouts GooglePrivilegedAccessManagerEntitlement#timeouts}
  */
  readonly timeouts?: GooglePrivilegedAccessManagerEntitlementTimeouts;
}
export interface GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets {
  /**
  * Optional. Additional email addresses to be notified when a principal(requester) is granted access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#admin_email_recipients GooglePrivilegedAccessManagerEntitlement#admin_email_recipients}
  */
  readonly adminEmailRecipients?: string[];
  /**
  * Optional. Additional email address to be notified about an eligible entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#requester_email_recipients GooglePrivilegedAccessManagerEntitlement#requester_email_recipients}
  */
  readonly requesterEmailRecipients?: string[];
}

export function googlePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference | GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminEmailRecipients),
    requester_email_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requesterEmailRecipients),
  }
}


export function googlePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference | GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminEmailRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    requester_email_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requesterEmailRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmailRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmailRecipients = this._adminEmailRecipients;
    }
    if (this._requesterEmailRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.requesterEmailRecipients = this._requesterEmailRecipients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmailRecipients = undefined;
      this._requesterEmailRecipients = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmailRecipients = value.adminEmailRecipients;
      this._requesterEmailRecipients = value.requesterEmailRecipients;
    }
  }

  // admin_email_recipients - computed: false, optional: true, required: false
  private _adminEmailRecipients?: string[]; 
  public get adminEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_email_recipients'));
  }
  public set adminEmailRecipients(value: string[]) {
    this._adminEmailRecipients = value;
  }
  public resetAdminEmailRecipients() {
    this._adminEmailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailRecipientsInput() {
    return this._adminEmailRecipients;
  }

  // requester_email_recipients - computed: false, optional: true, required: false
  private _requesterEmailRecipients?: string[]; 
  public get requesterEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('requester_email_recipients'));
  }
  public set requesterEmailRecipients(value: string[]) {
    this._requesterEmailRecipients = value;
  }
  public resetRequesterEmailRecipients() {
    this._requesterEmailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterEmailRecipientsInput() {
    return this._requesterEmailRecipients;
  }
}
export interface GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers {
  /**
  * Users who are being allowed for the operation. Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}
  */
  readonly principals: string[];
}

export function googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference | GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
  }
}


export function googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference | GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._principals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._principals = value.principals;
    }
  }

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }
}
export interface GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps {
  /**
  * How many users from the above list need to approve.
  * If there are not enough distinct users in the list above then the workflow
  * will indefinitely block. Should always be greater than 0. Currently 1 is the only
  * supported value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#approvals_needed GooglePrivilegedAccessManagerEntitlement#approvals_needed}
  */
  readonly approvalsNeeded?: number;
  /**
  * Optional. Additional email addresses to be notified when a grant is pending approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#approver_email_recipients GooglePrivilegedAccessManagerEntitlement#approver_email_recipients}
  */
  readonly approverEmailRecipients?: string[];
  /**
  * approvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#approvers GooglePrivilegedAccessManagerEntitlement#approvers}
  */
  readonly approvers: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers;
}

export function googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approvals_needed: cdktf.numberToTerraform(struct!.approvalsNeeded),
    approver_email_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.approverEmailRecipients),
    approvers: googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToTerraform(struct!.approvers),
  }
}


export function googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approvals_needed: {
      value: cdktf.numberToHclTerraform(struct!.approvalsNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    approver_email_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.approverEmailRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    approvers: {
      value: googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToHclTerraform(struct!.approvers),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalsNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalsNeeded = this._approvalsNeeded;
    }
    if (this._approverEmailRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverEmailRecipients = this._approverEmailRecipients;
    }
    if (this._approvers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvers = this._approvers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalsNeeded = undefined;
      this._approverEmailRecipients = undefined;
      this._approvers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalsNeeded = value.approvalsNeeded;
      this._approverEmailRecipients = value.approverEmailRecipients;
      this._approvers.internalValue = value.approvers;
    }
  }

  // approvals_needed - computed: false, optional: true, required: false
  private _approvalsNeeded?: number; 
  public get approvalsNeeded() {
    return this.getNumberAttribute('approvals_needed');
  }
  public set approvalsNeeded(value: number) {
    this._approvalsNeeded = value;
  }
  public resetApprovalsNeeded() {
    this._approvalsNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalsNeededInput() {
    return this._approvalsNeeded;
  }

  // approver_email_recipients - computed: false, optional: true, required: false
  private _approverEmailRecipients?: string[]; 
  public get approverEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('approver_email_recipients'));
  }
  public set approverEmailRecipients(value: string[]) {
    this._approverEmailRecipients = value;
  }
  public resetApproverEmailRecipients() {
    this._approverEmailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverEmailRecipientsInput() {
    return this._approverEmailRecipients;
  }

  // approvers - computed: false, optional: false, required: true
  private _approvers = new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(this, "approvers");
  public get approvers() {
    return this._approvers;
  }
  public putApprovers(value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers) {
    this._approvers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers.internalValue;
  }
}

export class GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList extends cdktf.ComplexList {
  public internalValue? : GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[] | cdktf.IResolvable

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
  public get(index: number): GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference {
    return new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals {
  /**
  * Optional. Do the approvers need to provide a justification for their actions?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#require_approver_justification GooglePrivilegedAccessManagerEntitlement#require_approver_justification}
  */
  readonly requireApproverJustification?: boolean | cdktf.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#steps GooglePrivilegedAccessManagerEntitlement#steps}
  */
  readonly steps: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[] | cdktf.IResolvable;
}

export function googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference | GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_approver_justification: cdktf.booleanToTerraform(struct!.requireApproverJustification),
    steps: cdktf.listMapper(googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToTerraform, true)(struct!.steps),
  }
}


export function googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference | GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_approver_justification: {
      value: cdktf.booleanToHclTerraform(struct!.requireApproverJustification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    steps: {
      value: cdktf.listMapperHcl(googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireApproverJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireApproverJustification = this._requireApproverJustification;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requireApproverJustification = undefined;
      this._steps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requireApproverJustification = value.requireApproverJustification;
      this._steps.internalValue = value.steps;
    }
  }

  // require_approver_justification - computed: false, optional: true, required: false
  private _requireApproverJustification?: boolean | cdktf.IResolvable; 
  public get requireApproverJustification() {
    return this.getBooleanAttribute('require_approver_justification');
  }
  public set requireApproverJustification(value: boolean | cdktf.IResolvable) {
    this._requireApproverJustification = value;
  }
  public resetRequireApproverJustification() {
    this._requireApproverJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApproverJustificationInput() {
    return this._requireApproverJustification;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}
export interface GooglePrivilegedAccessManagerEntitlementApprovalWorkflow {
  /**
  * manual_approvals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#manual_approvals GooglePrivilegedAccessManagerEntitlement#manual_approvals}
  */
  readonly manualApprovals: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals;
}

export function googlePrivilegedAccessManagerEntitlementApprovalWorkflowToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference | GooglePrivilegedAccessManagerEntitlementApprovalWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_approvals: googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToTerraform(struct!.manualApprovals),
  }
}


export function googlePrivilegedAccessManagerEntitlementApprovalWorkflowToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference | GooglePrivilegedAccessManagerEntitlementApprovalWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_approvals: {
      value: googlePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToHclTerraform(struct!.manualApprovals),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementApprovalWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualApprovals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualApprovals = this._manualApprovals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manualApprovals.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manualApprovals.internalValue = value.manualApprovals;
    }
  }

  // manual_approvals - computed: false, optional: false, required: true
  private _manualApprovals = new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(this, "manual_approvals");
  public get manualApprovals() {
    return this._manualApprovals;
  }
  public putManualApprovals(value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals) {
    this._manualApprovals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manualApprovalsInput() {
    return this._manualApprovals.internalValue;
  }
}
export interface GooglePrivilegedAccessManagerEntitlementEligibleUsers {
  /**
  * Users who are being allowed for the operation. Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at "https://cloud.google.com/iam/docs/principal-identifiers#v1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}
  */
  readonly principals: string[];
}

export function googlePrivilegedAccessManagerEntitlementEligibleUsersToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementEligibleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
  }
}


export function googlePrivilegedAccessManagerEntitlementEligibleUsersToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementEligibleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementEligibleUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementEligibleUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals = value.principals;
    }
  }

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }
}

export class GooglePrivilegedAccessManagerEntitlementEligibleUsersList extends cdktf.ComplexList {
  public internalValue? : GooglePrivilegedAccessManagerEntitlementEligibleUsers[] | cdktf.IResolvable

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
  public get(index: number): GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference {
    return new GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings {
  /**
  * The expression field of the IAM condition to be associated with the role. If specified, a user with an active grant for this entitlement would be able to access the resource only if this condition evaluates to true for their request.
  * https://cloud.google.com/iam/docs/conditions-overview#attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#condition_expression GooglePrivilegedAccessManagerEntitlement#condition_expression}
  */
  readonly conditionExpression?: string;
  /**
  * IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#role GooglePrivilegedAccessManagerEntitlement#role}
  */
  readonly role: string;
}

export function googlePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_expression: cdktf.stringToTerraform(struct!.conditionExpression),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function googlePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_expression: {
      value: cdktf.stringToHclTerraform(struct!.conditionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionExpression = this._conditionExpression;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionExpression = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionExpression = value.conditionExpression;
      this._role = value.role;
    }
  }

  // condition_expression - computed: false, optional: true, required: false
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  public resetConditionExpression() {
    this._conditionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference {
    return new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess {
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#resource GooglePrivilegedAccessManagerEntitlement#resource}
  */
  readonly resource: string;
  /**
  * The type of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#resource_type GooglePrivilegedAccessManagerEntitlement#resource_type}
  */
  readonly resourceType: string;
  /**
  * role_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#role_bindings GooglePrivilegedAccessManagerEntitlement#role_bindings}
  */
  readonly roleBindings: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[] | cdktf.IResolvable;
}

export function googlePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference | GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    role_bindings: cdktf.listMapper(googlePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToTerraform, true)(struct!.roleBindings),
  }
}


export function googlePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference | GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_bindings: {
      value: cdktf.listMapperHcl(googlePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToHclTerraform, true)(struct!.roleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._roleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBindings = this._roleBindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resource = undefined;
      this._resourceType = undefined;
      this._roleBindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resource = value.resource;
      this._resourceType = value.resourceType;
      this._roleBindings.internalValue = value.roleBindings;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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

  // role_bindings - computed: false, optional: false, required: true
  private _roleBindings = new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
  public putRoleBindings(value: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[] | cdktf.IResolvable) {
    this._roleBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingsInput() {
    return this._roleBindings.internalValue;
  }
}
export interface GooglePrivilegedAccessManagerEntitlementPrivilegedAccess {
  /**
  * gcp_iam_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#gcp_iam_access GooglePrivilegedAccessManagerEntitlement#gcp_iam_access}
  */
  readonly gcpIamAccess: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess;
}

export function googlePrivilegedAccessManagerEntitlementPrivilegedAccessToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference | GooglePrivilegedAccessManagerEntitlementPrivilegedAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_iam_access: googlePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToTerraform(struct!.gcpIamAccess),
  }
}


export function googlePrivilegedAccessManagerEntitlementPrivilegedAccessToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference | GooglePrivilegedAccessManagerEntitlementPrivilegedAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_iam_access: {
      value: googlePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToHclTerraform(struct!.gcpIamAccess),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementPrivilegedAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpIamAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpIamAccess = this._gcpIamAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementPrivilegedAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpIamAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpIamAccess.internalValue = value.gcpIamAccess;
    }
  }

  // gcp_iam_access - computed: false, optional: false, required: true
  private _gcpIamAccess = new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(this, "gcp_iam_access");
  public get gcpIamAccess() {
    return this._gcpIamAccess;
  }
  public putGcpIamAccess(value: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess) {
    this._gcpIamAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpIamAccessInput() {
    return this._gcpIamAccess.internalValue;
  }
}
export interface GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory {
}

export function googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference | GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference | GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured {
}

export function googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference | GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference | GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig {
  /**
  * not_mandatory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#not_mandatory GooglePrivilegedAccessManagerEntitlement#not_mandatory}
  */
  readonly notMandatory?: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory;
  /**
  * unstructured block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#unstructured GooglePrivilegedAccessManagerEntitlement#unstructured}
  */
  readonly unstructured?: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured;
}

export function googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference | GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_mandatory: googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToTerraform(struct!.notMandatory),
    unstructured: googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToTerraform(struct!.unstructured),
  }
}


export function googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference | GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_mandatory: {
      value: googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToHclTerraform(struct!.notMandatory),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList",
    },
    unstructured: {
      value: googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToHclTerraform(struct!.unstructured),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notMandatory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notMandatory = this._notMandatory?.internalValue;
    }
    if (this._unstructured?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructured = this._unstructured?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notMandatory.internalValue = undefined;
      this._unstructured.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notMandatory.internalValue = value.notMandatory;
      this._unstructured.internalValue = value.unstructured;
    }
  }

  // not_mandatory - computed: false, optional: true, required: false
  private _notMandatory = new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(this, "not_mandatory");
  public get notMandatory() {
    return this._notMandatory;
  }
  public putNotMandatory(value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory) {
    this._notMandatory.internalValue = value;
  }
  public resetNotMandatory() {
    this._notMandatory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMandatoryInput() {
    return this._notMandatory.internalValue;
  }

  // unstructured - computed: false, optional: true, required: false
  private _unstructured = new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(this, "unstructured");
  public get unstructured() {
    return this._unstructured;
  }
  public putUnstructured(value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured) {
    this._unstructured.internalValue = value;
  }
  public resetUnstructured() {
    this._unstructured.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredInput() {
    return this._unstructured.internalValue;
  }
}
export interface GooglePrivilegedAccessManagerEntitlementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#create GooglePrivilegedAccessManagerEntitlement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#delete GooglePrivilegedAccessManagerEntitlement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#update GooglePrivilegedAccessManagerEntitlement#update}
  */
  readonly update?: string;
}

export function googlePrivilegedAccessManagerEntitlementTimeoutsToTerraform(struct?: GooglePrivilegedAccessManagerEntitlementTimeouts | cdktf.IResolvable): any {
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


export function googlePrivilegedAccessManagerEntitlementTimeoutsToHclTerraform(struct?: GooglePrivilegedAccessManagerEntitlementTimeouts | cdktf.IResolvable): any {
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

export class GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GooglePrivilegedAccessManagerEntitlementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GooglePrivilegedAccessManagerEntitlementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement google_privileged_access_manager_entitlement}
*/
export class GooglePrivilegedAccessManagerEntitlement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privileged_access_manager_entitlement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GooglePrivilegedAccessManagerEntitlement to import
  * @param importFromId The id of the existing GooglePrivilegedAccessManagerEntitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GooglePrivilegedAccessManagerEntitlement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_privileged_access_manager_entitlement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_privileged_access_manager_entitlement google_privileged_access_manager_entitlement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GooglePrivilegedAccessManagerEntitlementConfig
  */
  public constructor(scope: Construct, id: string, config: GooglePrivilegedAccessManagerEntitlementConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privileged_access_manager_entitlement',
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
    this._entitlementId = config.entitlementId;
    this._id = config.id;
    this._location = config.location;
    this._maxRequestDuration = config.maxRequestDuration;
    this._parent = config.parent;
    this._additionalNotificationTargets.internalValue = config.additionalNotificationTargets;
    this._approvalWorkflow.internalValue = config.approvalWorkflow;
    this._eligibleUsers.internalValue = config.eligibleUsers;
    this._privilegedAccess.internalValue = config.privilegedAccess;
    this._requesterJustificationConfig.internalValue = config.requesterJustificationConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // entitlement_id - computed: false, optional: false, required: true
  private _entitlementId?: string; 
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }
  public set entitlementId(value: string) {
    this._entitlementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementIdInput() {
    return this._entitlementId;
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

  // max_request_duration - computed: false, optional: false, required: true
  private _maxRequestDuration?: string; 
  public get maxRequestDuration() {
    return this.getStringAttribute('max_request_duration');
  }
  public set maxRequestDuration(value: string) {
    this._maxRequestDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestDurationInput() {
    return this._maxRequestDuration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // additional_notification_targets - computed: false, optional: true, required: false
  private _additionalNotificationTargets = new GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(this, "additional_notification_targets");
  public get additionalNotificationTargets() {
    return this._additionalNotificationTargets;
  }
  public putAdditionalNotificationTargets(value: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets) {
    this._additionalNotificationTargets.internalValue = value;
  }
  public resetAdditionalNotificationTargets() {
    this._additionalNotificationTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNotificationTargetsInput() {
    return this._additionalNotificationTargets.internalValue;
  }

  // approval_workflow - computed: false, optional: true, required: false
  private _approvalWorkflow = new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(this, "approval_workflow");
  public get approvalWorkflow() {
    return this._approvalWorkflow;
  }
  public putApprovalWorkflow(value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflow) {
    this._approvalWorkflow.internalValue = value;
  }
  public resetApprovalWorkflow() {
    this._approvalWorkflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalWorkflowInput() {
    return this._approvalWorkflow.internalValue;
  }

  // eligible_users - computed: false, optional: false, required: true
  private _eligibleUsers = new GooglePrivilegedAccessManagerEntitlementEligibleUsersList(this, "eligible_users", false);
  public get eligibleUsers() {
    return this._eligibleUsers;
  }
  public putEligibleUsers(value: GooglePrivilegedAccessManagerEntitlementEligibleUsers[] | cdktf.IResolvable) {
    this._eligibleUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleUsersInput() {
    return this._eligibleUsers.internalValue;
  }

  // privileged_access - computed: false, optional: false, required: true
  private _privilegedAccess = new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(this, "privileged_access");
  public get privilegedAccess() {
    return this._privilegedAccess;
  }
  public putPrivilegedAccess(value: GooglePrivilegedAccessManagerEntitlementPrivilegedAccess) {
    this._privilegedAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedAccessInput() {
    return this._privilegedAccess.internalValue;
  }

  // requester_justification_config - computed: false, optional: false, required: true
  private _requesterJustificationConfig = new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(this, "requester_justification_config");
  public get requesterJustificationConfig() {
    return this._requesterJustificationConfig;
  }
  public putRequesterJustificationConfig(value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig) {
    this._requesterJustificationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterJustificationConfigInput() {
    return this._requesterJustificationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GooglePrivilegedAccessManagerEntitlementTimeouts) {
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
      entitlement_id: cdktf.stringToTerraform(this._entitlementId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_request_duration: cdktf.stringToTerraform(this._maxRequestDuration),
      parent: cdktf.stringToTerraform(this._parent),
      additional_notification_targets: googlePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsToTerraform(this._additionalNotificationTargets.internalValue),
      approval_workflow: googlePrivilegedAccessManagerEntitlementApprovalWorkflowToTerraform(this._approvalWorkflow.internalValue),
      eligible_users: cdktf.listMapper(googlePrivilegedAccessManagerEntitlementEligibleUsersToTerraform, true)(this._eligibleUsers.internalValue),
      privileged_access: googlePrivilegedAccessManagerEntitlementPrivilegedAccessToTerraform(this._privilegedAccess.internalValue),
      requester_justification_config: googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigToTerraform(this._requesterJustificationConfig.internalValue),
      timeouts: googlePrivilegedAccessManagerEntitlementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entitlement_id: {
        value: cdktf.stringToHclTerraform(this._entitlementId),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_request_duration: {
        value: cdktf.stringToHclTerraform(this._maxRequestDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_notification_targets: {
        value: googlePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsToHclTerraform(this._additionalNotificationTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList",
      },
      approval_workflow: {
        value: googlePrivilegedAccessManagerEntitlementApprovalWorkflowToHclTerraform(this._approvalWorkflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivilegedAccessManagerEntitlementApprovalWorkflowList",
      },
      eligible_users: {
        value: cdktf.listMapperHcl(googlePrivilegedAccessManagerEntitlementEligibleUsersToHclTerraform, true)(this._eligibleUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivilegedAccessManagerEntitlementEligibleUsersList",
      },
      privileged_access: {
        value: googlePrivilegedAccessManagerEntitlementPrivilegedAccessToHclTerraform(this._privilegedAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivilegedAccessManagerEntitlementPrivilegedAccessList",
      },
      requester_justification_config: {
        value: googlePrivilegedAccessManagerEntitlementRequesterJustificationConfigToHclTerraform(this._requesterJustificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList",
      },
      timeouts: {
        value: googlePrivilegedAccessManagerEntitlementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GooglePrivilegedAccessManagerEntitlementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
