/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeFutureReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Future timestamp when the FR auto-created reservations will be deleted by Compute Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#auto_created_reservations_delete_time GoogleComputeFutureReservation#auto_created_reservations_delete_time}
  */
  readonly autoCreatedReservationsDeleteTime?: string;
  /**
  * Setting for enabling or disabling automatic deletion for auto-created reservation. If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [autoCreatedReservationsDeleteTime, autoCreatedReservationsDuration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#auto_delete_auto_created_reservations GoogleComputeFutureReservation#auto_delete_auto_created_reservations}
  */
  readonly autoDeleteAutoCreatedReservations?: boolean | cdktf.IResolvable;
  /**
  * Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#deployment_type GoogleComputeFutureReservation#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#description GoogleComputeFutureReservation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the las
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#name GoogleComputeFutureReservation#name}
  */
  readonly name: string;
  /**
  * Name prefix for the reservations to be created at the time of delivery. The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#name_prefix GoogleComputeFutureReservation#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#planning_status GoogleComputeFutureReservation#planning_status}
  */
  readonly planningStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}
  */
  readonly project?: string;
  /**
  * The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#reservation_mode GoogleComputeFutureReservation#reservation_mode}
  */
  readonly reservationMode?: string;
  /**
  * Name of reservations where the capacity is provisioned at the time of delivery of future reservations. If the reservation with the given name does not exist already, it is created automatically at the time of Approval with INACTIVE state till specified start-time. Either provide the reservationName or a namePrefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#reservation_name GoogleComputeFutureReservation#reservation_name}
  */
  readonly reservationName?: string;
  /**
  * Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#scheduling_type GoogleComputeFutureReservation#scheduling_type}
  */
  readonly schedulingType?: string;
  /**
  * Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from the delivered reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#specific_reservation_required GoogleComputeFutureReservation#specific_reservation_required}
  */
  readonly specificReservationRequired?: boolean | cdktf.IResolvable;
  /**
  * auto_created_reservations_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#auto_created_reservations_duration GoogleComputeFutureReservation#auto_created_reservations_duration}
  */
  readonly autoCreatedReservationsDuration?: GoogleComputeFutureReservationAutoCreatedReservationsDuration;
  /**
  * commitment_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#commitment_info GoogleComputeFutureReservation#commitment_info}
  */
  readonly commitmentInfo?: GoogleComputeFutureReservationCommitmentInfo;
  /**
  * share_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#share_settings GoogleComputeFutureReservation#share_settings}
  */
  readonly shareSettings?: GoogleComputeFutureReservationShareSettings;
  /**
  * specific_sku_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#specific_sku_properties GoogleComputeFutureReservation#specific_sku_properties}
  */
  readonly specificSkuProperties?: GoogleComputeFutureReservationSpecificSkuProperties;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#time_window GoogleComputeFutureReservation#time_window}
  */
  readonly timeWindow: GoogleComputeFutureReservationTimeWindow;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#timeouts GoogleComputeFutureReservation#timeouts}
  */
  readonly timeouts?: GoogleComputeFutureReservationTimeouts;
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // time_stamp - computed: true, optional: false, required: false
  public get timeStamp() {
    return this.getStringAttribute('time_stamp');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_map - computed: true, optional: false, required: false
  private _projectMap = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList(this, "project_map", true);
  public get projectMap() {
    return this._projectMap;
  }

  // projects - computed: true, optional: false, required: false
  public get projects() {
    return this.getListAttribute('projects');
  }

  // share_type - computed: true, optional: false, required: false
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }

  // accelerator_type - computed: true, optional: false, required: false
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getStringAttribute('disk_size_gb');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guest_accelerators - computed: true, optional: false, required: false
  private _guestAccelerators = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(this, "guest_accelerators", false);
  public get guestAccelerators() {
    return this._guestAccelerators;
  }

  // local_ssds - computed: true, optional: false, required: false
  private _localSsds = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList(this, "local_ssds", false);
  public get localSsds() {
    return this._localSsds;
  }

  // location_hint - computed: true, optional: false, required: false
  public get locationHint() {
    return this.getStringAttribute('location_hint');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // maintenance_freeze_duration_hours - computed: true, optional: false, required: false
  public get maintenanceFreezeDurationHours() {
    return this.getNumberAttribute('maintenance_freeze_duration_hours');
  }

  // maintenance_interval - computed: true, optional: false, required: false
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }

  // min_cpu_platform - computed: true, optional: false, required: false
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_properties - computed: true, optional: false, required: false
  private _instanceProperties = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList(this, "instance_properties", false);
  public get instanceProperties() {
    return this._instanceProperties;
  }

  // source_instance_template - computed: true, optional: false, required: false
  public get sourceInstanceTemplate() {
    return this.getStringAttribute('source_instance_template');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getStringAttribute('total_count');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  private _duration = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList(this, "duration", false);
  public get duration() {
    return this._duration;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // share_settings - computed: true, optional: false, required: false
  private _shareSettings = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList(this, "share_settings", false);
  public get shareSettings() {
    return this._shareSettings;
  }

  // specific_sku_properties - computed: true, optional: false, required: false
  private _specificSkuProperties = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList(this, "specific_sku_properties", false);
  public get specificSkuProperties() {
    return this._specificSkuProperties;
  }

  // time_window - computed: true, optional: false, required: false
  private _timeWindow = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList(this, "time_window", false);
  public get timeWindow() {
    return this._timeWindow;
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusLastKnownGoodState {
}

export function googleComputeFutureReservationStatusLastKnownGoodStateToTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusLastKnownGoodStateToHclTerraform(struct?: GoogleComputeFutureReservationStatusLastKnownGoodState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusLastKnownGoodState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusLastKnownGoodState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // existing_matching_usage_info - computed: true, optional: false, required: false
  private _existingMatchingUsageInfo = new GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList(this, "existing_matching_usage_info", false);
  public get existingMatchingUsageInfo() {
    return this._existingMatchingUsageInfo;
  }

  // future_reservation_specs - computed: true, optional: false, required: false
  private _futureReservationSpecs = new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList(this, "future_reservation_specs", false);
  public get futureReservationSpecs() {
    return this._futureReservationSpecs;
  }

  // lock_time - computed: true, optional: false, required: false
  public get lockTime() {
    return this.getStringAttribute('lock_time');
  }

  // name_prefix - computed: true, optional: false, required: false
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }

  // procurement_status - computed: true, optional: false, required: false
  public get procurementStatus() {
    return this.getStringAttribute('procurement_status');
  }
}

export class GoogleComputeFutureReservationStatusLastKnownGoodStateList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference {
    return new GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatusSpecificSkuProperties {
}

export function googleComputeFutureReservationStatusSpecificSkuPropertiesToTerraform(struct?: GoogleComputeFutureReservationStatusSpecificSkuProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusSpecificSkuPropertiesToHclTerraform(struct?: GoogleComputeFutureReservationStatusSpecificSkuProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatusSpecificSkuProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatusSpecificSkuProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_instance_template_id - computed: true, optional: false, required: false
  public get sourceInstanceTemplateId() {
    return this.getStringAttribute('source_instance_template_id');
  }
}

export class GoogleComputeFutureReservationStatusSpecificSkuPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference {
    return new GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationStatus {
}

export function googleComputeFutureReservationStatusToTerraform(struct?: GoogleComputeFutureReservationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeFutureReservationStatusToHclTerraform(struct?: GoogleComputeFutureReservationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeFutureReservationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeFutureReservationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amendment_status - computed: true, optional: false, required: false
  public get amendmentStatus() {
    return this.getStringAttribute('amendment_status');
  }

  // auto_created_reservations - computed: true, optional: false, required: false
  public get autoCreatedReservations() {
    return this.getListAttribute('auto_created_reservations');
  }

  // fulfilled_count - computed: true, optional: false, required: false
  public get fulfilledCount() {
    return this.getStringAttribute('fulfilled_count');
  }

  // last_known_good_state - computed: true, optional: false, required: false
  private _lastKnownGoodState = new GoogleComputeFutureReservationStatusLastKnownGoodStateList(this, "last_known_good_state", false);
  public get lastKnownGoodState() {
    return this._lastKnownGoodState;
  }

  // lock_time - computed: true, optional: false, required: false
  public get lockTime() {
    return this.getStringAttribute('lock_time');
  }

  // procurement_status - computed: true, optional: false, required: false
  public get procurementStatus() {
    return this.getStringAttribute('procurement_status');
  }

  // specific_sku_properties - computed: true, optional: false, required: false
  private _specificSkuProperties = new GoogleComputeFutureReservationStatusSpecificSkuPropertiesList(this, "specific_sku_properties", false);
  public get specificSkuProperties() {
    return this._specificSkuProperties;
  }
}

export class GoogleComputeFutureReservationStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeFutureReservationStatusOutputReference {
    return new GoogleComputeFutureReservationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationAutoCreatedReservationsDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}
  */
  readonly seconds?: string;
}

export function googleComputeFutureReservationAutoCreatedReservationsDurationToTerraform(struct?: GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference | GoogleComputeFutureReservationAutoCreatedReservationsDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeFutureReservationAutoCreatedReservationsDurationToHclTerraform(struct?: GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference | GoogleComputeFutureReservationAutoCreatedReservationsDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeFutureReservationAutoCreatedReservationsDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationAutoCreatedReservationsDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeFutureReservationCommitmentInfo {
  /**
  * name of the commitment where capacity is being delivered to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#commitment_name GoogleComputeFutureReservation#commitment_name}
  */
  readonly commitmentName?: string;
  /**
  * Indicates if a Commitment needs to be created as part of FR delivery. If this field is not present, then no commitment needs to be created. Possible values: ["INVALID", "THIRTY_SIX_MONTH", "TWELVE_MONTH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#commitment_plan GoogleComputeFutureReservation#commitment_plan}
  */
  readonly commitmentPlan?: string;
  /**
  * Only applicable if FR is delivering to the same reservation. If set, all parent commitments will be extended to match the end date of the plan for this commitment. Possible values: ["EXTEND"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#previous_commitment_terms GoogleComputeFutureReservation#previous_commitment_terms}
  */
  readonly previousCommitmentTerms?: string;
}

export function googleComputeFutureReservationCommitmentInfoToTerraform(struct?: GoogleComputeFutureReservationCommitmentInfoOutputReference | GoogleComputeFutureReservationCommitmentInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commitment_name: cdktf.stringToTerraform(struct!.commitmentName),
    commitment_plan: cdktf.stringToTerraform(struct!.commitmentPlan),
    previous_commitment_terms: cdktf.stringToTerraform(struct!.previousCommitmentTerms),
  }
}


export function googleComputeFutureReservationCommitmentInfoToHclTerraform(struct?: GoogleComputeFutureReservationCommitmentInfoOutputReference | GoogleComputeFutureReservationCommitmentInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commitment_name: {
      value: cdktf.stringToHclTerraform(struct!.commitmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commitment_plan: {
      value: cdktf.stringToHclTerraform(struct!.commitmentPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    previous_commitment_terms: {
      value: cdktf.stringToHclTerraform(struct!.previousCommitmentTerms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationCommitmentInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeFutureReservationCommitmentInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitmentName = this._commitmentName;
    }
    if (this._commitmentPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitmentPlan = this._commitmentPlan;
    }
    if (this._previousCommitmentTerms !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousCommitmentTerms = this._previousCommitmentTerms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationCommitmentInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitmentName = undefined;
      this._commitmentPlan = undefined;
      this._previousCommitmentTerms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitmentName = value.commitmentName;
      this._commitmentPlan = value.commitmentPlan;
      this._previousCommitmentTerms = value.previousCommitmentTerms;
    }
  }

  // commitment_name - computed: false, optional: true, required: false
  private _commitmentName?: string; 
  public get commitmentName() {
    return this.getStringAttribute('commitment_name');
  }
  public set commitmentName(value: string) {
    this._commitmentName = value;
  }
  public resetCommitmentName() {
    this._commitmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentNameInput() {
    return this._commitmentName;
  }

  // commitment_plan - computed: false, optional: true, required: false
  private _commitmentPlan?: string; 
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }
  public set commitmentPlan(value: string) {
    this._commitmentPlan = value;
  }
  public resetCommitmentPlan() {
    this._commitmentPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentPlanInput() {
    return this._commitmentPlan;
  }

  // previous_commitment_terms - computed: false, optional: true, required: false
  private _previousCommitmentTerms?: string; 
  public get previousCommitmentTerms() {
    return this.getStringAttribute('previous_commitment_terms');
  }
  public set previousCommitmentTerms(value: string) {
    this._previousCommitmentTerms = value;
  }
  public resetPreviousCommitmentTerms() {
    this._previousCommitmentTerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousCommitmentTermsInput() {
    return this._previousCommitmentTerms;
  }
}
export interface GoogleComputeFutureReservationShareSettingsProjectMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The project ID, should be same as the key of this project config in the parent map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#project_id GoogleComputeFutureReservation#project_id}
  */
  readonly projectId?: string;
}

export function googleComputeFutureReservationShareSettingsProjectMapToTerraform(struct?: GoogleComputeFutureReservationShareSettingsProjectMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function googleComputeFutureReservationShareSettingsProjectMapToHclTerraform(struct?: GoogleComputeFutureReservationShareSettingsProjectMap | cdktf.IResolvable): any {
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationShareSettingsProjectMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeFutureReservationShareSettingsProjectMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationShareSettingsProjectMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._projectId = value.projectId;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class GoogleComputeFutureReservationShareSettingsProjectMapList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeFutureReservationShareSettingsProjectMap[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeFutureReservationShareSettingsProjectMapOutputReference {
    return new GoogleComputeFutureReservationShareSettingsProjectMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationShareSettings {
  /**
  * list of Project names to specify consumer projects for this shared-reservation. This is only valid when shareType's value is SPECIFIC_PROJECTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#projects GoogleComputeFutureReservation#projects}
  */
  readonly projects?: string[];
  /**
  * Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#share_type GoogleComputeFutureReservation#share_type}
  */
  readonly shareType?: string;
  /**
  * project_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#project_map GoogleComputeFutureReservation#project_map}
  */
  readonly projectMap?: GoogleComputeFutureReservationShareSettingsProjectMap[] | cdktf.IResolvable;
}

export function googleComputeFutureReservationShareSettingsToTerraform(struct?: GoogleComputeFutureReservationShareSettingsOutputReference | GoogleComputeFutureReservationShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projects),
    share_type: cdktf.stringToTerraform(struct!.shareType),
    project_map: cdktf.listMapper(googleComputeFutureReservationShareSettingsProjectMapToTerraform, true)(struct!.projectMap),
  }
}


export function googleComputeFutureReservationShareSettingsToHclTerraform(struct?: GoogleComputeFutureReservationShareSettingsOutputReference | GoogleComputeFutureReservationShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    share_type: {
      value: cdktf.stringToHclTerraform(struct!.shareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_map: {
      value: cdktf.listMapperHcl(googleComputeFutureReservationShareSettingsProjectMapToHclTerraform, true)(struct!.projectMap),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleComputeFutureReservationShareSettingsProjectMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationShareSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeFutureReservationShareSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projects !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects;
    }
    if (this._shareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareType = this._shareType;
    }
    if (this._projectMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectMap = this._projectMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationShareSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projects = undefined;
      this._shareType = undefined;
      this._projectMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projects = value.projects;
      this._shareType = value.shareType;
      this._projectMap.internalValue = value.projectMap;
    }
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // share_type - computed: true, optional: true, required: false
  private _shareType?: string; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string) {
    this._shareType = value;
  }
  public resetShareType() {
    this._shareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType;
  }

  // project_map - computed: false, optional: true, required: false
  private _projectMap = new GoogleComputeFutureReservationShareSettingsProjectMapList(this, "project_map", true);
  public get projectMap() {
    return this._projectMap;
  }
  public putProjectMap(value: GoogleComputeFutureReservationShareSettingsProjectMap[] | cdktf.IResolvable) {
    this._projectMap.internalValue = value;
  }
  public resetProjectMap() {
    this._projectMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectMapInput() {
    return this._projectMap.internalValue;
  }
}
export interface GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators {
  /**
  * The number of the guest accelerator cards exposed to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Full or partial URL of the accelerator type resource to attach to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}
  */
  readonly acceleratorType?: string;
}

export function googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsToTerraform(struct?: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}


export function googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsToHclTerraform(struct?: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_count: {
      value: cdktf.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
    }
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference {
    return new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds {
  /**
  * Specifies the size of the disk in base-2 GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#disk_size_gb GoogleComputeFutureReservation#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Possible values: ["SCSI", "NVME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#interface GoogleComputeFutureReservation#interface}
  */
  readonly interface?: string;
}

export function googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsToTerraform(struct?: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.stringToTerraform(struct!.diskSizeGb),
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}


export function googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsToHclTerraform(struct?: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeGb = undefined;
      this._interface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeGb = value.diskSizeGb;
      this._interface = value.interface;
    }
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: string; 
  public get diskSizeGb() {
    return this.getStringAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: string) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }
}

export class GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference {
    return new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties {
  /**
  * An opaque location hint used to place the allocation close to other resources. This field is for use by internal tools that use the public API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#location_hint GoogleComputeFutureReservation#location_hint}
  */
  readonly locationHint?: string;
  /**
  * Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory. This also includes specifying custom machine type following custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#machine_type GoogleComputeFutureReservation#machine_type}
  */
  readonly machineType?: string;
  /**
  * Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#maintenance_freeze_duration_hours GoogleComputeFutureReservation#maintenance_freeze_duration_hours}
  */
  readonly maintenanceFreezeDurationHours?: number;
  /**
  * Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#maintenance_interval GoogleComputeFutureReservation#maintenance_interval}
  */
  readonly maintenanceInterval?: string;
  /**
  * Minimum cpu platform the reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#min_cpu_platform GoogleComputeFutureReservation#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * guest_accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#guest_accelerators GoogleComputeFutureReservation#guest_accelerators}
  */
  readonly guestAccelerators?: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators[] | cdktf.IResolvable;
  /**
  * local_ssds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#local_ssds GoogleComputeFutureReservation#local_ssds}
  */
  readonly localSsds?: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds[] | cdktf.IResolvable;
}

export function googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesToTerraform(struct?: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference | GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_hint: cdktf.stringToTerraform(struct!.locationHint),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    maintenance_freeze_duration_hours: cdktf.numberToTerraform(struct!.maintenanceFreezeDurationHours),
    maintenance_interval: cdktf.stringToTerraform(struct!.maintenanceInterval),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    guest_accelerators: cdktf.listMapper(googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsToTerraform, true)(struct!.guestAccelerators),
    local_ssds: cdktf.listMapper(googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsToTerraform, true)(struct!.localSsds),
  }
}


export function googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesToHclTerraform(struct?: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference | GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_hint: {
      value: cdktf.stringToHclTerraform(struct!.locationHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_freeze_duration_hours: {
      value: cdktf.numberToHclTerraform(struct!.maintenanceFreezeDurationHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maintenance_interval: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_accelerators: {
      value: cdktf.listMapperHcl(googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsToHclTerraform, true)(struct!.guestAccelerators),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList",
    },
    local_ssds: {
      value: cdktf.listMapperHcl(googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsToHclTerraform, true)(struct!.localSsds),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationHint = this._locationHint;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maintenanceFreezeDurationHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceFreezeDurationHours = this._maintenanceFreezeDurationHours;
    }
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._guestAccelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerators = this._guestAccelerators?.internalValue;
    }
    if (this._localSsds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsds = this._localSsds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationHint = undefined;
      this._machineType = undefined;
      this._maintenanceFreezeDurationHours = undefined;
      this._maintenanceInterval = undefined;
      this._minCpuPlatform = undefined;
      this._guestAccelerators.internalValue = undefined;
      this._localSsds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationHint = value.locationHint;
      this._machineType = value.machineType;
      this._maintenanceFreezeDurationHours = value.maintenanceFreezeDurationHours;
      this._maintenanceInterval = value.maintenanceInterval;
      this._minCpuPlatform = value.minCpuPlatform;
      this._guestAccelerators.internalValue = value.guestAccelerators;
      this._localSsds.internalValue = value.localSsds;
    }
  }

  // location_hint - computed: false, optional: true, required: false
  private _locationHint?: string; 
  public get locationHint() {
    return this.getStringAttribute('location_hint');
  }
  public set locationHint(value: string) {
    this._locationHint = value;
  }
  public resetLocationHint() {
    this._locationHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationHintInput() {
    return this._locationHint;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // maintenance_freeze_duration_hours - computed: false, optional: true, required: false
  private _maintenanceFreezeDurationHours?: number; 
  public get maintenanceFreezeDurationHours() {
    return this.getNumberAttribute('maintenance_freeze_duration_hours');
  }
  public set maintenanceFreezeDurationHours(value: number) {
    this._maintenanceFreezeDurationHours = value;
  }
  public resetMaintenanceFreezeDurationHours() {
    this._maintenanceFreezeDurationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceFreezeDurationHoursInput() {
    return this._maintenanceFreezeDurationHours;
  }

  // maintenance_interval - computed: false, optional: true, required: false
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  public resetMaintenanceInterval() {
    this._maintenanceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // guest_accelerators - computed: false, optional: true, required: false
  private _guestAccelerators = new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(this, "guest_accelerators", false);
  public get guestAccelerators() {
    return this._guestAccelerators;
  }
  public putGuestAccelerators(value: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators[] | cdktf.IResolvable) {
    this._guestAccelerators.internalValue = value;
  }
  public resetGuestAccelerators() {
    this._guestAccelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorsInput() {
    return this._guestAccelerators.internalValue;
  }

  // local_ssds - computed: false, optional: true, required: false
  private _localSsds = new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList(this, "local_ssds", false);
  public get localSsds() {
    return this._localSsds;
  }
  public putLocalSsds(value: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds[] | cdktf.IResolvable) {
    this._localSsds.internalValue = value;
  }
  public resetLocalSsds() {
    this._localSsds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdsInput() {
    return this._localSsds.internalValue;
  }
}
export interface GoogleComputeFutureReservationSpecificSkuProperties {
  /**
  * The instance template that will be used to populate the ReservedInstanceProperties of the future reservation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#source_instance_template GoogleComputeFutureReservation#source_instance_template}
  */
  readonly sourceInstanceTemplate?: string;
  /**
  * Total number of instances for which capacity assurance is requested at a future time period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#total_count GoogleComputeFutureReservation#total_count}
  */
  readonly totalCount?: string;
  /**
  * instance_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#instance_properties GoogleComputeFutureReservation#instance_properties}
  */
  readonly instanceProperties?: GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties;
}

export function googleComputeFutureReservationSpecificSkuPropertiesToTerraform(struct?: GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference | GoogleComputeFutureReservationSpecificSkuProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_instance_template: cdktf.stringToTerraform(struct!.sourceInstanceTemplate),
    total_count: cdktf.stringToTerraform(struct!.totalCount),
    instance_properties: googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesToTerraform(struct!.instanceProperties),
  }
}


export function googleComputeFutureReservationSpecificSkuPropertiesToHclTerraform(struct?: GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference | GoogleComputeFutureReservationSpecificSkuProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_instance_template: {
      value: cdktf.stringToHclTerraform(struct!.sourceInstanceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_count: {
      value: cdktf.stringToHclTerraform(struct!.totalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_properties: {
      value: googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesToHclTerraform(struct!.instanceProperties),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeFutureReservationSpecificSkuProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceInstanceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInstanceTemplate = this._sourceInstanceTemplate;
    }
    if (this._totalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCount = this._totalCount;
    }
    if (this._instanceProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProperties = this._instanceProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationSpecificSkuProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceInstanceTemplate = undefined;
      this._totalCount = undefined;
      this._instanceProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceInstanceTemplate = value.sourceInstanceTemplate;
      this._totalCount = value.totalCount;
      this._instanceProperties.internalValue = value.instanceProperties;
    }
  }

  // source_instance_template - computed: false, optional: true, required: false
  private _sourceInstanceTemplate?: string; 
  public get sourceInstanceTemplate() {
    return this.getStringAttribute('source_instance_template');
  }
  public set sourceInstanceTemplate(value: string) {
    this._sourceInstanceTemplate = value;
  }
  public resetSourceInstanceTemplate() {
    this._sourceInstanceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceTemplateInput() {
    return this._sourceInstanceTemplate;
  }

  // total_count - computed: false, optional: true, required: false
  private _totalCount?: string; 
  public get totalCount() {
    return this.getStringAttribute('total_count');
  }
  public set totalCount(value: string) {
    this._totalCount = value;
  }
  public resetTotalCount() {
    this._totalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCountInput() {
    return this._totalCount;
  }

  // instance_properties - computed: false, optional: true, required: false
  private _instanceProperties = new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference(this, "instance_properties");
  public get instanceProperties() {
    return this._instanceProperties;
  }
  public putInstanceProperties(value: GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties) {
    this._instanceProperties.internalValue = value;
  }
  public resetInstanceProperties() {
    this._instanceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePropertiesInput() {
    return this._instanceProperties.internalValue;
  }
}
export interface GoogleComputeFutureReservationTimeWindowDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}
  */
  readonly seconds?: string;
}

export function googleComputeFutureReservationTimeWindowDurationToTerraform(struct?: GoogleComputeFutureReservationTimeWindowDurationOutputReference | GoogleComputeFutureReservationTimeWindowDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeFutureReservationTimeWindowDurationToHclTerraform(struct?: GoogleComputeFutureReservationTimeWindowDurationOutputReference | GoogleComputeFutureReservationTimeWindowDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationTimeWindowDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeFutureReservationTimeWindowDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationTimeWindowDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeFutureReservationTimeWindow {
  /**
  * End time of the future reservation in RFC3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#end_time GoogleComputeFutureReservation#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time of the future reservation in RFC3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#start_time GoogleComputeFutureReservation#start_time}
  */
  readonly startTime: string;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#duration GoogleComputeFutureReservation#duration}
  */
  readonly duration?: GoogleComputeFutureReservationTimeWindowDuration;
}

export function googleComputeFutureReservationTimeWindowToTerraform(struct?: GoogleComputeFutureReservationTimeWindowOutputReference | GoogleComputeFutureReservationTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    duration: googleComputeFutureReservationTimeWindowDurationToTerraform(struct!.duration),
  }
}


export function googleComputeFutureReservationTimeWindowToHclTerraform(struct?: GoogleComputeFutureReservationTimeWindowOutputReference | GoogleComputeFutureReservationTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: googleComputeFutureReservationTimeWindowDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeFutureReservationTimeWindowDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeFutureReservationTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeFutureReservationTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeFutureReservationTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._duration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._duration.internalValue = value.duration;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new GoogleComputeFutureReservationTimeWindowDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: GoogleComputeFutureReservationTimeWindowDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }
}
export interface GoogleComputeFutureReservationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}
  */
  readonly update?: string;
}

export function googleComputeFutureReservationTimeoutsToTerraform(struct?: GoogleComputeFutureReservationTimeouts | cdktf.IResolvable): any {
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


export function googleComputeFutureReservationTimeoutsToHclTerraform(struct?: GoogleComputeFutureReservationTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeFutureReservationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeFutureReservationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeFutureReservationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation google_compute_future_reservation}
*/
export class GoogleComputeFutureReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_future_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeFutureReservation to import
  * @param importFromId The id of the existing GoogleComputeFutureReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeFutureReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_future_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_future_reservation google_compute_future_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeFutureReservationConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeFutureReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_future_reservation',
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
    this._autoCreatedReservationsDeleteTime = config.autoCreatedReservationsDeleteTime;
    this._autoDeleteAutoCreatedReservations = config.autoDeleteAutoCreatedReservations;
    this._deploymentType = config.deploymentType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._planningStatus = config.planningStatus;
    this._project = config.project;
    this._reservationMode = config.reservationMode;
    this._reservationName = config.reservationName;
    this._schedulingType = config.schedulingType;
    this._specificReservationRequired = config.specificReservationRequired;
    this._autoCreatedReservationsDuration.internalValue = config.autoCreatedReservationsDuration;
    this._commitmentInfo.internalValue = config.commitmentInfo;
    this._shareSettings.internalValue = config.shareSettings;
    this._specificSkuProperties.internalValue = config.specificSkuProperties;
    this._timeWindow.internalValue = config.timeWindow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_created_reservations_delete_time - computed: false, optional: true, required: false
  private _autoCreatedReservationsDeleteTime?: string; 
  public get autoCreatedReservationsDeleteTime() {
    return this.getStringAttribute('auto_created_reservations_delete_time');
  }
  public set autoCreatedReservationsDeleteTime(value: string) {
    this._autoCreatedReservationsDeleteTime = value;
  }
  public resetAutoCreatedReservationsDeleteTime() {
    this._autoCreatedReservationsDeleteTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreatedReservationsDeleteTimeInput() {
    return this._autoCreatedReservationsDeleteTime;
  }

  // auto_delete_auto_created_reservations - computed: false, optional: true, required: false
  private _autoDeleteAutoCreatedReservations?: boolean | cdktf.IResolvable; 
  public get autoDeleteAutoCreatedReservations() {
    return this.getBooleanAttribute('auto_delete_auto_created_reservations');
  }
  public set autoDeleteAutoCreatedReservations(value: boolean | cdktf.IResolvable) {
    this._autoDeleteAutoCreatedReservations = value;
  }
  public resetAutoDeleteAutoCreatedReservations() {
    this._autoDeleteAutoCreatedReservations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteAutoCreatedReservationsInput() {
    return this._autoDeleteAutoCreatedReservations;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // planning_status - computed: true, optional: true, required: false
  private _planningStatus?: string; 
  public get planningStatus() {
    return this.getStringAttribute('planning_status');
  }
  public set planningStatus(value: string) {
    this._planningStatus = value;
  }
  public resetPlanningStatus() {
    this._planningStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planningStatusInput() {
    return this._planningStatus;
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

  // reservation_mode - computed: false, optional: true, required: false
  private _reservationMode?: string; 
  public get reservationMode() {
    return this.getStringAttribute('reservation_mode');
  }
  public set reservationMode(value: string) {
    this._reservationMode = value;
  }
  public resetReservationMode() {
    this._reservationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationModeInput() {
    return this._reservationMode;
  }

  // reservation_name - computed: false, optional: true, required: false
  private _reservationName?: string; 
  public get reservationName() {
    return this.getStringAttribute('reservation_name');
  }
  public set reservationName(value: string) {
    this._reservationName = value;
  }
  public resetReservationName() {
    this._reservationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationNameInput() {
    return this._reservationName;
  }

  // scheduling_type - computed: false, optional: true, required: false
  private _schedulingType?: string; 
  public get schedulingType() {
    return this.getStringAttribute('scheduling_type');
  }
  public set schedulingType(value: string) {
    this._schedulingType = value;
  }
  public resetSchedulingType() {
    this._schedulingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTypeInput() {
    return this._schedulingType;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // self_link_with_id - computed: true, optional: false, required: false
  public get selfLinkWithId() {
    return this.getStringAttribute('self_link_with_id');
  }

  // specific_reservation_required - computed: false, optional: true, required: false
  private _specificReservationRequired?: boolean | cdktf.IResolvable; 
  public get specificReservationRequired() {
    return this.getBooleanAttribute('specific_reservation_required');
  }
  public set specificReservationRequired(value: boolean | cdktf.IResolvable) {
    this._specificReservationRequired = value;
  }
  public resetSpecificReservationRequired() {
    this._specificReservationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationRequiredInput() {
    return this._specificReservationRequired;
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleComputeFutureReservationStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // auto_created_reservations_duration - computed: false, optional: true, required: false
  private _autoCreatedReservationsDuration = new GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference(this, "auto_created_reservations_duration");
  public get autoCreatedReservationsDuration() {
    return this._autoCreatedReservationsDuration;
  }
  public putAutoCreatedReservationsDuration(value: GoogleComputeFutureReservationAutoCreatedReservationsDuration) {
    this._autoCreatedReservationsDuration.internalValue = value;
  }
  public resetAutoCreatedReservationsDuration() {
    this._autoCreatedReservationsDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreatedReservationsDurationInput() {
    return this._autoCreatedReservationsDuration.internalValue;
  }

  // commitment_info - computed: false, optional: true, required: false
  private _commitmentInfo = new GoogleComputeFutureReservationCommitmentInfoOutputReference(this, "commitment_info");
  public get commitmentInfo() {
    return this._commitmentInfo;
  }
  public putCommitmentInfo(value: GoogleComputeFutureReservationCommitmentInfo) {
    this._commitmentInfo.internalValue = value;
  }
  public resetCommitmentInfo() {
    this._commitmentInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentInfoInput() {
    return this._commitmentInfo.internalValue;
  }

  // share_settings - computed: false, optional: true, required: false
  private _shareSettings = new GoogleComputeFutureReservationShareSettingsOutputReference(this, "share_settings");
  public get shareSettings() {
    return this._shareSettings;
  }
  public putShareSettings(value: GoogleComputeFutureReservationShareSettings) {
    this._shareSettings.internalValue = value;
  }
  public resetShareSettings() {
    this._shareSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareSettingsInput() {
    return this._shareSettings.internalValue;
  }

  // specific_sku_properties - computed: false, optional: true, required: false
  private _specificSkuProperties = new GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference(this, "specific_sku_properties");
  public get specificSkuProperties() {
    return this._specificSkuProperties;
  }
  public putSpecificSkuProperties(value: GoogleComputeFutureReservationSpecificSkuProperties) {
    this._specificSkuProperties.internalValue = value;
  }
  public resetSpecificSkuProperties() {
    this._specificSkuProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificSkuPropertiesInput() {
    return this._specificSkuProperties.internalValue;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow = new GoogleComputeFutureReservationTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: GoogleComputeFutureReservationTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeFutureReservationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeFutureReservationTimeouts) {
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
      auto_created_reservations_delete_time: cdktf.stringToTerraform(this._autoCreatedReservationsDeleteTime),
      auto_delete_auto_created_reservations: cdktf.booleanToTerraform(this._autoDeleteAutoCreatedReservations),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      planning_status: cdktf.stringToTerraform(this._planningStatus),
      project: cdktf.stringToTerraform(this._project),
      reservation_mode: cdktf.stringToTerraform(this._reservationMode),
      reservation_name: cdktf.stringToTerraform(this._reservationName),
      scheduling_type: cdktf.stringToTerraform(this._schedulingType),
      specific_reservation_required: cdktf.booleanToTerraform(this._specificReservationRequired),
      auto_created_reservations_duration: googleComputeFutureReservationAutoCreatedReservationsDurationToTerraform(this._autoCreatedReservationsDuration.internalValue),
      commitment_info: googleComputeFutureReservationCommitmentInfoToTerraform(this._commitmentInfo.internalValue),
      share_settings: googleComputeFutureReservationShareSettingsToTerraform(this._shareSettings.internalValue),
      specific_sku_properties: googleComputeFutureReservationSpecificSkuPropertiesToTerraform(this._specificSkuProperties.internalValue),
      time_window: googleComputeFutureReservationTimeWindowToTerraform(this._timeWindow.internalValue),
      timeouts: googleComputeFutureReservationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_created_reservations_delete_time: {
        value: cdktf.stringToHclTerraform(this._autoCreatedReservationsDeleteTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_delete_auto_created_reservations: {
        value: cdktf.booleanToHclTerraform(this._autoDeleteAutoCreatedReservations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      planning_status: {
        value: cdktf.stringToHclTerraform(this._planningStatus),
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
      reservation_mode: {
        value: cdktf.stringToHclTerraform(this._reservationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reservation_name: {
        value: cdktf.stringToHclTerraform(this._reservationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_type: {
        value: cdktf.stringToHclTerraform(this._schedulingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specific_reservation_required: {
        value: cdktf.booleanToHclTerraform(this._specificReservationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_created_reservations_duration: {
        value: googleComputeFutureReservationAutoCreatedReservationsDurationToHclTerraform(this._autoCreatedReservationsDuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeFutureReservationAutoCreatedReservationsDurationList",
      },
      commitment_info: {
        value: googleComputeFutureReservationCommitmentInfoToHclTerraform(this._commitmentInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeFutureReservationCommitmentInfoList",
      },
      share_settings: {
        value: googleComputeFutureReservationShareSettingsToHclTerraform(this._shareSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeFutureReservationShareSettingsList",
      },
      specific_sku_properties: {
        value: googleComputeFutureReservationSpecificSkuPropertiesToHclTerraform(this._specificSkuProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeFutureReservationSpecificSkuPropertiesList",
      },
      time_window: {
        value: googleComputeFutureReservationTimeWindowToHclTerraform(this._timeWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeFutureReservationTimeWindowList",
      },
      timeouts: {
        value: googleComputeFutureReservationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeFutureReservationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
