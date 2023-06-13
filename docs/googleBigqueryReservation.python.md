# `google_bigquery_reservation`

Refer to the Terraform Registory for docs: [`google_bigquery_reservation`](https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation).

# `googleBigqueryReservation` Submodule <a name="`googleBigqueryReservation` Submodule" id="@cdktf/provider-google-beta.googleBigqueryReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryReservation <a name="GoogleBigqueryReservation" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation google_bigquery_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  slot_capacity: typing.Union[int, float],
  autoscale: GoogleBigqueryReservationAutoscale = None,
  concurrency: typing.Union[int, float] = None,
  edition: str = None,
  id: str = None,
  ignore_idle_slots: typing.Union[bool, IResolvable] = None,
  location: str = None,
  multi_region_auxiliary: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: GoogleBigqueryReservationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the reservation. This field must only contain alphanumeric characters or dash. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.slotCapacity">slot_capacity</a></code> | <code>typing.Union[int, float]</code> | Minimum slots available to this reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.concurrency">concurrency</a></code> | <code>typing.Union[int, float]</code> | Maximum number of queries that are allowed to run concurrently in this reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.edition">edition</a></code> | <code>str</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#id GoogleBigqueryReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.ignoreIdleSlots">ignore_idle_slots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If false, any query using this reservation will use idle slots from other reservations within the same admin project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.multiRegionAuxiliary">multi_region_auxiliary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#project GoogleBigqueryReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.name"></a>

- *Type:* str

The name of the reservation. This field must only contain alphanumeric characters or dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#name GoogleBigqueryReservation#name}

---

##### `slot_capacity`<sup>Required</sup> <a name="slot_capacity" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.slotCapacity"></a>

- *Type:* typing.Union[int, float]

Minimum slots available to this reservation.

A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#slot_capacity GoogleBigqueryReservation#slot_capacity}

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.autoscale"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#autoscale GoogleBigqueryReservation#autoscale}

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.concurrency"></a>

- *Type:* typing.Union[int, float]

Maximum number of queries that are allowed to run concurrently in this reservation.

This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#concurrency GoogleBigqueryReservation#concurrency}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.edition"></a>

- *Type:* str

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#edition GoogleBigqueryReservation#edition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#id GoogleBigqueryReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_idle_slots`<sup>Optional</sup> <a name="ignore_idle_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.ignoreIdleSlots"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If false, any query using this reservation will use idle slots from other reservations within the same admin project.

If true, a query using this reservation will execute with the slot
capacity specified above at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#ignore_idle_slots GoogleBigqueryReservation#ignore_idle_slots}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#location GoogleBigqueryReservation#location}

---

##### `multi_region_auxiliary`<sup>Optional</sup> <a name="multi_region_auxiliary" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.multiRegionAuxiliary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).

If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#multi_region_auxiliary GoogleBigqueryReservation#multi_region_auxiliary}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#project GoogleBigqueryReservation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#timeouts GoogleBigqueryReservation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putAutoscale">put_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetAutoscale">reset_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetConcurrency">reset_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetIgnoreIdleSlots">reset_ignore_idle_slots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetMultiRegionAuxiliary">reset_multi_region_auxiliary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_autoscale` <a name="put_autoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putAutoscale"></a>

```python
def put_autoscale(
  max_slots: typing.Union[int, float] = None
) -> None
```

###### `max_slots`<sup>Optional</sup> <a name="max_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putAutoscale.parameter.maxSlots"></a>

- *Type:* typing.Union[int, float]

Number of slots to be scaled when needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#max_slots GoogleBigqueryReservation#max_slots}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#create GoogleBigqueryReservation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#delete GoogleBigqueryReservation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#update GoogleBigqueryReservation#update}.

---

##### `reset_autoscale` <a name="reset_autoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetAutoscale"></a>

```python
def reset_autoscale() -> None
```

##### `reset_concurrency` <a name="reset_concurrency" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetConcurrency"></a>

```python
def reset_concurrency() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_idle_slots` <a name="reset_ignore_idle_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetIgnoreIdleSlots"></a>

```python
def reset_ignore_idle_slots() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_multi_region_auxiliary` <a name="reset_multi_region_auxiliary" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetMultiRegionAuxiliary"></a>

```python
def reset_multi_region_auxiliary() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservation.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference">GoogleBigqueryReservationAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference">GoogleBigqueryReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.autoscaleInput">autoscale_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.concurrencyInput">concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.ignoreIdleSlotsInput">ignore_idle_slots_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.multiRegionAuxiliaryInput">multi_region_auxiliary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.slotCapacityInput">slot_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.concurrency">concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.ignoreIdleSlots">ignore_idle_slots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.multiRegionAuxiliary">multi_region_auxiliary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.slotCapacity">slot_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.autoscale"></a>

```python
autoscale: GoogleBigqueryReservationAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference">GoogleBigqueryReservationAutoscaleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.timeouts"></a>

```python
timeouts: GoogleBigqueryReservationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference">GoogleBigqueryReservationTimeoutsOutputReference</a>

---

##### `autoscale_input`<sup>Optional</sup> <a name="autoscale_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.autoscaleInput"></a>

```python
autoscale_input: GoogleBigqueryReservationAutoscale
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a>

---

##### `concurrency_input`<sup>Optional</sup> <a name="concurrency_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.concurrencyInput"></a>

```python
concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_idle_slots_input`<sup>Optional</sup> <a name="ignore_idle_slots_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.ignoreIdleSlotsInput"></a>

```python
ignore_idle_slots_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multi_region_auxiliary_input`<sup>Optional</sup> <a name="multi_region_auxiliary_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.multiRegionAuxiliaryInput"></a>

```python
multi_region_auxiliary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `slot_capacity_input`<sup>Optional</sup> <a name="slot_capacity_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.slotCapacityInput"></a>

```python
slot_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleBigqueryReservationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>, cdktf.IResolvable]

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.concurrency"></a>

```python
concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_idle_slots`<sup>Required</sup> <a name="ignore_idle_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.ignoreIdleSlots"></a>

```python
ignore_idle_slots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multi_region_auxiliary`<sup>Required</sup> <a name="multi_region_auxiliary" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.multiRegionAuxiliary"></a>

```python
multi_region_auxiliary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `slot_capacity`<sup>Required</sup> <a name="slot_capacity" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.slotCapacity"></a>

```python
slot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryReservationAutoscale <a name="GoogleBigqueryReservationAutoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservationAutoscale(
  max_slots: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale.property.maxSlots">max_slots</a></code> | <code>typing.Union[int, float]</code> | Number of slots to be scaled when needed. |

---

##### `max_slots`<sup>Optional</sup> <a name="max_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale.property.maxSlots"></a>

```python
max_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of slots to be scaled when needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#max_slots GoogleBigqueryReservation#max_slots}

---

### GoogleBigqueryReservationConfig <a name="GoogleBigqueryReservationConfig" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  slot_capacity: typing.Union[int, float],
  autoscale: GoogleBigqueryReservationAutoscale = None,
  concurrency: typing.Union[int, float] = None,
  edition: str = None,
  id: str = None,
  ignore_idle_slots: typing.Union[bool, IResolvable] = None,
  location: str = None,
  multi_region_auxiliary: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: GoogleBigqueryReservationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.name">name</a></code> | <code>str</code> | The name of the reservation. This field must only contain alphanumeric characters or dash. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.slotCapacity">slot_capacity</a></code> | <code>typing.Union[int, float]</code> | Minimum slots available to this reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.concurrency">concurrency</a></code> | <code>typing.Union[int, float]</code> | Maximum number of queries that are allowed to run concurrently in this reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.edition">edition</a></code> | <code>str</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#id GoogleBigqueryReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.ignoreIdleSlots">ignore_idle_slots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If false, any query using this reservation will use idle slots from other reservations within the same admin project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.multiRegionAuxiliary">multi_region_auxiliary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#project GoogleBigqueryReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the reservation. This field must only contain alphanumeric characters or dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#name GoogleBigqueryReservation#name}

---

##### `slot_capacity`<sup>Required</sup> <a name="slot_capacity" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.slotCapacity"></a>

```python
slot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum slots available to this reservation.

A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#slot_capacity GoogleBigqueryReservation#slot_capacity}

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.autoscale"></a>

```python
autoscale: GoogleBigqueryReservationAutoscale
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#autoscale GoogleBigqueryReservation#autoscale}

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.concurrency"></a>

```python
concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of queries that are allowed to run concurrently in this reservation.

This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#concurrency GoogleBigqueryReservation#concurrency}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#edition GoogleBigqueryReservation#edition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#id GoogleBigqueryReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_idle_slots`<sup>Optional</sup> <a name="ignore_idle_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.ignoreIdleSlots"></a>

```python
ignore_idle_slots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If false, any query using this reservation will use idle slots from other reservations within the same admin project.

If true, a query using this reservation will execute with the slot
capacity specified above at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#ignore_idle_slots GoogleBigqueryReservation#ignore_idle_slots}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#location GoogleBigqueryReservation#location}

---

##### `multi_region_auxiliary`<sup>Optional</sup> <a name="multi_region_auxiliary" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.multiRegionAuxiliary"></a>

```python
multi_region_auxiliary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).

If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#multi_region_auxiliary GoogleBigqueryReservation#multi_region_auxiliary}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#project GoogleBigqueryReservation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryReservationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#timeouts GoogleBigqueryReservation#timeouts}

---

### GoogleBigqueryReservationTimeouts <a name="GoogleBigqueryReservationTimeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#create GoogleBigqueryReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#delete GoogleBigqueryReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#update GoogleBigqueryReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#create GoogleBigqueryReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#delete GoogleBigqueryReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_bigquery_reservation#update GoogleBigqueryReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryReservationAutoscaleOutputReference <a name="GoogleBigqueryReservationAutoscaleOutputReference" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resetMaxSlots">reset_max_slots</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_slots` <a name="reset_max_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resetMaxSlots"></a>

```python
def reset_max_slots() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.currentSlots">current_slots</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.maxSlotsInput">max_slots_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.maxSlots">max_slots</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_slots`<sup>Required</sup> <a name="current_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.currentSlots"></a>

```python
current_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_slots_input`<sup>Optional</sup> <a name="max_slots_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.maxSlotsInput"></a>

```python
max_slots_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_slots`<sup>Required</sup> <a name="max_slots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.maxSlots"></a>

```python
max_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryReservationAutoscale
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a>

---


### GoogleBigqueryReservationTimeoutsOutputReference <a name="GoogleBigqueryReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_reservation

googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleBigqueryReservationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>, cdktf.IResolvable]

---



