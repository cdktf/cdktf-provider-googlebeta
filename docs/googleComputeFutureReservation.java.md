# `googleComputeFutureReservation` Submodule <a name="`googleComputeFutureReservation` Submodule" id="@cdktf/provider-google-beta.googleComputeFutureReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeFutureReservation <a name="GoogleComputeFutureReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation google_compute_future_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservation;

GoogleComputeFutureReservation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .timeWindow(GoogleComputeFutureReservationTimeWindow)
//  .aggregateReservation(GoogleComputeFutureReservationAggregateReservation)
//  .autoCreatedReservationsDeleteTime(java.lang.String)
//  .autoCreatedReservationsDuration(GoogleComputeFutureReservationAutoCreatedReservationsDuration)
//  .autoDeleteAutoCreatedReservations(java.lang.Boolean)
//  .autoDeleteAutoCreatedReservations(IResolvable)
//  .commitmentInfo(GoogleComputeFutureReservationCommitmentInfo)
//  .deploymentType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .namePrefix(java.lang.String)
//  .planningStatus(java.lang.String)
//  .project(java.lang.String)
//  .reservationMode(java.lang.String)
//  .reservationName(java.lang.String)
//  .schedulingType(java.lang.String)
//  .shareSettings(GoogleComputeFutureReservationShareSettings)
//  .specificReservationRequired(java.lang.Boolean)
//  .specificReservationRequired(IResolvable)
//  .specificSkuProperties(GoogleComputeFutureReservationSpecificSkuProperties)
//  .timeouts(GoogleComputeFutureReservationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.aggregateReservation">aggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | aggregate_reservation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.autoCreatedReservationsDeleteTime">autoCreatedReservationsDeleteTime</a></code> | <code>java.lang.String</code> | Future timestamp when the FR auto-created reservations will be deleted by Compute Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.autoCreatedReservationsDuration">autoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | auto_created_reservations_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.autoDeleteAutoCreatedReservations">autoDeleteAutoCreatedReservations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting for enabling or disabling automatic deletion for auto-created reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.commitmentInfo">commitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | commitment_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Name prefix for the reservations to be created at the time of delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.planningStatus">planningStatus</a></code> | <code>java.lang.String</code> | Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.reservationMode">reservationMode</a></code> | <code>java.lang.String</code> | The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.reservationName">reservationName</a></code> | <code>java.lang.String</code> | Name of reservations where the capacity is provisioned at the time of delivery of future reservations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.schedulingType">schedulingType</a></code> | <code>java.lang.String</code> | Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.specificReservationRequired">specificReservationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | specific_sku_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the las
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#name GoogleComputeFutureReservation#name}

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.timeWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#time_window GoogleComputeFutureReservation#time_window}

---

##### `aggregateReservation`<sup>Optional</sup> <a name="aggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.aggregateReservation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

aggregate_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#aggregate_reservation GoogleComputeFutureReservation#aggregate_reservation}

---

##### `autoCreatedReservationsDeleteTime`<sup>Optional</sup> <a name="autoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.autoCreatedReservationsDeleteTime"></a>

- *Type:* java.lang.String

Future timestamp when the FR auto-created reservations will be deleted by Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#auto_created_reservations_delete_time GoogleComputeFutureReservation#auto_created_reservations_delete_time}

---

##### `autoCreatedReservationsDuration`<sup>Optional</sup> <a name="autoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.autoCreatedReservationsDuration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

auto_created_reservations_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#auto_created_reservations_duration GoogleComputeFutureReservation#auto_created_reservations_duration}

---

##### `autoDeleteAutoCreatedReservations`<sup>Optional</sup> <a name="autoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.autoDeleteAutoCreatedReservations"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting for enabling or disabling automatic deletion for auto-created reservation.

If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [autoCreatedReservationsDeleteTime, autoCreatedReservationsDuration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#auto_delete_auto_created_reservations GoogleComputeFutureReservation#auto_delete_auto_created_reservations}

---

##### `commitmentInfo`<sup>Optional</sup> <a name="commitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.commitmentInfo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

commitment_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#commitment_info GoogleComputeFutureReservation#commitment_info}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#deployment_type GoogleComputeFutureReservation#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#description GoogleComputeFutureReservation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Name prefix for the reservations to be created at the time of delivery.

The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#name_prefix GoogleComputeFutureReservation#name_prefix}

---

##### `planningStatus`<sup>Optional</sup> <a name="planningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.planningStatus"></a>

- *Type:* java.lang.String

Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#planning_status GoogleComputeFutureReservation#planning_status}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}.

---

##### `reservationMode`<sup>Optional</sup> <a name="reservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.reservationMode"></a>

- *Type:* java.lang.String

The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#reservation_mode GoogleComputeFutureReservation#reservation_mode}

---

##### `reservationName`<sup>Optional</sup> <a name="reservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.reservationName"></a>

- *Type:* java.lang.String

Name of reservations where the capacity is provisioned at the time of delivery of future reservations.

If the reservation with the given name does not exist already, it is created automatically at the time of Approval with INACTIVE state till specified start-time. Either provide the reservationName or a namePrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#reservation_name GoogleComputeFutureReservation#reservation_name}

---

##### `schedulingType`<sup>Optional</sup> <a name="schedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.schedulingType"></a>

- *Type:* java.lang.String

Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#scheduling_type GoogleComputeFutureReservation#scheduling_type}

---

##### `shareSettings`<sup>Optional</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.shareSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#share_settings GoogleComputeFutureReservation#share_settings}

---

##### `specificReservationRequired`<sup>Optional</sup> <a name="specificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.specificReservationRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation.

If the field is set, then only VMs that target the reservation by name can consume from the delivered reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#specific_reservation_required GoogleComputeFutureReservation#specific_reservation_required}

---

##### `specificSkuProperties`<sup>Optional</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.specificSkuProperties"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

specific_sku_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#specific_sku_properties GoogleComputeFutureReservation#specific_sku_properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#timeouts GoogleComputeFutureReservation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation">putAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration">putAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo">putCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings">putShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties">putSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAggregateReservation">resetAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDeleteTime">resetAutoCreatedReservationsDeleteTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDuration">resetAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoDeleteAutoCreatedReservations">resetAutoDeleteAutoCreatedReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetCommitmentInfo">resetCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetPlanningStatus">resetPlanningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationMode">resetReservationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationName">resetReservationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSchedulingType">resetSchedulingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetShareSettings">resetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificReservationRequired">resetSpecificReservationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificSkuProperties">resetSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAggregateReservation` <a name="putAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation"></a>

```java
public void putAggregateReservation(GoogleComputeFutureReservationAggregateReservation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---

##### `putAutoCreatedReservationsDuration` <a name="putAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration"></a>

```java
public void putAutoCreatedReservationsDuration(GoogleComputeFutureReservationAutoCreatedReservationsDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---

##### `putCommitmentInfo` <a name="putCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo"></a>

```java
public void putCommitmentInfo(GoogleComputeFutureReservationCommitmentInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---

##### `putShareSettings` <a name="putShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings"></a>

```java
public void putShareSettings(GoogleComputeFutureReservationShareSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---

##### `putSpecificSkuProperties` <a name="putSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties"></a>

```java
public void putSpecificSkuProperties(GoogleComputeFutureReservationSpecificSkuProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeFutureReservationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow"></a>

```java
public void putTimeWindow(GoogleComputeFutureReservationTimeWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---

##### `resetAggregateReservation` <a name="resetAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAggregateReservation"></a>

```java
public void resetAggregateReservation()
```

##### `resetAutoCreatedReservationsDeleteTime` <a name="resetAutoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDeleteTime"></a>

```java
public void resetAutoCreatedReservationsDeleteTime()
```

##### `resetAutoCreatedReservationsDuration` <a name="resetAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDuration"></a>

```java
public void resetAutoCreatedReservationsDuration()
```

##### `resetAutoDeleteAutoCreatedReservations` <a name="resetAutoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoDeleteAutoCreatedReservations"></a>

```java
public void resetAutoDeleteAutoCreatedReservations()
```

##### `resetCommitmentInfo` <a name="resetCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetCommitmentInfo"></a>

```java
public void resetCommitmentInfo()
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetId"></a>

```java
public void resetId()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPlanningStatus` <a name="resetPlanningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetPlanningStatus"></a>

```java
public void resetPlanningStatus()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetProject"></a>

```java
public void resetProject()
```

##### `resetReservationMode` <a name="resetReservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationMode"></a>

```java
public void resetReservationMode()
```

##### `resetReservationName` <a name="resetReservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationName"></a>

```java
public void resetReservationName()
```

##### `resetSchedulingType` <a name="resetSchedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSchedulingType"></a>

```java
public void resetSchedulingType()
```

##### `resetShareSettings` <a name="resetShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetShareSettings"></a>

```java
public void resetShareSettings()
```

##### `resetSpecificReservationRequired` <a name="resetSpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificReservationRequired"></a>

```java
public void resetSpecificReservationRequired()
```

##### `resetSpecificSkuProperties` <a name="resetSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificSkuProperties"></a>

```java
public void resetSpecificSkuProperties()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservation;

GoogleComputeFutureReservation.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservation;

GoogleComputeFutureReservation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservation;

GoogleComputeFutureReservation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservation;

GoogleComputeFutureReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeFutureReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeFutureReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeFutureReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeFutureReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservation">aggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference">GoogleComputeFutureReservationAggregateReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDuration">autoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference">GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfo">commitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference">GoogleComputeFutureReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLinkWithId">selfLinkWithId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference">GoogleComputeFutureReservationShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList">GoogleComputeFutureReservationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference">GoogleComputeFutureReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference">GoogleComputeFutureReservationTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservationInput">aggregateReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTimeInput">autoCreatedReservationsDeleteTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDurationInput">autoCreatedReservationsDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservationsInput">autoDeleteAutoCreatedReservationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfoInput">commitmentInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatusInput">planningStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationModeInput">reservationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationNameInput">reservationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingTypeInput">schedulingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettingsInput">shareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequiredInput">specificReservationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuPropertiesInput">specificSkuPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTime">autoCreatedReservationsDeleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservations">autoDeleteAutoCreatedReservations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatus">planningStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationMode">reservationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationName">reservationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingType">schedulingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequired">specificReservationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aggregateReservation`<sup>Required</sup> <a name="aggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservation"></a>

```java
public GoogleComputeFutureReservationAggregateReservationOutputReference getAggregateReservation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference">GoogleComputeFutureReservationAggregateReservationOutputReference</a>

---

##### `autoCreatedReservationsDuration`<sup>Required</sup> <a name="autoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDuration"></a>

```java
public GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference getAutoCreatedReservationsDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference">GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference</a>

---

##### `commitmentInfo`<sup>Required</sup> <a name="commitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfo"></a>

```java
public GoogleComputeFutureReservationCommitmentInfoOutputReference getCommitmentInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference">GoogleComputeFutureReservationCommitmentInfoOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLinkWithId"></a>

```java
public java.lang.String getSelfLinkWithId();
```

- *Type:* java.lang.String

---

##### `shareSettings`<sup>Required</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettings"></a>

```java
public GoogleComputeFutureReservationShareSettingsOutputReference getShareSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference">GoogleComputeFutureReservationShareSettingsOutputReference</a>

---

##### `specificSkuProperties`<sup>Required</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuProperties"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference getSpecificSkuProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.status"></a>

```java
public GoogleComputeFutureReservationStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList">GoogleComputeFutureReservationStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeouts"></a>

```java
public GoogleComputeFutureReservationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference">GoogleComputeFutureReservationTimeoutsOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindow"></a>

```java
public GoogleComputeFutureReservationTimeWindowOutputReference getTimeWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference">GoogleComputeFutureReservationTimeWindowOutputReference</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `aggregateReservationInput`<sup>Optional</sup> <a name="aggregateReservationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservationInput"></a>

```java
public GoogleComputeFutureReservationAggregateReservation getAggregateReservationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---

##### `autoCreatedReservationsDeleteTimeInput`<sup>Optional</sup> <a name="autoCreatedReservationsDeleteTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTimeInput"></a>

```java
public java.lang.String getAutoCreatedReservationsDeleteTimeInput();
```

- *Type:* java.lang.String

---

##### `autoCreatedReservationsDurationInput`<sup>Optional</sup> <a name="autoCreatedReservationsDurationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDurationInput"></a>

```java
public GoogleComputeFutureReservationAutoCreatedReservationsDuration getAutoCreatedReservationsDurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---

##### `autoDeleteAutoCreatedReservationsInput`<sup>Optional</sup> <a name="autoDeleteAutoCreatedReservationsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservationsInput"></a>

```java
public java.lang.Object getAutoDeleteAutoCreatedReservationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitmentInfoInput`<sup>Optional</sup> <a name="commitmentInfoInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfoInput"></a>

```java
public GoogleComputeFutureReservationCommitmentInfo getCommitmentInfoInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `planningStatusInput`<sup>Optional</sup> <a name="planningStatusInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatusInput"></a>

```java
public java.lang.String getPlanningStatusInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservationModeInput`<sup>Optional</sup> <a name="reservationModeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationModeInput"></a>

```java
public java.lang.String getReservationModeInput();
```

- *Type:* java.lang.String

---

##### `reservationNameInput`<sup>Optional</sup> <a name="reservationNameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationNameInput"></a>

```java
public java.lang.String getReservationNameInput();
```

- *Type:* java.lang.String

---

##### `schedulingTypeInput`<sup>Optional</sup> <a name="schedulingTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingTypeInput"></a>

```java
public java.lang.String getSchedulingTypeInput();
```

- *Type:* java.lang.String

---

##### `shareSettingsInput`<sup>Optional</sup> <a name="shareSettingsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettingsInput"></a>

```java
public GoogleComputeFutureReservationShareSettings getShareSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---

##### `specificReservationRequiredInput`<sup>Optional</sup> <a name="specificReservationRequiredInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequiredInput"></a>

```java
public java.lang.Object getSpecificReservationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `specificSkuPropertiesInput`<sup>Optional</sup> <a name="specificSkuPropertiesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuPropertiesInput"></a>

```java
public GoogleComputeFutureReservationSpecificSkuProperties getSpecificSkuPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindowInput"></a>

```java
public GoogleComputeFutureReservationTimeWindow getTimeWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---

##### `autoCreatedReservationsDeleteTime`<sup>Required</sup> <a name="autoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTime"></a>

```java
public java.lang.String getAutoCreatedReservationsDeleteTime();
```

- *Type:* java.lang.String

---

##### `autoDeleteAutoCreatedReservations`<sup>Required</sup> <a name="autoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservations"></a>

```java
public java.lang.Object getAutoDeleteAutoCreatedReservations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `planningStatus`<sup>Required</sup> <a name="planningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatus"></a>

```java
public java.lang.String getPlanningStatus();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reservationMode`<sup>Required</sup> <a name="reservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationMode"></a>

```java
public java.lang.String getReservationMode();
```

- *Type:* java.lang.String

---

##### `reservationName`<sup>Required</sup> <a name="reservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationName"></a>

```java
public java.lang.String getReservationName();
```

- *Type:* java.lang.String

---

##### `schedulingType`<sup>Required</sup> <a name="schedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingType"></a>

```java
public java.lang.String getSchedulingType();
```

- *Type:* java.lang.String

---

##### `specificReservationRequired`<sup>Required</sup> <a name="specificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequired"></a>

```java
public java.lang.Object getSpecificReservationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeFutureReservationAggregateReservation <a name="GoogleComputeFutureReservationAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAggregateReservation;

GoogleComputeFutureReservationAggregateReservation.builder()
    .reservedResources(IResolvable)
    .reservedResources(java.util.List<GoogleComputeFutureReservationAggregateReservationReservedResources>)
//  .vmFamily(java.lang.String)
//  .workloadType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.reservedResources">reservedResources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>></code> | reserved_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.vmFamily">vmFamily</a></code> | <code>java.lang.String</code> | The VM family that all instances scheduled against this reservation must belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | The workload type of the instances that will target this reservation. Possible values: ["BATCH", "SERVING", "UNSPECIFIED"]. |

---

##### `reservedResources`<sup>Required</sup> <a name="reservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.reservedResources"></a>

```java
public java.lang.Object getReservedResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>>

reserved_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#reserved_resources GoogleComputeFutureReservation#reserved_resources}

---

##### `vmFamily`<sup>Optional</sup> <a name="vmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.vmFamily"></a>

```java
public java.lang.String getVmFamily();
```

- *Type:* java.lang.String

The VM family that all instances scheduled against this reservation must belong to.

Possible values: ["VM_FAMILY_CLOUD_TPU_DEVICE_CT3", "VM_FAMILY_CLOUD_TPU_LITE_DEVICE_CT5L", "VM_FAMILY_CLOUD_TPU_LITE_POD_SLICE_CT5LP", "VM_FAMILY_CLOUD_TPU_LITE_POD_SLICE_CT6E", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT3P", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT4P", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT5P"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#vm_family GoogleComputeFutureReservation#vm_family}

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

The workload type of the instances that will target this reservation. Possible values: ["BATCH", "SERVING", "UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#workload_type GoogleComputeFutureReservation#workload_type}

---

### GoogleComputeFutureReservationAggregateReservationReservedResources <a name="GoogleComputeFutureReservationAggregateReservationReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAggregateReservationReservedResources;

GoogleComputeFutureReservationAggregateReservationReservedResources.builder()
//  .accelerator(GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.property.accelerator">accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | accelerator block. |

---

##### `accelerator`<sup>Optional</sup> <a name="accelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.property.accelerator"></a>

```java
public GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator getAccelerator();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#accelerator GoogleComputeFutureReservation#accelerator}

---

### GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator;

GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | Number of accelerators of specified type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l". |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

Number of accelerators of specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}

---

### GoogleComputeFutureReservationAutoCreatedReservationsDuration <a name="GoogleComputeFutureReservationAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration;

GoogleComputeFutureReservationAutoCreatedReservationsDuration.builder()
//  .nanos(java.lang.Number)
//  .seconds(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.seconds">seconds</a></code> | <code>java.lang.String</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}

---

### GoogleComputeFutureReservationCommitmentInfo <a name="GoogleComputeFutureReservationCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationCommitmentInfo;

GoogleComputeFutureReservationCommitmentInfo.builder()
//  .commitmentName(java.lang.String)
//  .commitmentPlan(java.lang.String)
//  .previousCommitmentTerms(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentName">commitmentName</a></code> | <code>java.lang.String</code> | name of the commitment where capacity is being delivered to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentPlan">commitmentPlan</a></code> | <code>java.lang.String</code> | Indicates if a Commitment needs to be created as part of FR delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.previousCommitmentTerms">previousCommitmentTerms</a></code> | <code>java.lang.String</code> | Only applicable if FR is delivering to the same reservation. |

---

##### `commitmentName`<sup>Optional</sup> <a name="commitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentName"></a>

```java
public java.lang.String getCommitmentName();
```

- *Type:* java.lang.String

name of the commitment where capacity is being delivered to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#commitment_name GoogleComputeFutureReservation#commitment_name}

---

##### `commitmentPlan`<sup>Optional</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentPlan"></a>

```java
public java.lang.String getCommitmentPlan();
```

- *Type:* java.lang.String

Indicates if a Commitment needs to be created as part of FR delivery.

If this field is not present, then no commitment needs to be created. Possible values: ["INVALID", "THIRTY_SIX_MONTH", "TWELVE_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#commitment_plan GoogleComputeFutureReservation#commitment_plan}

---

##### `previousCommitmentTerms`<sup>Optional</sup> <a name="previousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.previousCommitmentTerms"></a>

```java
public java.lang.String getPreviousCommitmentTerms();
```

- *Type:* java.lang.String

Only applicable if FR is delivering to the same reservation.

If set, all parent commitments will be extended to match the end date of the plan for this commitment. Possible values: ["EXTEND"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#previous_commitment_terms GoogleComputeFutureReservation#previous_commitment_terms}

---

### GoogleComputeFutureReservationConfig <a name="GoogleComputeFutureReservationConfig" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationConfig;

GoogleComputeFutureReservationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .timeWindow(GoogleComputeFutureReservationTimeWindow)
//  .aggregateReservation(GoogleComputeFutureReservationAggregateReservation)
//  .autoCreatedReservationsDeleteTime(java.lang.String)
//  .autoCreatedReservationsDuration(GoogleComputeFutureReservationAutoCreatedReservationsDuration)
//  .autoDeleteAutoCreatedReservations(java.lang.Boolean)
//  .autoDeleteAutoCreatedReservations(IResolvable)
//  .commitmentInfo(GoogleComputeFutureReservationCommitmentInfo)
//  .deploymentType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .namePrefix(java.lang.String)
//  .planningStatus(java.lang.String)
//  .project(java.lang.String)
//  .reservationMode(java.lang.String)
//  .reservationName(java.lang.String)
//  .schedulingType(java.lang.String)
//  .shareSettings(GoogleComputeFutureReservationShareSettings)
//  .specificReservationRequired(java.lang.Boolean)
//  .specificReservationRequired(IResolvable)
//  .specificSkuProperties(GoogleComputeFutureReservationSpecificSkuProperties)
//  .timeouts(GoogleComputeFutureReservationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.aggregateReservation">aggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | aggregate_reservation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDeleteTime">autoCreatedReservationsDeleteTime</a></code> | <code>java.lang.String</code> | Future timestamp when the FR auto-created reservations will be deleted by Compute Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDuration">autoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | auto_created_reservations_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoDeleteAutoCreatedReservations">autoDeleteAutoCreatedReservations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting for enabling or disabling automatic deletion for auto-created reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.commitmentInfo">commitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | commitment_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Name prefix for the reservations to be created at the time of delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.planningStatus">planningStatus</a></code> | <code>java.lang.String</code> | Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationMode">reservationMode</a></code> | <code>java.lang.String</code> | The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationName">reservationName</a></code> | <code>java.lang.String</code> | Name of reservations where the capacity is provisioned at the time of delivery of future reservations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.schedulingType">schedulingType</a></code> | <code>java.lang.String</code> | Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificReservationRequired">specificReservationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | specific_sku_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the las
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#name GoogleComputeFutureReservation#name}

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeWindow"></a>

```java
public GoogleComputeFutureReservationTimeWindow getTimeWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#time_window GoogleComputeFutureReservation#time_window}

---

##### `aggregateReservation`<sup>Optional</sup> <a name="aggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.aggregateReservation"></a>

```java
public GoogleComputeFutureReservationAggregateReservation getAggregateReservation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

aggregate_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#aggregate_reservation GoogleComputeFutureReservation#aggregate_reservation}

---

##### `autoCreatedReservationsDeleteTime`<sup>Optional</sup> <a name="autoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDeleteTime"></a>

```java
public java.lang.String getAutoCreatedReservationsDeleteTime();
```

- *Type:* java.lang.String

Future timestamp when the FR auto-created reservations will be deleted by Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#auto_created_reservations_delete_time GoogleComputeFutureReservation#auto_created_reservations_delete_time}

---

##### `autoCreatedReservationsDuration`<sup>Optional</sup> <a name="autoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDuration"></a>

```java
public GoogleComputeFutureReservationAutoCreatedReservationsDuration getAutoCreatedReservationsDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

auto_created_reservations_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#auto_created_reservations_duration GoogleComputeFutureReservation#auto_created_reservations_duration}

---

##### `autoDeleteAutoCreatedReservations`<sup>Optional</sup> <a name="autoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoDeleteAutoCreatedReservations"></a>

```java
public java.lang.Object getAutoDeleteAutoCreatedReservations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting for enabling or disabling automatic deletion for auto-created reservation.

If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [autoCreatedReservationsDeleteTime, autoCreatedReservationsDuration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#auto_delete_auto_created_reservations GoogleComputeFutureReservation#auto_delete_auto_created_reservations}

---

##### `commitmentInfo`<sup>Optional</sup> <a name="commitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.commitmentInfo"></a>

```java
public GoogleComputeFutureReservationCommitmentInfo getCommitmentInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

commitment_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#commitment_info GoogleComputeFutureReservation#commitment_info}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#deployment_type GoogleComputeFutureReservation#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#description GoogleComputeFutureReservation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Name prefix for the reservations to be created at the time of delivery.

The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#name_prefix GoogleComputeFutureReservation#name_prefix}

---

##### `planningStatus`<sup>Optional</sup> <a name="planningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.planningStatus"></a>

```java
public java.lang.String getPlanningStatus();
```

- *Type:* java.lang.String

Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#planning_status GoogleComputeFutureReservation#planning_status}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}.

---

##### `reservationMode`<sup>Optional</sup> <a name="reservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationMode"></a>

```java
public java.lang.String getReservationMode();
```

- *Type:* java.lang.String

The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#reservation_mode GoogleComputeFutureReservation#reservation_mode}

---

##### `reservationName`<sup>Optional</sup> <a name="reservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationName"></a>

```java
public java.lang.String getReservationName();
```

- *Type:* java.lang.String

Name of reservations where the capacity is provisioned at the time of delivery of future reservations.

If the reservation with the given name does not exist already, it is created automatically at the time of Approval with INACTIVE state till specified start-time. Either provide the reservationName or a namePrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#reservation_name GoogleComputeFutureReservation#reservation_name}

---

##### `schedulingType`<sup>Optional</sup> <a name="schedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.schedulingType"></a>

```java
public java.lang.String getSchedulingType();
```

- *Type:* java.lang.String

Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#scheduling_type GoogleComputeFutureReservation#scheduling_type}

---

##### `shareSettings`<sup>Optional</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.shareSettings"></a>

```java
public GoogleComputeFutureReservationShareSettings getShareSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#share_settings GoogleComputeFutureReservation#share_settings}

---

##### `specificReservationRequired`<sup>Optional</sup> <a name="specificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificReservationRequired"></a>

```java
public java.lang.Object getSpecificReservationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation.

If the field is set, then only VMs that target the reservation by name can consume from the delivered reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#specific_reservation_required GoogleComputeFutureReservation#specific_reservation_required}

---

##### `specificSkuProperties`<sup>Optional</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificSkuProperties"></a>

```java
public GoogleComputeFutureReservationSpecificSkuProperties getSpecificSkuProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

specific_sku_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#specific_sku_properties GoogleComputeFutureReservation#specific_sku_properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeouts"></a>

```java
public GoogleComputeFutureReservationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#timeouts GoogleComputeFutureReservation#timeouts}

---

### GoogleComputeFutureReservationShareSettings <a name="GoogleComputeFutureReservationShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationShareSettings;

GoogleComputeFutureReservationShareSettings.builder()
//  .projectMap(IResolvable)
//  .projectMap(java.util.List<GoogleComputeFutureReservationShareSettingsProjectMap>)
//  .projects(java.util.List<java.lang.String>)
//  .shareType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projectMap">projectMap</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>></code> | project_map block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | list of Project names to specify consumer projects for this shared-reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.shareType">shareType</a></code> | <code>java.lang.String</code> | Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]. |

---

##### `projectMap`<sup>Optional</sup> <a name="projectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projectMap"></a>

```java
public java.lang.Object getProjectMap();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>>

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#project_map GoogleComputeFutureReservation#project_map}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

list of Project names to specify consumer projects for this shared-reservation.

This is only valid when shareType's value is SPECIFIC_PROJECTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#projects GoogleComputeFutureReservation#projects}

---

##### `shareType`<sup>Optional</sup> <a name="shareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#share_type GoogleComputeFutureReservation#share_type}

---

### GoogleComputeFutureReservationShareSettingsProjectMap <a name="GoogleComputeFutureReservationShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationShareSettingsProjectMap;

GoogleComputeFutureReservationShareSettingsProjectMap.builder()
    .id(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project ID, should be same as the key of this project config in the parent map. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project ID, should be same as the key of this project config in the parent map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#project_id GoogleComputeFutureReservation#project_id}

---

### GoogleComputeFutureReservationSpecificSkuProperties <a name="GoogleComputeFutureReservationSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuProperties;

GoogleComputeFutureReservationSpecificSkuProperties.builder()
//  .instanceProperties(GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties)
//  .sourceInstanceTemplate(java.lang.String)
//  .totalCount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.instanceProperties">instanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | instance_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.sourceInstanceTemplate">sourceInstanceTemplate</a></code> | <code>java.lang.String</code> | The instance template that will be used to populate the ReservedInstanceProperties of the future reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.totalCount">totalCount</a></code> | <code>java.lang.String</code> | Total number of instances for which capacity assurance is requested at a future time period. |

---

##### `instanceProperties`<sup>Optional</sup> <a name="instanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.instanceProperties"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties getInstanceProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

instance_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#instance_properties GoogleComputeFutureReservation#instance_properties}

---

##### `sourceInstanceTemplate`<sup>Optional</sup> <a name="sourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.sourceInstanceTemplate"></a>

```java
public java.lang.String getSourceInstanceTemplate();
```

- *Type:* java.lang.String

The instance template that will be used to populate the ReservedInstanceProperties of the future reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#source_instance_template GoogleComputeFutureReservation#source_instance_template}

---

##### `totalCount`<sup>Optional</sup> <a name="totalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.totalCount"></a>

```java
public java.lang.String getTotalCount();
```

- *Type:* java.lang.String

Total number of instances for which capacity assurance is requested at a future time period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#total_count GoogleComputeFutureReservation#total_count}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties;

GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.builder()
//  .guestAccelerators(IResolvable)
//  .guestAccelerators(java.util.List<GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators>)
//  .localSsds(IResolvable)
//  .localSsds(java.util.List<GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds>)
//  .locationHint(java.lang.String)
//  .machineType(java.lang.String)
//  .maintenanceFreezeDurationHours(java.lang.Number)
//  .maintenanceInterval(java.lang.String)
//  .minCpuPlatform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.guestAccelerators">guestAccelerators</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>></code> | guest_accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.localSsds">localSsds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>></code> | local_ssds block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.locationHint">locationHint</a></code> | <code>java.lang.String</code> | An opaque location hint used to place the allocation close to other resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceFreezeDurationHours">maintenanceFreezeDurationHours</a></code> | <code>java.lang.Number</code> | Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | Minimum cpu platform the reservation. |

---

##### `guestAccelerators`<sup>Optional</sup> <a name="guestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.guestAccelerators"></a>

```java
public java.lang.Object getGuestAccelerators();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>>

guest_accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#guest_accelerators GoogleComputeFutureReservation#guest_accelerators}

---

##### `localSsds`<sup>Optional</sup> <a name="localSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.localSsds"></a>

```java
public java.lang.Object getLocalSsds();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>>

local_ssds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#local_ssds GoogleComputeFutureReservation#local_ssds}

---

##### `locationHint`<sup>Optional</sup> <a name="locationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.locationHint"></a>

```java
public java.lang.String getLocationHint();
```

- *Type:* java.lang.String

An opaque location hint used to place the allocation close to other resources.

This field is for use by internal tools that use the public API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#location_hint GoogleComputeFutureReservation#location_hint}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory.

This also includes specifying custom machine type following custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#machine_type GoogleComputeFutureReservation#machine_type}

---

##### `maintenanceFreezeDurationHours`<sup>Optional</sup> <a name="maintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceFreezeDurationHours"></a>

```java
public java.lang.Number getMaintenanceFreezeDurationHours();
```

- *Type:* java.lang.Number

Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#maintenance_freeze_duration_hours GoogleComputeFutureReservation#maintenance_freeze_duration_hours}

---

##### `maintenanceInterval`<sup>Optional</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#maintenance_interval GoogleComputeFutureReservation#maintenance_interval}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

Minimum cpu platform the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#min_cpu_platform GoogleComputeFutureReservation#min_cpu_platform}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators;

GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | Full or partial URL of the accelerator type resource to attach to this instance. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

Full or partial URL of the accelerator type resource to attach to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds;

GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.builder()
//  .diskSizeGb(java.lang.String)
//  .interface(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.interface">interface</a></code> | <code>java.lang.String</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

Specifies the size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#disk_size_gb GoogleComputeFutureReservation#disk_size_gb}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Possible values: ["SCSI", "NVME"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#interface GoogleComputeFutureReservation#interface}

---

### GoogleComputeFutureReservationStatus <a name="GoogleComputeFutureReservationStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatus;

GoogleComputeFutureReservationStatus.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodState <a name="GoogleComputeFutureReservationStatusLastKnownGoodState" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodState;

GoogleComputeFutureReservationStatusLastKnownGoodState.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo;

GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow.builder()
    .build();
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration;

GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration.builder()
    .build();
```


### GoogleComputeFutureReservationStatusSpecificSkuProperties <a name="GoogleComputeFutureReservationStatusSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusSpecificSkuProperties;

GoogleComputeFutureReservationStatusSpecificSkuProperties.builder()
    .build();
```


### GoogleComputeFutureReservationTimeouts <a name="GoogleComputeFutureReservationTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationTimeouts;

GoogleComputeFutureReservationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}.

---

### GoogleComputeFutureReservationTimeWindow <a name="GoogleComputeFutureReservationTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationTimeWindow;

GoogleComputeFutureReservationTimeWindow.builder()
    .startTime(java.lang.String)
//  .duration(GoogleComputeFutureReservationTimeWindowDuration)
//  .endTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Start time of the future reservation in RFC3339 format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.endTime">endTime</a></code> | <code>java.lang.String</code> | End time of the future reservation in RFC3339 format. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Start time of the future reservation in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#start_time GoogleComputeFutureReservation#start_time}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.duration"></a>

```java
public GoogleComputeFutureReservationTimeWindowDuration getDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#duration GoogleComputeFutureReservation#duration}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

End time of the future reservation in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#end_time GoogleComputeFutureReservation#end_time}

---

### GoogleComputeFutureReservationTimeWindowDuration <a name="GoogleComputeFutureReservationTimeWindowDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationTimeWindowDuration;

GoogleComputeFutureReservationTimeWindowDuration.builder()
//  .nanos(java.lang.Number)
//  .seconds(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.seconds">seconds</a></code> | <code>java.lang.String</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeFutureReservationAggregateReservationOutputReference <a name="GoogleComputeFutureReservationAggregateReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAggregateReservationOutputReference;

new GoogleComputeFutureReservationAggregateReservationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources">putReservedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetVmFamily">resetVmFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReservedResources` <a name="putReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources"></a>

```java
public void putReservedResources(IResolvable OR java.util.List<GoogleComputeFutureReservationAggregateReservationReservedResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>>

---

##### `resetVmFamily` <a name="resetVmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetVmFamily"></a>

```java
public void resetVmFamily()
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetWorkloadType"></a>

```java
public void resetWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResources">reservedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList">GoogleComputeFutureReservationAggregateReservationReservedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResourcesInput">reservedResourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamilyInput">vmFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamily">vmFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reservedResources`<sup>Required</sup> <a name="reservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResources"></a>

```java
public GoogleComputeFutureReservationAggregateReservationReservedResourcesList getReservedResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList">GoogleComputeFutureReservationAggregateReservationReservedResourcesList</a>

---

##### `reservedResourcesInput`<sup>Optional</sup> <a name="reservedResourcesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResourcesInput"></a>

```java
public java.lang.Object getReservedResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>>

---

##### `vmFamilyInput`<sup>Optional</sup> <a name="vmFamilyInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamilyInput"></a>

```java
public java.lang.String getVmFamilyInput();
```

- *Type:* java.lang.String

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `vmFamily`<sup>Required</sup> <a name="vmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamily"></a>

```java
public java.lang.String getVmFamily();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationAggregateReservation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference;

new GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesList <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList;

new GoogleComputeFutureReservationAggregateReservationReservedResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get"></a>

```java
public GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference;

new GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator">putAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resetAccelerator">resetAccelerator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccelerator` <a name="putAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator"></a>

```java
public void putAccelerator(GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---

##### `resetAccelerator` <a name="resetAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resetAccelerator"></a>

```java
public void resetAccelerator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.accelerator">accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference">GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.acceleratorInput">acceleratorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.accelerator"></a>

```java
public GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference getAccelerator();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference">GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference</a>

---

##### `acceleratorInput`<sup>Optional</sup> <a name="acceleratorInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.acceleratorInput"></a>

```java
public GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator getAcceleratorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>

---


### GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference <a name="GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference;

new GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.secondsInput"></a>

```java
public java.lang.String getSecondsInput();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationAutoCreatedReservationsDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---


### GoogleComputeFutureReservationCommitmentInfoOutputReference <a name="GoogleComputeFutureReservationCommitmentInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationCommitmentInfoOutputReference;

new GoogleComputeFutureReservationCommitmentInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentName">resetCommitmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentPlan">resetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetPreviousCommitmentTerms">resetPreviousCommitmentTerms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitmentName` <a name="resetCommitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentName"></a>

```java
public void resetCommitmentName()
```

##### `resetCommitmentPlan` <a name="resetCommitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentPlan"></a>

```java
public void resetCommitmentPlan()
```

##### `resetPreviousCommitmentTerms` <a name="resetPreviousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetPreviousCommitmentTerms"></a>

```java
public void resetPreviousCommitmentTerms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentNameInput">commitmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlanInput">commitmentPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTermsInput">previousCommitmentTermsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentName">commitmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlan">commitmentPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTerms">previousCommitmentTerms</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitmentNameInput`<sup>Optional</sup> <a name="commitmentNameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentNameInput"></a>

```java
public java.lang.String getCommitmentNameInput();
```

- *Type:* java.lang.String

---

##### `commitmentPlanInput`<sup>Optional</sup> <a name="commitmentPlanInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlanInput"></a>

```java
public java.lang.String getCommitmentPlanInput();
```

- *Type:* java.lang.String

---

##### `previousCommitmentTermsInput`<sup>Optional</sup> <a name="previousCommitmentTermsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTermsInput"></a>

```java
public java.lang.String getPreviousCommitmentTermsInput();
```

- *Type:* java.lang.String

---

##### `commitmentName`<sup>Required</sup> <a name="commitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentName"></a>

```java
public java.lang.String getCommitmentName();
```

- *Type:* java.lang.String

---

##### `commitmentPlan`<sup>Required</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlan"></a>

```java
public java.lang.String getCommitmentPlan();
```

- *Type:* java.lang.String

---

##### `previousCommitmentTerms`<sup>Required</sup> <a name="previousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTerms"></a>

```java
public java.lang.String getPreviousCommitmentTerms();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationCommitmentInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---


### GoogleComputeFutureReservationShareSettingsOutputReference <a name="GoogleComputeFutureReservationShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationShareSettingsOutputReference;

new GoogleComputeFutureReservationShareSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap">putProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjectMap">resetProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjects">resetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetShareType">resetShareType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProjectMap` <a name="putProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap"></a>

```java
public void putProjectMap(IResolvable OR java.util.List<GoogleComputeFutureReservationShareSettingsProjectMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>>

---

##### `resetProjectMap` <a name="resetProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjectMap"></a>

```java
public void resetProjectMap()
```

##### `resetProjects` <a name="resetProjects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjects"></a>

```java
public void resetProjects()
```

##### `resetShareType` <a name="resetShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetShareType"></a>

```java
public void resetShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMap">projectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList">GoogleComputeFutureReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMapInput">projectMapInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectsInput">projectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareTypeInput">shareTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareType">shareType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectMap`<sup>Required</sup> <a name="projectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMap"></a>

```java
public GoogleComputeFutureReservationShareSettingsProjectMapList getProjectMap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList">GoogleComputeFutureReservationShareSettingsProjectMapList</a>

---

##### `projectMapInput`<sup>Optional</sup> <a name="projectMapInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMapInput"></a>

```java
public java.lang.Object getProjectMapInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>>

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectsInput"></a>

```java
public java.util.List<java.lang.String> getProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareTypeInput"></a>

```java
public java.lang.String getShareTypeInput();
```

- *Type:* java.lang.String

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationShareSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---


### GoogleComputeFutureReservationShareSettingsProjectMapList <a name="GoogleComputeFutureReservationShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationShareSettingsProjectMapList;

new GoogleComputeFutureReservationShareSettingsProjectMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get"></a>

```java
public GoogleComputeFutureReservationShareSettingsProjectMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>>

---


### GoogleComputeFutureReservationShareSettingsProjectMapOutputReference <a name="GoogleComputeFutureReservationShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference;

new GoogleComputeFutureReservationShareSettingsProjectMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetInterface">resetInterface</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetInterface"></a>

```java
public void resetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.String getDiskSizeGbInput();
```

- *Type:* java.lang.String

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators">putGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds">putLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetGuestAccelerators">resetGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocalSsds">resetLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocationHint">resetLocationHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceFreezeDurationHours">resetMaintenanceFreezeDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceInterval">resetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuestAccelerators` <a name="putGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators"></a>

```java
public void putGuestAccelerators(IResolvable OR java.util.List<GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>>

---

##### `putLocalSsds` <a name="putLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds"></a>

```java
public void putLocalSsds(IResolvable OR java.util.List<GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>>

---

##### `resetGuestAccelerators` <a name="resetGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetGuestAccelerators"></a>

```java
public void resetGuestAccelerators()
```

##### `resetLocalSsds` <a name="resetLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocalSsds"></a>

```java
public void resetLocalSsds()
```

##### `resetLocationHint` <a name="resetLocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocationHint"></a>

```java
public void resetLocationHint()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMaintenanceFreezeDurationHours` <a name="resetMaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceFreezeDurationHours"></a>

```java
public void resetMaintenanceFreezeDurationHours()
```

##### `resetMaintenanceInterval` <a name="resetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceInterval"></a>

```java
public void resetMaintenanceInterval()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators">guestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds">localSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAcceleratorsInput">guestAcceleratorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsdsInput">localSsdsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHintInput">locationHintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHoursInput">maintenanceFreezeDurationHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceIntervalInput">maintenanceIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint">locationHint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours">maintenanceFreezeDurationHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guestAccelerators`<sup>Required</sup> <a name="guestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList getGuestAccelerators();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a>

---

##### `localSsds`<sup>Required</sup> <a name="localSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList getLocalSsds();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a>

---

##### `guestAcceleratorsInput`<sup>Optional</sup> <a name="guestAcceleratorsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAcceleratorsInput"></a>

```java
public java.lang.Object getGuestAcceleratorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>>

---

##### `localSsdsInput`<sup>Optional</sup> <a name="localSsdsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsdsInput"></a>

```java
public java.lang.Object getLocalSsdsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>>

---

##### `locationHintInput`<sup>Optional</sup> <a name="locationHintInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHintInput"></a>

```java
public java.lang.String getLocationHintInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `maintenanceFreezeDurationHoursInput`<sup>Optional</sup> <a name="maintenanceFreezeDurationHoursInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHoursInput"></a>

```java
public java.lang.Number getMaintenanceFreezeDurationHoursInput();
```

- *Type:* java.lang.Number

---

##### `maintenanceIntervalInput`<sup>Optional</sup> <a name="maintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceIntervalInput"></a>

```java
public java.lang.String getMaintenanceIntervalInput();
```

- *Type:* java.lang.String

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `locationHint`<sup>Required</sup> <a name="locationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint"></a>

```java
public java.lang.String getLocationHint();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `maintenanceFreezeDurationHours`<sup>Required</sup> <a name="maintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours"></a>

```java
public java.lang.Number getMaintenanceFreezeDurationHours();
```

- *Type:* java.lang.Number

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference;

new GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties">putInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetInstanceProperties">resetInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetSourceInstanceTemplate">resetSourceInstanceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetTotalCount">resetTotalCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceProperties` <a name="putInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties"></a>

```java
public void putInstanceProperties(GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---

##### `resetInstanceProperties` <a name="resetInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetInstanceProperties"></a>

```java
public void resetInstanceProperties()
```

##### `resetSourceInstanceTemplate` <a name="resetSourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetSourceInstanceTemplate"></a>

```java
public void resetSourceInstanceTemplate()
```

##### `resetTotalCount` <a name="resetTotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetTotalCount"></a>

```java
public void resetTotalCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instanceProperties">instanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instancePropertiesInput">instancePropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateInput">sourceInstanceTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCountInput">totalCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate">sourceInstanceTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCount">totalCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceProperties`<sup>Required</sup> <a name="instanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instanceProperties"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference getInstanceProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference</a>

---

##### `instancePropertiesInput`<sup>Optional</sup> <a name="instancePropertiesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instancePropertiesInput"></a>

```java
public GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties getInstancePropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---

##### `sourceInstanceTemplateInput`<sup>Optional</sup> <a name="sourceInstanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateInput"></a>

```java
public java.lang.String getSourceInstanceTemplateInput();
```

- *Type:* java.lang.String

---

##### `totalCountInput`<sup>Optional</sup> <a name="totalCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCountInput"></a>

```java
public java.lang.String getTotalCountInput();
```

- *Type:* java.lang.String

---

##### `sourceInstanceTemplate`<sup>Required</sup> <a name="sourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate"></a>

```java
public java.lang.String getSourceInstanceTemplate();
```

- *Type:* java.lang.String

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCount"></a>

```java
public java.lang.String getTotalCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationSpecificSkuProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.count">count</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.timeStamp">timeStamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.count"></a>

```java
public java.lang.String getCount();
```

- *Type:* java.lang.String

---

##### `timeStamp`<sup>Required</sup> <a name="timeStamp" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.timeStamp"></a>

```java
public java.lang.String getTimeStamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shareSettings`<sup>Required</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.shareSettings"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList getShareSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList</a>

---

##### `specificSkuProperties`<sup>Required</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.specificSkuProperties"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList getSpecificSkuProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.timeWindow"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList getTimeWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projectMap">projectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.shareType">shareType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectMap`<sup>Required</sup> <a name="projectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projectMap"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList getProjectMap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList</a>

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators">guestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds">localSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint">locationHint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours">maintenanceFreezeDurationHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guestAccelerators`<sup>Required</sup> <a name="guestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList getGuestAccelerators();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a>

---

##### `localSsds`<sup>Required</sup> <a name="localSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList getLocalSsds();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a>

---

##### `locationHint`<sup>Required</sup> <a name="locationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint"></a>

```java
public java.lang.String getLocationHint();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `maintenanceFreezeDurationHours`<sup>Required</sup> <a name="maintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours"></a>

```java
public java.lang.Number getMaintenanceFreezeDurationHours();
```

- *Type:* java.lang.Number

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.instanceProperties">instanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate">sourceInstanceTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.totalCount">totalCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceProperties`<sup>Required</sup> <a name="instanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.instanceProperties"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList getInstanceProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList</a>

---

##### `sourceInstanceTemplate`<sup>Required</sup> <a name="sourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate"></a>

```java
public java.lang.String getSourceInstanceTemplate();
```

- *Type:* java.lang.String

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.totalCount"></a>

```java
public java.lang.String getTotalCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.duration"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList getDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList;

new GoogleComputeFutureReservationStatusLastKnownGoodStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference;

new GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.existingMatchingUsageInfo">existingMatchingUsageInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.futureReservationSpecs">futureReservationSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.lockTime">lockTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.procurementStatus">procurementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState">GoogleComputeFutureReservationStatusLastKnownGoodState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `existingMatchingUsageInfo`<sup>Required</sup> <a name="existingMatchingUsageInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.existingMatchingUsageInfo"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList getExistingMatchingUsageInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList</a>

---

##### `futureReservationSpecs`<sup>Required</sup> <a name="futureReservationSpecs" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.futureReservationSpecs"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList getFutureReservationSpecs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList</a>

---

##### `lockTime`<sup>Required</sup> <a name="lockTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.lockTime"></a>

```java
public java.lang.String getLockTime();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `procurementStatus`<sup>Required</sup> <a name="procurementStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.procurementStatus"></a>

```java
public java.lang.String getProcurementStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState">GoogleComputeFutureReservationStatusLastKnownGoodState</a>

---


### GoogleComputeFutureReservationStatusList <a name="GoogleComputeFutureReservationStatusList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusList;

new GoogleComputeFutureReservationStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get"></a>

```java
public GoogleComputeFutureReservationStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusOutputReference <a name="GoogleComputeFutureReservationStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusOutputReference;

new GoogleComputeFutureReservationStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.amendmentStatus">amendmentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.autoCreatedReservations">autoCreatedReservations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fulfilledCount">fulfilledCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lastKnownGoodState">lastKnownGoodState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList">GoogleComputeFutureReservationStatusLastKnownGoodStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lockTime">lockTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.procurementStatus">procurementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusSpecificSkuPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus">GoogleComputeFutureReservationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amendmentStatus`<sup>Required</sup> <a name="amendmentStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.amendmentStatus"></a>

```java
public java.lang.String getAmendmentStatus();
```

- *Type:* java.lang.String

---

##### `autoCreatedReservations`<sup>Required</sup> <a name="autoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.autoCreatedReservations"></a>

```java
public java.util.List<java.lang.String> getAutoCreatedReservations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fulfilledCount`<sup>Required</sup> <a name="fulfilledCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fulfilledCount"></a>

```java
public java.lang.String getFulfilledCount();
```

- *Type:* java.lang.String

---

##### `lastKnownGoodState`<sup>Required</sup> <a name="lastKnownGoodState" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lastKnownGoodState"></a>

```java
public GoogleComputeFutureReservationStatusLastKnownGoodStateList getLastKnownGoodState();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList">GoogleComputeFutureReservationStatusLastKnownGoodStateList</a>

---

##### `lockTime`<sup>Required</sup> <a name="lockTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lockTime"></a>

```java
public java.lang.String getLockTime();
```

- *Type:* java.lang.String

---

##### `procurementStatus`<sup>Required</sup> <a name="procurementStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.procurementStatus"></a>

```java
public java.lang.String getProcurementStatus();
```

- *Type:* java.lang.String

---

##### `specificSkuProperties`<sup>Required</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.specificSkuProperties"></a>

```java
public GoogleComputeFutureReservationStatusSpecificSkuPropertiesList getSpecificSkuProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusSpecificSkuPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus">GoogleComputeFutureReservationStatus</a>

---


### GoogleComputeFutureReservationStatusSpecificSkuPropertiesList <a name="GoogleComputeFutureReservationStatusSpecificSkuPropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList;

new GoogleComputeFutureReservationStatusSpecificSkuPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get"></a>

```java
public GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference;

new GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateId">sourceInstanceTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties">GoogleComputeFutureReservationStatusSpecificSkuProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInstanceTemplateId`<sup>Required</sup> <a name="sourceInstanceTemplateId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateId"></a>

```java
public java.lang.String getSourceInstanceTemplateId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationStatusSpecificSkuProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties">GoogleComputeFutureReservationStatusSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationTimeoutsOutputReference <a name="GoogleComputeFutureReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationTimeoutsOutputReference;

new GoogleComputeFutureReservationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

---


### GoogleComputeFutureReservationTimeWindowDurationOutputReference <a name="GoogleComputeFutureReservationTimeWindowDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference;

new GoogleComputeFutureReservationTimeWindowDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.secondsInput"></a>

```java
public java.lang.String getSecondsInput();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationTimeWindowDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---


### GoogleComputeFutureReservationTimeWindowOutputReference <a name="GoogleComputeFutureReservationTimeWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_future_reservation.GoogleComputeFutureReservationTimeWindowOutputReference;

new GoogleComputeFutureReservationTimeWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration"></a>

```java
public void putDuration(GoogleComputeFutureReservationTimeWindowDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference">GoogleComputeFutureReservationTimeWindowDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.duration"></a>

```java
public GoogleComputeFutureReservationTimeWindowDurationOutputReference getDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference">GoogleComputeFutureReservationTimeWindowDurationOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.durationInput"></a>

```java
public GoogleComputeFutureReservationTimeWindowDuration getDurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.internalValue"></a>

```java
public GoogleComputeFutureReservationTimeWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---



