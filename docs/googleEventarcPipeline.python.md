# `googleEventarcPipeline` Submodule <a name="`googleEventarcPipeline` Submodule" id="@cdktf/provider-google-beta.googleEventarcPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcPipeline <a name="GoogleEventarcPipeline" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline google_eventarc_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destinations: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineDestinations]],
  location: str,
  pipeline_id: str,
  annotations: typing.Mapping[str] = None,
  crypto_key_name: str = None,
  display_name: str = None,
  id: str = None,
  input_payload_format: GoogleEventarcPipelineInputPayloadFormat = None,
  labels: typing.Mapping[str] = None,
  logging_config: GoogleEventarcPipelineLoggingConfig = None,
  mediations: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineMediations]] = None,
  project: str = None,
  retry_policy: GoogleEventarcPipelineRetryPolicy = None,
  timeouts: GoogleEventarcPipelineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.pipelineId">pipeline_id</a></code> | <code>str</code> | The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User-defined annotations. See https://google.aip.dev/128#annotations. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#id GoogleEventarcPipeline#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.inputPayloadFormat">input_payload_format</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a></code> | input_payload_format block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User labels attached to the Pipeline that can be used to group resources. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.mediations">mediations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]</code> | mediations block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#project GoogleEventarcPipeline#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.destinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#destinations GoogleEventarcPipeline#destinations}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#location GoogleEventarcPipeline#location}

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.pipelineId"></a>

- *Type:* str

The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#pipeline_id GoogleEventarcPipeline#pipeline_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User-defined annotations. See https://google.aip.dev/128#annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#annotations GoogleEventarcPipeline#annotations}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.cryptoKeyName"></a>

- *Type:* str

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data.

If not set, an internal Google-owned key
will be used to encrypt messages. It must match the pattern
"projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#crypto_key_name GoogleEventarcPipeline#crypto_key_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#display_name GoogleEventarcPipeline#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#id GoogleEventarcPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_payload_format`<sup>Optional</sup> <a name="input_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.inputPayloadFormat"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a>

input_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#input_payload_format GoogleEventarcPipeline#input_payload_format}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User labels attached to the Pipeline that can be used to group resources.

An object containing a list of "key": value pairs. Example: {
"name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#labels GoogleEventarcPipeline#labels}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#logging_config GoogleEventarcPipeline#logging_config}

---

##### `mediations`<sup>Optional</sup> <a name="mediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.mediations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]

mediations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#mediations GoogleEventarcPipeline#mediations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#project GoogleEventarcPipeline#project}.

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#retry_policy GoogleEventarcPipeline#retry_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#timeouts GoogleEventarcPipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putInputPayloadFormat">put_input_payload_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putMediations">put_mediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetCryptoKeyName">reset_crypto_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetInputPayloadFormat">reset_input_payload_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetMediations">reset_mediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]

---

##### `put_input_payload_format` <a name="put_input_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putInputPayloadFormat"></a>

```python
def put_input_payload_format(
  avro: GoogleEventarcPipelineInputPayloadFormatAvro = None,
  json: GoogleEventarcPipelineInputPayloadFormatJson = None,
  protobuf: GoogleEventarcPipelineInputPayloadFormatProtobuf = None
) -> None
```

###### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putInputPayloadFormat.parameter.avro"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#avro GoogleEventarcPipeline#avro}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putInputPayloadFormat.parameter.json"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#json GoogleEventarcPipeline#json}

---

###### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putInputPayloadFormat.parameter.protobuf"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#protobuf GoogleEventarcPipeline#protobuf}

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putLoggingConfig"></a>

```python
def put_logging_config(
  log_severity: str = None
) -> None
```

###### `log_severity`<sup>Optional</sup> <a name="log_severity" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putLoggingConfig.parameter.logSeverity"></a>

- *Type:* str

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#log_severity GoogleEventarcPipeline#log_severity}

---

##### `put_mediations` <a name="put_mediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putMediations"></a>

```python
def put_mediations(
  value: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineMediations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putMediations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putRetryPolicy"></a>

```python
def put_retry_policy(
  max_attempts: typing.Union[int, float] = None,
  max_retry_delay: str = None,
  min_retry_delay: str = None
) -> None
```

###### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putRetryPolicy.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of delivery attempts for any message.

The value must
be between 1 and 100.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#max_attempts GoogleEventarcPipeline#max_attempts}

---

###### `max_retry_delay`<sup>Optional</sup> <a name="max_retry_delay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putRetryPolicy.parameter.maxRetryDelay"></a>

- *Type:* str

The maximum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#max_retry_delay GoogleEventarcPipeline#max_retry_delay}

---

###### `min_retry_delay`<sup>Optional</sup> <a name="min_retry_delay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putRetryPolicy.parameter.minRetryDelay"></a>

- *Type:* str

The minimum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#min_retry_delay GoogleEventarcPipeline#min_retry_delay}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#create GoogleEventarcPipeline#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#delete GoogleEventarcPipeline#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#update GoogleEventarcPipeline#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_crypto_key_name` <a name="reset_crypto_key_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetCryptoKeyName"></a>

```python
def reset_crypto_key_name() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_payload_format` <a name="reset_input_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetInputPayloadFormat"></a>

```python
def reset_input_payload_format() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_mediations` <a name="reset_mediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetMediations"></a>

```python
def reset_mediations() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleEventarcPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleEventarcPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleEventarcPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleEventarcPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList">GoogleEventarcPipelineDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.inputPayloadFormat">input_payload_format</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference">GoogleEventarcPipelineInputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference">GoogleEventarcPipelineLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.mediations">mediations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList">GoogleEventarcPipelineMediationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference">GoogleEventarcPipelineRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference">GoogleEventarcPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cryptoKeyNameInput">crypto_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.inputPayloadFormatInput">input_payload_format_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.mediationsInput">mediations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.destinations"></a>

```python
destinations: GoogleEventarcPipelineDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList">GoogleEventarcPipelineDestinationsList</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `input_payload_format`<sup>Required</sup> <a name="input_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.inputPayloadFormat"></a>

```python
input_payload_format: GoogleEventarcPipelineInputPayloadFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference">GoogleEventarcPipelineInputPayloadFormatOutputReference</a>

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.loggingConfig"></a>

```python
logging_config: GoogleEventarcPipelineLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference">GoogleEventarcPipelineLoggingConfigOutputReference</a>

---

##### `mediations`<sup>Required</sup> <a name="mediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.mediations"></a>

```python
mediations: GoogleEventarcPipelineMediationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList">GoogleEventarcPipelineMediationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.retryPolicy"></a>

```python
retry_policy: GoogleEventarcPipelineRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference">GoogleEventarcPipelineRetryPolicyOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.timeouts"></a>

```python
timeouts: GoogleEventarcPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference">GoogleEventarcPipelineTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_key_name_input`<sup>Optional</sup> <a name="crypto_key_name_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cryptoKeyNameInput"></a>

```python
crypto_key_name_input: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_payload_format_input`<sup>Optional</sup> <a name="input_payload_format_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.inputPayloadFormatInput"></a>

```python
input_payload_format_input: GoogleEventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleEventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a>

---

##### `mediations_input`<sup>Optional</sup> <a name="mediations_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.mediationsInput"></a>

```python
mediations_input: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineMediations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.retryPolicyInput"></a>

```python
retry_policy_input: GoogleEventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleEventarcPipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcPipelineConfig <a name="GoogleEventarcPipelineConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destinations: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineDestinations]],
  location: str,
  pipeline_id: str,
  annotations: typing.Mapping[str] = None,
  crypto_key_name: str = None,
  display_name: str = None,
  id: str = None,
  input_payload_format: GoogleEventarcPipelineInputPayloadFormat = None,
  labels: typing.Mapping[str] = None,
  logging_config: GoogleEventarcPipelineLoggingConfig = None,
  mediations: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineMediations]] = None,
  project: str = None,
  retry_policy: GoogleEventarcPipelineRetryPolicy = None,
  timeouts: GoogleEventarcPipelineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.pipelineId">pipeline_id</a></code> | <code>str</code> | The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User-defined annotations. See https://google.aip.dev/128#annotations. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#id GoogleEventarcPipeline#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.inputPayloadFormat">input_payload_format</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a></code> | input_payload_format block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User labels attached to the Pipeline that can be used to group resources. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.mediations">mediations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]</code> | mediations block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#project GoogleEventarcPipeline#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#destinations GoogleEventarcPipeline#destinations}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#location GoogleEventarcPipeline#location}

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#pipeline_id GoogleEventarcPipeline#pipeline_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined annotations. See https://google.aip.dev/128#annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#annotations GoogleEventarcPipeline#annotations}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data.

If not set, an internal Google-owned key
will be used to encrypt messages. It must match the pattern
"projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#crypto_key_name GoogleEventarcPipeline#crypto_key_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#display_name GoogleEventarcPipeline#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#id GoogleEventarcPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_payload_format`<sup>Optional</sup> <a name="input_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.inputPayloadFormat"></a>

```python
input_payload_format: GoogleEventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a>

input_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#input_payload_format GoogleEventarcPipeline#input_payload_format}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User labels attached to the Pipeline that can be used to group resources.

An object containing a list of "key": value pairs. Example: {
"name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#labels GoogleEventarcPipeline#labels}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.loggingConfig"></a>

```python
logging_config: GoogleEventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#logging_config GoogleEventarcPipeline#logging_config}

---

##### `mediations`<sup>Optional</sup> <a name="mediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.mediations"></a>

```python
mediations: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineMediations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]

mediations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#mediations GoogleEventarcPipeline#mediations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#project GoogleEventarcPipeline#project}.

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.retryPolicy"></a>

```python
retry_policy: GoogleEventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#retry_policy GoogleEventarcPipeline#retry_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.timeouts"></a>

```python
timeouts: GoogleEventarcPipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#timeouts GoogleEventarcPipeline#timeouts}

---

### GoogleEventarcPipelineDestinations <a name="GoogleEventarcPipelineDestinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinations(
  authentication_config: GoogleEventarcPipelineDestinationsAuthenticationConfig = None,
  http_endpoint: GoogleEventarcPipelineDestinationsHttpEndpoint = None,
  message_bus: str = None,
  network_config: GoogleEventarcPipelineDestinationsNetworkConfig = None,
  output_payload_format: GoogleEventarcPipelineDestinationsOutputPayloadFormat = None,
  topic: str = None,
  workflow: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.httpEndpoint">http_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.messageBus">message_bus</a></code> | <code>str</code> | The resource name of the Message Bus to which events should be published. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.outputPayloadFormat">output_payload_format</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a></code> | output_payload_format block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.topic">topic</a></code> | <code>str</code> | The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.workflow">workflow</a></code> | <code>str</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `authentication_config`<sup>Optional</sup> <a name="authentication_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.authenticationConfig"></a>

```python
authentication_config: GoogleEventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#authentication_config GoogleEventarcPipeline#authentication_config}

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.httpEndpoint"></a>

```python
http_endpoint: GoogleEventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#http_endpoint GoogleEventarcPipeline#http_endpoint}

---

##### `message_bus`<sup>Optional</sup> <a name="message_bus" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.messageBus"></a>

```python
message_bus: str
```

- *Type:* str

The resource name of the Message Bus to which events should be published.

The Message Bus resource should exist in the same project as
the Pipeline. Format:
'projects/{project}/locations/{location}/messageBuses/{message_bus}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#message_bus GoogleEventarcPipeline#message_bus}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.networkConfig"></a>

```python
network_config: GoogleEventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#network_config GoogleEventarcPipeline#network_config}

---

##### `output_payload_format`<sup>Optional</sup> <a name="output_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.outputPayloadFormat"></a>

```python
output_payload_format: GoogleEventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a>

output_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#output_payload_format GoogleEventarcPipeline#output_payload_format}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.topic"></a>

```python
topic: str
```

- *Type:* str

The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#topic GoogleEventarcPipeline#topic}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same
project as the Pipeline. Format:
'projects/{project}/locations/{location}/workflows/{workflow}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#workflow GoogleEventarcPipeline#workflow}

---

### GoogleEventarcPipelineDestinationsAuthenticationConfig <a name="GoogleEventarcPipelineDestinationsAuthenticationConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig(
  google_oidc: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc = None,
  oauth_token: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.property.googleOidc">google_oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | google_oidc block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.property.oauthToken">oauth_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | oauth_token block. |

---

##### `google_oidc`<sup>Optional</sup> <a name="google_oidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.property.googleOidc"></a>

```python
google_oidc: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

google_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#google_oidc GoogleEventarcPipeline#google_oidc}

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.property.oauthToken"></a>

```python
oauth_token: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#oauth_token GoogleEventarcPipeline#oauth_token}

---

### GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc(
  service_account: str,
  audience: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account email used to generate the OIDC Token. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience">audience</a></code> | <code>str</code> | Audience to be used to generate the OIDC Token. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account email used to generate the OIDC Token.

The principal who calls this API must have
iam.serviceAccounts.actAs permission in the service account. See
https://cloud.google.com/iam/docs/understanding-service-accounts
for more information. Eventarc service agents must have
roles/roles/iam.serviceAccountTokenCreator role to allow the
Pipeline to create OpenID tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#service_account GoogleEventarcPipeline#service_account}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience to be used to generate the OIDC Token.

The audience claim
identifies the recipient that the JWT is intended for. If
unspecified, the destination URI will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#audience GoogleEventarcPipeline#audience}

---

### GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken(
  service_account: str,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope">scope</a></code> | <code>str</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#service_account GoogleEventarcPipeline#service_account}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope"></a>

```python
scope: str
```

- *Type:* str

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#scope GoogleEventarcPipeline#scope}

---

### GoogleEventarcPipelineDestinationsHttpEndpoint <a name="GoogleEventarcPipelineDestinationsHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint(
  uri: str,
  message_binding_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.property.uri">uri</a></code> | <code>str</code> | The URI of the HTTP enpdoint. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate">message_binding_template</a></code> | <code>str</code> | The CEL expression used to modify how the destination-bound HTTP request is constructed. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the HTTP enpdoint.

The value must be a RFC2396 URI string.
Examples: 'https://svc.us-central1.p.local:8080/route'.
Only the HTTPS protocol is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#uri GoogleEventarcPipeline#uri}

---

##### `message_binding_template`<sup>Optional</sup> <a name="message_binding_template" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate"></a>

```python
message_binding_template: str
```

- *Type:* str

The CEL expression used to modify how the destination-bound HTTP request is constructed.

If a binding expression is not specified here, the message
is treated as a CloudEvent and is mapped to the HTTP request according
to the CloudEvent HTTP Protocol Binding Binary Content Mode
(https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
In this representation, all fields except the 'data' and
'datacontenttype' field on the message are mapped to HTTP request
headers with a prefix of 'ce-'.

To construct the HTTP request payload and the value of the content-type
HTTP header, the payload format is defined as follows:

1) Use the output_payload_format_type on the Pipeline.Destination if it
   is set, else:
2) Use the input_payload_format_type on the Pipeline if it is set,
   else:
3) Treat the payload as opaque binary data.

The 'data' field of the message is converted to the payload format or
left as-is for case 3) and then attached as the payload of the HTTP
request. The 'content-type' header on the HTTP request is set to the
payload format type or left empty for case 3). However, if a mediation
has updated the 'datacontenttype' field on the message so that it is
not the same as the payload format type but it is still a prefix of the
payload format type, then the 'content-type' header on the HTTP request
is set to this 'datacontenttype' value. For example, if the
'datacontenttype' is "application/json" and the payload format type is
"application/json; charset=utf-8", then the 'content-type' header on
the HTTP request is set to "application/json; charset=utf-8".

If a non-empty binding expression is specified then this expression is
used to modify the default CloudEvent HTTP Protocol Binding Binary
Content representation.
The result of the CEL expression must be a map of key/value pairs
which is used as follows:

* If a map named 'headers' exists on the result of the expression,
  then its key/value pairs are directly mapped to the HTTP request
  headers. The headers values are constructed from the corresponding
  value type's canonical representation. If the 'headers' field doesn't
  exist then the resulting HTTP request will be the headers of the
  CloudEvent HTTP Binding Binary Content Mode representation of the final
  message. Note: If the specified binding expression, has updated the
  'datacontenttype' field on the message so that it is not the same as
  the payload format type but it is still a prefix of the payload format
  type, then the 'content-type' header in the 'headers' map is set to
  this 'datacontenttype' value.
* If a field named 'body' exists on the result of the expression then
  its value is directly mapped to the body of the request. If the value
  of the 'body' field is of type bytes or string then it is used for
  the HTTP request body as-is, with no conversion. If the body field is
  of any other type then it is converted to a JSON string. If the body
  field does not exist then the resulting payload of the HTTP request
  will be data value of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message as described earlier.
* Any other fields in the resulting expression will be ignored.

The CEL expression may access the incoming CloudEvent message in its
definition, as follows:

* The 'data' field of the incoming CloudEvent message can be accessed
  using the 'message.data' value. Subfields of 'message.data' may also be
  accessed if an input_payload_format has been specified on the Pipeline.
* Each attribute of the incoming CloudEvent message can be accessed
  using the 'message.' value, where  is replaced with the
  name of the attribute.
* Existing headers can be accessed in the CEL expression using the
  'headers' variable. The 'headers' variable defines a map of key/value
  pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
  Binary Content Mode representation of the final message as described
  earlier. For example, the following CEL expression can be used to
  construct an HTTP request by adding an additional header to the HTTP
  headers of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message and by overwriting the body of the
  request:

```
{
"headers": headers.merge({"new-header-key": "new-header-value"}),
"body": "new-body"
}
```

* The default binding for the message payload can be accessed using the
  'body' variable. It conatins a string representation of the message
  payload in the format specified by the 'output_payload_format' field.
  If the 'input_payload_format' field is not set, the 'body'
  variable contains the same message payload bytes that were published.

Additionally, the following CEL extension functions are provided for
use in this CEL expression:

* toBase64Url:
  map.toBase64Url() -> string
* Converts a CelValue to a base64url encoded string
* toJsonString: map.toJsonString() -> string
* Converts a CelValue to a JSON string
* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents.
* It converts 'data' to destination payload format
  specified in 'output_payload_format'. If 'output_payload_format' is
  not set, the data will remain unchanged.
* It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  'output_payload_format'. If no
  'output_payload_format' is set it will use the value of the
  "datacontenttype" attribute on the CloudEvent if present, else
  remove "datacontenttype" attribute.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

The Pipeline expects that the message it receives adheres to the
standard CloudEvent format. If it doesn't then the outgoing message
request may fail with a persistent error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#message_binding_template GoogleEventarcPipeline#message_binding_template}

---

### GoogleEventarcPipelineDestinationsNetworkConfig <a name="GoogleEventarcPipelineDestinationsNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig(
  network_attachment: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'. |

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#network_attachment GoogleEventarcPipeline#network_attachment}

---

### GoogleEventarcPipelineDestinationsOutputPayloadFormat <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat(
  avro: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro = None,
  json: GoogleEventarcPipelineDestinationsOutputPayloadFormatJson = None,
  protobuf: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.json">json</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.avro"></a>

```python
avro: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#avro GoogleEventarcPipeline#avro}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.json"></a>

```python
json: GoogleEventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#json GoogleEventarcPipeline#json}

---

##### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.protobuf"></a>

```python
protobuf: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#protobuf GoogleEventarcPipeline#protobuf}

---

### GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro(
  schema_definition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | The entire schema definition is stored in this field. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

### GoogleEventarcPipelineDestinationsOutputPayloadFormatJson <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatJson" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson()
```


### GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf(
  schema_definition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | The entire schema definition is stored in this field. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

### GoogleEventarcPipelineInputPayloadFormat <a name="GoogleEventarcPipelineInputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat(
  avro: GoogleEventarcPipelineInputPayloadFormatAvro = None,
  json: GoogleEventarcPipelineInputPayloadFormatJson = None,
  protobuf: GoogleEventarcPipelineInputPayloadFormatProtobuf = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.json">json</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.avro"></a>

```python
avro: GoogleEventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#avro GoogleEventarcPipeline#avro}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.json"></a>

```python
json: GoogleEventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#json GoogleEventarcPipeline#json}

---

##### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.protobuf"></a>

```python
protobuf: GoogleEventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#protobuf GoogleEventarcPipeline#protobuf}

---

### GoogleEventarcPipelineInputPayloadFormatAvro <a name="GoogleEventarcPipelineInputPayloadFormatAvro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro(
  schema_definition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | The entire schema definition is stored in this field. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

### GoogleEventarcPipelineInputPayloadFormatJson <a name="GoogleEventarcPipelineInputPayloadFormatJson" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson()
```


### GoogleEventarcPipelineInputPayloadFormatProtobuf <a name="GoogleEventarcPipelineInputPayloadFormatProtobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf(
  schema_definition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | The entire schema definition is stored in this field. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

### GoogleEventarcPipelineLoggingConfig <a name="GoogleEventarcPipelineLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig(
  log_severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig.property.logSeverity">log_severity</a></code> | <code>str</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `log_severity`<sup>Optional</sup> <a name="log_severity" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig.property.logSeverity"></a>

```python
log_severity: str
```

- *Type:* str

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#log_severity GoogleEventarcPipeline#log_severity}

---

### GoogleEventarcPipelineMediations <a name="GoogleEventarcPipelineMediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineMediations(
  transformation: GoogleEventarcPipelineMediationsTransformation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations.property.transformation">transformation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a></code> | transformation block. |

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations.property.transformation"></a>

```python
transformation: GoogleEventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#transformation GoogleEventarcPipeline#transformation}

---

### GoogleEventarcPipelineMediationsTransformation <a name="GoogleEventarcPipelineMediationsTransformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation(
  transformation_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation.property.transformationTemplate">transformation_template</a></code> | <code>str</code> | The CEL expression template to apply to transform messages. |

---

##### `transformation_template`<sup>Optional</sup> <a name="transformation_template" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation.property.transformationTemplate"></a>

```python
transformation_template: str
```

- *Type:* str

The CEL expression template to apply to transform messages.

The following CEL extension functions are provided for
use in this CEL expression:

* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toDestinationPayloadFormat():
  message.data.toDestinationPayloadFormat() -> string or bytes
* Converts the message data to the destination payload format
  specified in Pipeline.Destination.output_payload_format
* This function is meant to be applied to the message.data field.
* If the destination payload format is not set, the function will
  return the message data unchanged.
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents
* This function applies toDestinationPayloadFormat() to the
  message data. It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  Pipeline.Destination.output_payload_format. If no
  output_payload_format is set it will use the existing
  datacontenttype on the CloudEvent if present, else leave
  datacontenttype absent.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#transformation_template GoogleEventarcPipeline#transformation_template}

---

### GoogleEventarcPipelineRetryPolicy <a name="GoogleEventarcPipelineRetryPolicy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy(
  max_attempts: typing.Union[int, float] = None,
  max_retry_delay: str = None,
  min_retry_delay: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of delivery attempts for any message. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.maxRetryDelay">max_retry_delay</a></code> | <code>str</code> | The maximum amount of seconds to wait between retry attempts. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.minRetryDelay">min_retry_delay</a></code> | <code>str</code> | The minimum amount of seconds to wait between retry attempts. |

---

##### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of delivery attempts for any message.

The value must
be between 1 and 100.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#max_attempts GoogleEventarcPipeline#max_attempts}

---

##### `max_retry_delay`<sup>Optional</sup> <a name="max_retry_delay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.maxRetryDelay"></a>

```python
max_retry_delay: str
```

- *Type:* str

The maximum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#max_retry_delay GoogleEventarcPipeline#max_retry_delay}

---

##### `min_retry_delay`<sup>Optional</sup> <a name="min_retry_delay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.minRetryDelay"></a>

```python
min_retry_delay: str
```

- *Type:* str

The minimum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#min_retry_delay GoogleEventarcPipeline#min_retry_delay}

---

### GoogleEventarcPipelineTimeouts <a name="GoogleEventarcPipelineTimeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#create GoogleEventarcPipeline#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#delete GoogleEventarcPipeline#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#update GoogleEventarcPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#create GoogleEventarcPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#delete GoogleEventarcPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#update GoogleEventarcPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience">reset_audience</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---


### GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---


### GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc">put_google_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken">put_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc">reset_google_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken">reset_oauth_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_google_oidc` <a name="put_google_oidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc"></a>

```python
def put_google_oidc(
  service_account: str,
  audience: str = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc.parameter.serviceAccount"></a>

- *Type:* str

Service account email used to generate the OIDC Token.

The principal who calls this API must have
iam.serviceAccounts.actAs permission in the service account. See
https://cloud.google.com/iam/docs/understanding-service-accounts
for more information. Eventarc service agents must have
roles/roles/iam.serviceAccountTokenCreator role to allow the
Pipeline to create OpenID tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#service_account GoogleEventarcPipeline#service_account}

---

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc.parameter.audience"></a>

- *Type:* str

Audience to be used to generate the OIDC Token.

The audience claim
identifies the recipient that the JWT is intended for. If
unspecified, the destination URI will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#audience GoogleEventarcPipeline#audience}

---

##### `put_oauth_token` <a name="put_oauth_token" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken"></a>

```python
def put_oauth_token(
  service_account: str,
  scope: str = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken.parameter.serviceAccount"></a>

- *Type:* str

Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#service_account GoogleEventarcPipeline#service_account}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken.parameter.scope"></a>

- *Type:* str

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#scope GoogleEventarcPipeline#scope}

---

##### `reset_google_oidc` <a name="reset_google_oidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc"></a>

```python
def reset_google_oidc() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc">google_oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken">oauth_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput">google_oidc_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput">oauth_token_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_oidc`<sup>Required</sup> <a name="google_oidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc"></a>

```python
google_oidc: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a>

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken"></a>

```python
oauth_token: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a>

---

##### `google_oidc_input`<sup>Optional</sup> <a name="google_oidc_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput"></a>

```python
google_oidc_input: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput"></a>

```python
oauth_token_input: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a>

---


### GoogleEventarcPipelineDestinationsHttpEndpointOutputReference <a name="GoogleEventarcPipelineDestinationsHttpEndpointOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate">reset_message_binding_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_binding_template` <a name="reset_message_binding_template" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate"></a>

```python
def reset_message_binding_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput">message_binding_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate">message_binding_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_binding_template_input`<sup>Optional</sup> <a name="message_binding_template_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput"></a>

```python
message_binding_template_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `message_binding_template`<sup>Required</sup> <a name="message_binding_template" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate"></a>

```python
message_binding_template: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a>

---


### GoogleEventarcPipelineDestinationsList <a name="GoogleEventarcPipelineDestinationsList" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleEventarcPipelineDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]]

---


### GoogleEventarcPipelineDestinationsNetworkConfigOutputReference <a name="GoogleEventarcPipelineDestinationsNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a>

---


### GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---


### GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a>

---


### GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro">put_avro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf">put_protobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro">reset_avro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf">reset_protobuf</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro` <a name="put_avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro"></a>

```python
def put_avro(
  schema_definition: str = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro.parameter.schemaDefinition"></a>

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

##### `put_json` <a name="put_json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson"></a>

```python
def put_json() -> None
```

##### `put_protobuf` <a name="put_protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf"></a>

```python
def put_protobuf(
  schema_definition: str = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf.parameter.schemaDefinition"></a>

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

##### `reset_avro` <a name="reset_avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro"></a>

```python
def reset_avro() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_protobuf` <a name="reset_protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf"></a>

```python
def reset_protobuf() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput">avro_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput">protobuf_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro"></a>

```python
avro: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json"></a>

```python
json: GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a>

---

##### `protobuf`<sup>Required</sup> <a name="protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf"></a>

```python
protobuf: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a>

---

##### `avro_input`<sup>Optional</sup> <a name="avro_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput"></a>

```python
avro_input: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput"></a>

```python
json_input: GoogleEventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a>

---

##### `protobuf_input`<sup>Optional</sup> <a name="protobuf_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput"></a>

```python
protobuf_input: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a>

---


### GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---


### GoogleEventarcPipelineDestinationsOutputReference <a name="GoogleEventarcPipelineDestinationsOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putAuthenticationConfig">put_authentication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putHttpEndpoint">put_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putOutputPayloadFormat">put_output_payload_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetAuthenticationConfig">reset_authentication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetMessageBus">reset_message_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat">reset_output_payload_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetTopic">reset_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetWorkflow">reset_workflow</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication_config` <a name="put_authentication_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putAuthenticationConfig"></a>

```python
def put_authentication_config(
  google_oidc: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc = None,
  oauth_token: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken = None
) -> None
```

###### `google_oidc`<sup>Optional</sup> <a name="google_oidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putAuthenticationConfig.parameter.googleOidc"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

google_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#google_oidc GoogleEventarcPipeline#google_oidc}

---

###### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putAuthenticationConfig.parameter.oauthToken"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#oauth_token GoogleEventarcPipeline#oauth_token}

---

##### `put_http_endpoint` <a name="put_http_endpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putHttpEndpoint"></a>

```python
def put_http_endpoint(
  uri: str,
  message_binding_template: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putHttpEndpoint.parameter.uri"></a>

- *Type:* str

The URI of the HTTP enpdoint.

The value must be a RFC2396 URI string.
Examples: 'https://svc.us-central1.p.local:8080/route'.
Only the HTTPS protocol is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#uri GoogleEventarcPipeline#uri}

---

###### `message_binding_template`<sup>Optional</sup> <a name="message_binding_template" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putHttpEndpoint.parameter.messageBindingTemplate"></a>

- *Type:* str

The CEL expression used to modify how the destination-bound HTTP request is constructed.

If a binding expression is not specified here, the message
is treated as a CloudEvent and is mapped to the HTTP request according
to the CloudEvent HTTP Protocol Binding Binary Content Mode
(https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
In this representation, all fields except the 'data' and
'datacontenttype' field on the message are mapped to HTTP request
headers with a prefix of 'ce-'.

To construct the HTTP request payload and the value of the content-type
HTTP header, the payload format is defined as follows:

1) Use the output_payload_format_type on the Pipeline.Destination if it
   is set, else:
2) Use the input_payload_format_type on the Pipeline if it is set,
   else:
3) Treat the payload as opaque binary data.

The 'data' field of the message is converted to the payload format or
left as-is for case 3) and then attached as the payload of the HTTP
request. The 'content-type' header on the HTTP request is set to the
payload format type or left empty for case 3). However, if a mediation
has updated the 'datacontenttype' field on the message so that it is
not the same as the payload format type but it is still a prefix of the
payload format type, then the 'content-type' header on the HTTP request
is set to this 'datacontenttype' value. For example, if the
'datacontenttype' is "application/json" and the payload format type is
"application/json; charset=utf-8", then the 'content-type' header on
the HTTP request is set to "application/json; charset=utf-8".

If a non-empty binding expression is specified then this expression is
used to modify the default CloudEvent HTTP Protocol Binding Binary
Content representation.
The result of the CEL expression must be a map of key/value pairs
which is used as follows:

* If a map named 'headers' exists on the result of the expression,
  then its key/value pairs are directly mapped to the HTTP request
  headers. The headers values are constructed from the corresponding
  value type's canonical representation. If the 'headers' field doesn't
  exist then the resulting HTTP request will be the headers of the
  CloudEvent HTTP Binding Binary Content Mode representation of the final
  message. Note: If the specified binding expression, has updated the
  'datacontenttype' field on the message so that it is not the same as
  the payload format type but it is still a prefix of the payload format
  type, then the 'content-type' header in the 'headers' map is set to
  this 'datacontenttype' value.
* If a field named 'body' exists on the result of the expression then
  its value is directly mapped to the body of the request. If the value
  of the 'body' field is of type bytes or string then it is used for
  the HTTP request body as-is, with no conversion. If the body field is
  of any other type then it is converted to a JSON string. If the body
  field does not exist then the resulting payload of the HTTP request
  will be data value of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message as described earlier.
* Any other fields in the resulting expression will be ignored.

The CEL expression may access the incoming CloudEvent message in its
definition, as follows:

* The 'data' field of the incoming CloudEvent message can be accessed
  using the 'message.data' value. Subfields of 'message.data' may also be
  accessed if an input_payload_format has been specified on the Pipeline.
* Each attribute of the incoming CloudEvent message can be accessed
  using the 'message.' value, where  is replaced with the
  name of the attribute.
* Existing headers can be accessed in the CEL expression using the
  'headers' variable. The 'headers' variable defines a map of key/value
  pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
  Binary Content Mode representation of the final message as described
  earlier. For example, the following CEL expression can be used to
  construct an HTTP request by adding an additional header to the HTTP
  headers of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message and by overwriting the body of the
  request:

```
{
"headers": headers.merge({"new-header-key": "new-header-value"}),
"body": "new-body"
}
```

* The default binding for the message payload can be accessed using the
  'body' variable. It conatins a string representation of the message
  payload in the format specified by the 'output_payload_format' field.
  If the 'input_payload_format' field is not set, the 'body'
  variable contains the same message payload bytes that were published.

Additionally, the following CEL extension functions are provided for
use in this CEL expression:

* toBase64Url:
  map.toBase64Url() -> string
* Converts a CelValue to a base64url encoded string
* toJsonString: map.toJsonString() -> string
* Converts a CelValue to a JSON string
* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents.
* It converts 'data' to destination payload format
  specified in 'output_payload_format'. If 'output_payload_format' is
  not set, the data will remain unchanged.
* It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  'output_payload_format'. If no
  'output_payload_format' is set it will use the value of the
  "datacontenttype" attribute on the CloudEvent if present, else
  remove "datacontenttype" attribute.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

The Pipeline expects that the message it receives adheres to the
standard CloudEvent format. If it doesn't then the outgoing message
request may fail with a persistent error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#message_binding_template GoogleEventarcPipeline#message_binding_template}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putNetworkConfig"></a>

```python
def put_network_config(
  network_attachment: str
) -> None
```

###### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putNetworkConfig.parameter.networkAttachment"></a>

- *Type:* str

Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#network_attachment GoogleEventarcPipeline#network_attachment}

---

##### `put_output_payload_format` <a name="put_output_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putOutputPayloadFormat"></a>

```python
def put_output_payload_format(
  avro: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro = None,
  json: GoogleEventarcPipelineDestinationsOutputPayloadFormatJson = None,
  protobuf: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf = None
) -> None
```

###### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.avro"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#avro GoogleEventarcPipeline#avro}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.json"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#json GoogleEventarcPipeline#json}

---

###### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.protobuf"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#protobuf GoogleEventarcPipeline#protobuf}

---

##### `reset_authentication_config` <a name="reset_authentication_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetAuthenticationConfig"></a>

```python
def reset_authentication_config() -> None
```

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_message_bus` <a name="reset_message_bus" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetMessageBus"></a>

```python
def reset_message_bus() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_output_payload_format` <a name="reset_output_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat"></a>

```python
def reset_output_payload_format() -> None
```

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```

##### `reset_workflow` <a name="reset_workflow" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetWorkflow"></a>

```python
def reset_workflow() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference">GoogleEventarcPipelineDestinationsHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference">GoogleEventarcPipelineDestinationsNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.outputPayloadFormat">output_payload_format</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.authenticationConfigInput">authentication_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.messageBusInput">message_bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput">output_payload_format_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.workflowInput">workflow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.messageBus">message_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.workflow">workflow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_config`<sup>Required</sup> <a name="authentication_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.authenticationConfig"></a>

```python
authentication_config: GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference</a>

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: GoogleEventarcPipelineDestinationsHttpEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference">GoogleEventarcPipelineDestinationsHttpEndpointOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.networkConfig"></a>

```python
network_config: GoogleEventarcPipelineDestinationsNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference">GoogleEventarcPipelineDestinationsNetworkConfigOutputReference</a>

---

##### `output_payload_format`<sup>Required</sup> <a name="output_payload_format" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.outputPayloadFormat"></a>

```python
output_payload_format: GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference</a>

---

##### `authentication_config_input`<sup>Optional</sup> <a name="authentication_config_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.authenticationConfigInput"></a>

```python
authentication_config_input: GoogleEventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a>

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: GoogleEventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a>

---

##### `message_bus_input`<sup>Optional</sup> <a name="message_bus_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.messageBusInput"></a>

```python
message_bus_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.networkConfigInput"></a>

```python
network_config_input: GoogleEventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a>

---

##### `output_payload_format_input`<sup>Optional</sup> <a name="output_payload_format_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput"></a>

```python
output_payload_format_input: GoogleEventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a>

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `workflow_input`<sup>Optional</sup> <a name="workflow_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.workflowInput"></a>

```python
workflow_input: str
```

- *Type:* str

---

##### `message_bus`<sup>Required</sup> <a name="message_bus" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.messageBus"></a>

```python
message_bus: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEventarcPipelineDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations">GoogleEventarcPipelineDestinations</a>]

---


### GoogleEventarcPipelineInputPayloadFormatAvroOutputReference <a name="GoogleEventarcPipelineInputPayloadFormatAvroOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a>

---


### GoogleEventarcPipelineInputPayloadFormatJsonOutputReference <a name="GoogleEventarcPipelineInputPayloadFormatJsonOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a>

---


### GoogleEventarcPipelineInputPayloadFormatOutputReference <a name="GoogleEventarcPipelineInputPayloadFormatOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putAvro">put_avro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putProtobuf">put_protobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetAvro">reset_avro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetProtobuf">reset_protobuf</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro` <a name="put_avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putAvro"></a>

```python
def put_avro(
  schema_definition: str = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putAvro.parameter.schemaDefinition"></a>

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

##### `put_json` <a name="put_json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putJson"></a>

```python
def put_json() -> None
```

##### `put_protobuf` <a name="put_protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putProtobuf"></a>

```python
def put_protobuf(
  schema_definition: str = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putProtobuf.parameter.schemaDefinition"></a>

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

##### `reset_avro` <a name="reset_avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetAvro"></a>

```python
def reset_avro() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_protobuf` <a name="reset_protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetProtobuf"></a>

```python
def reset_protobuf() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference">GoogleEventarcPipelineInputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference">GoogleEventarcPipelineInputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference">GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.avroInput">avro_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.protobufInput">protobuf_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.avro"></a>

```python
avro: GoogleEventarcPipelineInputPayloadFormatAvroOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference">GoogleEventarcPipelineInputPayloadFormatAvroOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.json"></a>

```python
json: GoogleEventarcPipelineInputPayloadFormatJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference">GoogleEventarcPipelineInputPayloadFormatJsonOutputReference</a>

---

##### `protobuf`<sup>Required</sup> <a name="protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.protobuf"></a>

```python
protobuf: GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference">GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference</a>

---

##### `avro_input`<sup>Optional</sup> <a name="avro_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.avroInput"></a>

```python
avro_input: GoogleEventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.jsonInput"></a>

```python
json_input: GoogleEventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a>

---

##### `protobuf_input`<sup>Optional</sup> <a name="protobuf_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.protobufInput"></a>

```python
protobuf_input: GoogleEventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a>

---


### GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference <a name="GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a>

---


### GoogleEventarcPipelineLoggingConfigOutputReference <a name="GoogleEventarcPipelineLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resetLogSeverity">reset_log_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_severity` <a name="reset_log_severity" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resetLogSeverity"></a>

```python
def reset_log_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.logSeverityInput">log_severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.logSeverity">log_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_severity_input`<sup>Optional</sup> <a name="log_severity_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.logSeverityInput"></a>

```python
log_severity_input: str
```

- *Type:* str

---

##### `log_severity`<sup>Required</sup> <a name="log_severity" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.logSeverity"></a>

```python
log_severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a>

---


### GoogleEventarcPipelineMediationsList <a name="GoogleEventarcPipelineMediationsList" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineMediationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleEventarcPipelineMediationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleEventarcPipelineMediations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]]

---


### GoogleEventarcPipelineMediationsOutputReference <a name="GoogleEventarcPipelineMediationsOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.putTransformation">put_transformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resetTransformation">reset_transformation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transformation` <a name="put_transformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.putTransformation"></a>

```python
def put_transformation(
  transformation_template: str = None
) -> None
```

###### `transformation_template`<sup>Optional</sup> <a name="transformation_template" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.putTransformation.parameter.transformationTemplate"></a>

- *Type:* str

The CEL expression template to apply to transform messages.

The following CEL extension functions are provided for
use in this CEL expression:

* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toDestinationPayloadFormat():
  message.data.toDestinationPayloadFormat() -> string or bytes
* Converts the message data to the destination payload format
  specified in Pipeline.Destination.output_payload_format
* This function is meant to be applied to the message.data field.
* If the destination payload format is not set, the function will
  return the message data unchanged.
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents
* This function applies toDestinationPayloadFormat() to the
  message data. It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  Pipeline.Destination.output_payload_format. If no
  output_payload_format is set it will use the existing
  datacontenttype on the CloudEvent if present, else leave
  datacontenttype absent.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#transformation_template GoogleEventarcPipeline#transformation_template}

---

##### `reset_transformation` <a name="reset_transformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resetTransformation"></a>

```python
def reset_transformation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference">GoogleEventarcPipelineMediationsTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.transformationInput">transformation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.transformation"></a>

```python
transformation: GoogleEventarcPipelineMediationsTransformationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference">GoogleEventarcPipelineMediationsTransformationOutputReference</a>

---

##### `transformation_input`<sup>Optional</sup> <a name="transformation_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.transformationInput"></a>

```python
transformation_input: GoogleEventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEventarcPipelineMediations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations">GoogleEventarcPipelineMediations</a>]

---


### GoogleEventarcPipelineMediationsTransformationOutputReference <a name="GoogleEventarcPipelineMediationsTransformationOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate">reset_transformation_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_transformation_template` <a name="reset_transformation_template" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate"></a>

```python
def reset_transformation_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput">transformation_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate">transformation_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation_template_input`<sup>Optional</sup> <a name="transformation_template_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput"></a>

```python
transformation_template_input: str
```

- *Type:* str

---

##### `transformation_template`<sup>Required</sup> <a name="transformation_template" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate"></a>

```python
transformation_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a>

---


### GoogleEventarcPipelineRetryPolicyOutputReference <a name="GoogleEventarcPipelineRetryPolicyOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMaxAttempts">reset_max_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay">reset_max_retry_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay">reset_min_retry_delay</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_attempts` <a name="reset_max_attempts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMaxAttempts"></a>

```python
def reset_max_attempts() -> None
```

##### `reset_max_retry_delay` <a name="reset_max_retry_delay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay"></a>

```python
def reset_max_retry_delay() -> None
```

##### `reset_min_retry_delay` <a name="reset_min_retry_delay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay"></a>

```python
def reset_min_retry_delay() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput">max_retry_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput">min_retry_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay">max_retry_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.minRetryDelay">min_retry_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_delay_input`<sup>Optional</sup> <a name="max_retry_delay_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput"></a>

```python
max_retry_delay_input: str
```

- *Type:* str

---

##### `min_retry_delay_input`<sup>Optional</sup> <a name="min_retry_delay_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput"></a>

```python
min_retry_delay_input: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_delay`<sup>Required</sup> <a name="max_retry_delay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay"></a>

```python
max_retry_delay: str
```

- *Type:* str

---

##### `min_retry_delay`<sup>Required</sup> <a name="min_retry_delay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.minRetryDelay"></a>

```python
min_retry_delay: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a>

---


### GoogleEventarcPipelineTimeoutsOutputReference <a name="GoogleEventarcPipelineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_pipeline

googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEventarcPipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a>]

---



