# `googleLoggingOrganizationSink` Submodule <a name="`googleLoggingOrganizationSink` Submodule" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingOrganizationSink <a name="GoogleLoggingOrganizationSink" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink google_logging_organization_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  name: str,
  org_id: str,
  bigquery_options: GoogleLoggingOrganizationSinkBigqueryOptions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  exclusions: typing.Union[IResolvable, typing.List[GoogleLoggingOrganizationSinkExclusions]] = None,
  filter: str = None,
  id: str = None,
  include_children: typing.Union[bool, IResolvable] = None,
  intercept_children: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.destination">destination</a></code> | <code>str</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.exclusions">exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to include children organizations in the sink export. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.interceptChildren">intercept_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to intercept logs from child projects. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.destination"></a>

- *Type:* str

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#destination GoogleLoggingOrganizationSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.name"></a>

- *Type:* str

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#name GoogleLoggingOrganizationSink#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.orgId"></a>

- *Type:* str

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#org_id GoogleLoggingOrganizationSink#org_id}

---

##### `bigquery_options`<sup>Optional</sup> <a name="bigquery_options" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.bigqueryOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#bigquery_options GoogleLoggingOrganizationSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.description"></a>

- *Type:* str

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#description GoogleLoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#disabled GoogleLoggingOrganizationSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.exclusions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#exclusions GoogleLoggingOrganizationSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.filter"></a>

- *Type:* str

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#filter GoogleLoggingOrganizationSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_children`<sup>Optional</sup> <a name="include_children" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.includeChildren"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to include children organizations in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#include_children GoogleLoggingOrganizationSink#include_children}

---

##### `intercept_children`<sup>Optional</sup> <a name="intercept_children" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.interceptChildren"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#intercept_children GoogleLoggingOrganizationSink#intercept_children}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions">put_bigquery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions">put_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetBigqueryOptions">reset_bigquery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetIncludeChildren">reset_include_children</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetInterceptChildren">reset_intercept_children</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bigquery_options` <a name="put_bigquery_options" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions"></a>

```python
def put_bigquery_options(
  use_partitioned_tables: typing.Union[bool, IResolvable]
) -> None
```

###### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions.parameter.usePartitionedTables"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#use_partitioned_tables GoogleLoggingOrganizationSink#use_partitioned_tables}

---

##### `put_exclusions` <a name="put_exclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions"></a>

```python
def put_exclusions(
  value: typing.Union[IResolvable, typing.List[GoogleLoggingOrganizationSinkExclusions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]

---

##### `reset_bigquery_options` <a name="reset_bigquery_options" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetBigqueryOptions"></a>

```python
def reset_bigquery_options() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_children` <a name="reset_include_children" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetIncludeChildren"></a>

```python
def reset_include_children() -> None
```

##### `reset_intercept_children` <a name="reset_intercept_children" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetInterceptChildren"></a>

```python
def reset_intercept_children() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleLoggingOrganizationSink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleLoggingOrganizationSink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleLoggingOrganizationSink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleLoggingOrganizationSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingOrganizationSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference">GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList">GoogleLoggingOrganizationSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.writerIdentity">writer_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptionsInput">bigquery_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusionsInput">exclusions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildrenInput">include_children_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildrenInput">intercept_children_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildren">intercept_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_options`<sup>Required</sup> <a name="bigquery_options" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptions"></a>

```python
bigquery_options: GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference">GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusions"></a>

```python
exclusions: GoogleLoggingOrganizationSinkExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList">GoogleLoggingOrganizationSinkExclusionsList</a>

---

##### `writer_identity`<sup>Required</sup> <a name="writer_identity" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.writerIdentity"></a>

```python
writer_identity: str
```

- *Type:* str

---

##### `bigquery_options_input`<sup>Optional</sup> <a name="bigquery_options_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptionsInput"></a>

```python
bigquery_options_input: GoogleLoggingOrganizationSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusionsInput"></a>

```python
exclusions_input: typing.Union[IResolvable, typing.List[GoogleLoggingOrganizationSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_children_input`<sup>Optional</sup> <a name="include_children_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildrenInput"></a>

```python
include_children_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `intercept_children_input`<sup>Optional</sup> <a name="intercept_children_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildrenInput"></a>

```python
intercept_children_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_children`<sup>Required</sup> <a name="include_children" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildren"></a>

```python
include_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `intercept_children`<sup>Required</sup> <a name="intercept_children" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildren"></a>

```python
intercept_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingOrganizationSinkBigqueryOptions <a name="GoogleLoggingOrganizationSinkBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions(
  use_partitioned_tables: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables">use_partitioned_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use BigQuery's partition tables. |

---

##### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables"></a>

```python
use_partitioned_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#use_partitioned_tables GoogleLoggingOrganizationSink#use_partitioned_tables}

---

### GoogleLoggingOrganizationSinkConfig <a name="GoogleLoggingOrganizationSinkConfig" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  name: str,
  org_id: str,
  bigquery_options: GoogleLoggingOrganizationSinkBigqueryOptions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  exclusions: typing.Union[IResolvable, typing.List[GoogleLoggingOrganizationSinkExclusions]] = None,
  filter: str = None,
  id: str = None,
  include_children: typing.Union[bool, IResolvable] = None,
  intercept_children: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.destination">destination</a></code> | <code>str</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.name">name</a></code> | <code>str</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.orgId">org_id</a></code> | <code>str</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.description">description</a></code> | <code>str</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.exclusions">exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.filter">filter</a></code> | <code>str</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to include children organizations in the sink export. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.interceptChildren">intercept_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to intercept logs from child projects. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#destination GoogleLoggingOrganizationSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#name GoogleLoggingOrganizationSink#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#org_id GoogleLoggingOrganizationSink#org_id}

---

##### `bigquery_options`<sup>Optional</sup> <a name="bigquery_options" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.bigqueryOptions"></a>

```python
bigquery_options: GoogleLoggingOrganizationSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#bigquery_options GoogleLoggingOrganizationSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#description GoogleLoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#disabled GoogleLoggingOrganizationSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.exclusions"></a>

```python
exclusions: typing.Union[IResolvable, typing.List[GoogleLoggingOrganizationSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#exclusions GoogleLoggingOrganizationSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#filter GoogleLoggingOrganizationSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_children`<sup>Optional</sup> <a name="include_children" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.includeChildren"></a>

```python
include_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to include children organizations in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#include_children GoogleLoggingOrganizationSink#include_children}

---

##### `intercept_children`<sup>Optional</sup> <a name="intercept_children" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.interceptChildren"></a>

```python
intercept_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#intercept_children GoogleLoggingOrganizationSink#intercept_children}

---

### GoogleLoggingOrganizationSinkExclusions <a name="GoogleLoggingOrganizationSinkExclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions(
  filter: str,
  name: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.filter">filter</a></code> | <code>str</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.name">name</a></code> | <code>str</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.description">description</a></code> | <code>str</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.filter"></a>

```python
filter: str
```

- *Type:* str

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#filter GoogleLoggingOrganizationSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.name"></a>

```python
name: str
```

- *Type:* str

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#name GoogleLoggingOrganizationSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#description GoogleLoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_logging_organization_sink#disabled GoogleLoggingOrganizationSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference <a name="GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">use_partitioned_tables_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables">use_partitioned_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_partitioned_tables_input`<sup>Optional</sup> <a name="use_partitioned_tables_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```python
use_partitioned_tables_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```python
use_partitioned_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLoggingOrganizationSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

---


### GoogleLoggingOrganizationSinkExclusionsList <a name="GoogleLoggingOrganizationSinkExclusionsList" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleLoggingOrganizationSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleLoggingOrganizationSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]]

---


### GoogleLoggingOrganizationSinkExclusionsOutputReference <a name="GoogleLoggingOrganizationSinkExclusionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_organization_sink

googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleLoggingOrganizationSinkExclusions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>]

---



