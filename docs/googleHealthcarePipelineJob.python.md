# `googleHealthcarePipelineJob` Submodule <a name="`googleHealthcarePipelineJob` Submodule" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcarePipelineJob <a name="GoogleHealthcarePipelineJob" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job google_healthcare_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  location: str,
  name: str,
  backfill_pipeline_job: GoogleHealthcarePipelineJobBackfillPipelineJob = None,
  disable_lineage: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mapping_pipeline_job: GoogleHealthcarePipelineJobMappingPipelineJob = None,
  reconciliation_pipeline_job: GoogleHealthcarePipelineJobReconciliationPipelineJob = None,
  timeouts: GoogleHealthcarePipelineJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | Healthcare Dataset under which the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.location">location</a></code> | <code>str</code> | Location where the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the pipeline job. This field is user-assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.backfillPipelineJob">backfill_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a></code> | backfill_pipeline_job block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.disableLineage">disable_lineage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, disables writing lineage for the pipeline. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#id GoogleHealthcarePipelineJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize Pipeline Jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.mappingPipelineJob">mapping_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a></code> | mapping_pipeline_job block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.reconciliationPipelineJob">reconciliation_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a></code> | reconciliation_pipeline_job block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.dataset"></a>

- *Type:* str

Healthcare Dataset under which the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#dataset GoogleHealthcarePipelineJob#dataset}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.location"></a>

- *Type:* str

Location where the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#location GoogleHealthcarePipelineJob#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the pipeline job. This field is user-assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#name GoogleHealthcarePipelineJob#name}

---

##### `backfill_pipeline_job`<sup>Optional</sup> <a name="backfill_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.backfillPipelineJob"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a>

backfill_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#backfill_pipeline_job GoogleHealthcarePipelineJob#backfill_pipeline_job}

---

##### `disable_lineage`<sup>Optional</sup> <a name="disable_lineage" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.disableLineage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, disables writing lineage for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#disable_lineage GoogleHealthcarePipelineJob#disable_lineage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#id GoogleHealthcarePipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize Pipeline Jobs.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, and must conform to the following PCRE regular expression:
[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}*-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a
UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE
regular expression: [\p{Ll}\p{Lo}\p{N}*-]{0,63}
No more than 64 labels can be associated with a given pipeline.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#labels GoogleHealthcarePipelineJob#labels}

---

##### `mapping_pipeline_job`<sup>Optional</sup> <a name="mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.mappingPipelineJob"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a>

mapping_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#mapping_pipeline_job GoogleHealthcarePipelineJob#mapping_pipeline_job}

---

##### `reconciliation_pipeline_job`<sup>Optional</sup> <a name="reconciliation_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.reconciliationPipelineJob"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a>

reconciliation_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#reconciliation_pipeline_job GoogleHealthcarePipelineJob#reconciliation_pipeline_job}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#timeouts GoogleHealthcarePipelineJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putBackfillPipelineJob">put_backfill_pipeline_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob">put_mapping_pipeline_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putReconciliationPipelineJob">put_reconciliation_pipeline_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetBackfillPipelineJob">reset_backfill_pipeline_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetDisableLineage">reset_disable_lineage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetMappingPipelineJob">reset_mapping_pipeline_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetReconciliationPipelineJob">reset_reconciliation_pipeline_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backfill_pipeline_job` <a name="put_backfill_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putBackfillPipelineJob"></a>

```python
def put_backfill_pipeline_job(
  mapping_pipeline_job: str = None
) -> None
```

###### `mapping_pipeline_job`<sup>Optional</sup> <a name="mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putBackfillPipelineJob.parameter.mappingPipelineJob"></a>

- *Type:* str

Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#mapping_pipeline_job GoogleHealthcarePipelineJob#mapping_pipeline_job}

---

##### `put_mapping_pipeline_job` <a name="put_mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob"></a>

```python
def put_mapping_pipeline_job(
  mapping_config: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig,
  fhir_store_destination: str = None,
  fhir_streaming_source: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource = None,
  reconciliation_destination: typing.Union[bool, IResolvable] = None
) -> None
```

###### `mapping_config`<sup>Required</sup> <a name="mapping_config" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob.parameter.mappingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a>

mapping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#mapping_config GoogleHealthcarePipelineJob#mapping_config}

---

###### `fhir_store_destination`<sup>Optional</sup> <a name="fhir_store_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob.parameter.fhirStoreDestination"></a>

- *Type:* str

If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs.

You must
grant your pipeline project's Cloud Healthcare Service
Agent serviceaccount healthcare.fhirResources.executeBundle
and healthcare.fhirResources.create permissions on the
destination store. The destination store must set
[disableReferentialIntegrity][FhirStore.disable_referential_integrity]
to true. The destination store must use FHIR version R4.
Format: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{fhirStoreID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#fhir_store_destination GoogleHealthcarePipelineJob#fhir_store_destination}

---

###### `fhir_streaming_source`<sup>Optional</sup> <a name="fhir_streaming_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob.parameter.fhirStreamingSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

fhir_streaming_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#fhir_streaming_source GoogleHealthcarePipelineJob#fhir_streaming_source}

---

###### `reconciliation_destination`<sup>Optional</sup> <a name="reconciliation_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob.parameter.reconciliationDestination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset.

A reconciliation
pipeline must exist in this dataset before a mapping pipeline
with a reconciliation destination can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#reconciliation_destination GoogleHealthcarePipelineJob#reconciliation_destination}

---

##### `put_reconciliation_pipeline_job` <a name="put_reconciliation_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putReconciliationPipelineJob"></a>

```python
def put_reconciliation_pipeline_job(
  matching_uri_prefix: str,
  merge_config: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig,
  fhir_store_destination: str = None
) -> None
```

###### `matching_uri_prefix`<sup>Required</sup> <a name="matching_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putReconciliationPipelineJob.parameter.matchingUriPrefix"></a>

- *Type:* str

Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on.

Example: gs://{bucket-id}/{path/to/matching/configs}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#matching_uri_prefix GoogleHealthcarePipelineJob#matching_uri_prefix}

---

###### `merge_config`<sup>Required</sup> <a name="merge_config" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putReconciliationPipelineJob.parameter.mergeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

merge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#merge_config GoogleHealthcarePipelineJob#merge_config}

---

###### `fhir_store_destination`<sup>Optional</sup> <a name="fhir_store_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putReconciliationPipelineJob.parameter.fhirStoreDestination"></a>

- *Type:* str

The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#fhir_store_destination GoogleHealthcarePipelineJob#fhir_store_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#create GoogleHealthcarePipelineJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#delete GoogleHealthcarePipelineJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#update GoogleHealthcarePipelineJob#update}.

---

##### `reset_backfill_pipeline_job` <a name="reset_backfill_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetBackfillPipelineJob"></a>

```python
def reset_backfill_pipeline_job() -> None
```

##### `reset_disable_lineage` <a name="reset_disable_lineage" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetDisableLineage"></a>

```python
def reset_disable_lineage() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mapping_pipeline_job` <a name="reset_mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetMappingPipelineJob"></a>

```python
def reset_mapping_pipeline_job() -> None
```

##### `reset_reconciliation_pipeline_job` <a name="reset_reconciliation_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetReconciliationPipelineJob"></a>

```python
def reset_reconciliation_pipeline_job() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleHealthcarePipelineJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleHealthcarePipelineJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleHealthcarePipelineJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleHealthcarePipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcarePipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.backfillPipelineJob">backfill_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference">GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.mappingPipelineJob">mapping_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.reconciliationPipelineJob">reconciliation_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference">GoogleHealthcarePipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.backfillPipelineJobInput">backfill_pipeline_job_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.disableLineageInput">disable_lineage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.mappingPipelineJobInput">mapping_pipeline_job_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.reconciliationPipelineJobInput">reconciliation_pipeline_job_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.disableLineage">disable_lineage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backfill_pipeline_job`<sup>Required</sup> <a name="backfill_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.backfillPipelineJob"></a>

```python
backfill_pipeline_job: GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference">GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `mapping_pipeline_job`<sup>Required</sup> <a name="mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.mappingPipelineJob"></a>

```python
mapping_pipeline_job: GoogleHealthcarePipelineJobMappingPipelineJobOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobOutputReference</a>

---

##### `reconciliation_pipeline_job`<sup>Required</sup> <a name="reconciliation_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.reconciliationPipelineJob"></a>

```python
reconciliation_pipeline_job: GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.timeouts"></a>

```python
timeouts: GoogleHealthcarePipelineJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference">GoogleHealthcarePipelineJobTimeoutsOutputReference</a>

---

##### `backfill_pipeline_job_input`<sup>Optional</sup> <a name="backfill_pipeline_job_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.backfillPipelineJobInput"></a>

```python
backfill_pipeline_job_input: GoogleHealthcarePipelineJobBackfillPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a>

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `disable_lineage_input`<sup>Optional</sup> <a name="disable_lineage_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.disableLineageInput"></a>

```python
disable_lineage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mapping_pipeline_job_input`<sup>Optional</sup> <a name="mapping_pipeline_job_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.mappingPipelineJobInput"></a>

```python
mapping_pipeline_job_input: GoogleHealthcarePipelineJobMappingPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `reconciliation_pipeline_job_input`<sup>Optional</sup> <a name="reconciliation_pipeline_job_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.reconciliationPipelineJobInput"></a>

```python
reconciliation_pipeline_job_input: GoogleHealthcarePipelineJobReconciliationPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleHealthcarePipelineJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `disable_lineage`<sup>Required</sup> <a name="disable_lineage" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.disableLineage"></a>

```python
disable_lineage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcarePipelineJobBackfillPipelineJob <a name="GoogleHealthcarePipelineJobBackfillPipelineJob" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob(
  mapping_pipeline_job: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob">mapping_pipeline_job</a></code> | <code>str</code> | Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}. |

---

##### `mapping_pipeline_job`<sup>Optional</sup> <a name="mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob"></a>

```python
mapping_pipeline_job: str
```

- *Type:* str

Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#mapping_pipeline_job GoogleHealthcarePipelineJob#mapping_pipeline_job}

---

### GoogleHealthcarePipelineJobConfig <a name="GoogleHealthcarePipelineJobConfig" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  location: str,
  name: str,
  backfill_pipeline_job: GoogleHealthcarePipelineJobBackfillPipelineJob = None,
  disable_lineage: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mapping_pipeline_job: GoogleHealthcarePipelineJobMappingPipelineJob = None,
  reconciliation_pipeline_job: GoogleHealthcarePipelineJobReconciliationPipelineJob = None,
  timeouts: GoogleHealthcarePipelineJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.dataset">dataset</a></code> | <code>str</code> | Healthcare Dataset under which the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.location">location</a></code> | <code>str</code> | Location where the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the pipeline job. This field is user-assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.backfillPipelineJob">backfill_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a></code> | backfill_pipeline_job block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.disableLineage">disable_lineage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, disables writing lineage for the pipeline. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#id GoogleHealthcarePipelineJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize Pipeline Jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.mappingPipelineJob">mapping_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a></code> | mapping_pipeline_job block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.reconciliationPipelineJob">reconciliation_pipeline_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a></code> | reconciliation_pipeline_job block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

Healthcare Dataset under which the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#dataset GoogleHealthcarePipelineJob#dataset}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location where the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#location GoogleHealthcarePipelineJob#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the pipeline job. This field is user-assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#name GoogleHealthcarePipelineJob#name}

---

##### `backfill_pipeline_job`<sup>Optional</sup> <a name="backfill_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.backfillPipelineJob"></a>

```python
backfill_pipeline_job: GoogleHealthcarePipelineJobBackfillPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a>

backfill_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#backfill_pipeline_job GoogleHealthcarePipelineJob#backfill_pipeline_job}

---

##### `disable_lineage`<sup>Optional</sup> <a name="disable_lineage" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.disableLineage"></a>

```python
disable_lineage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, disables writing lineage for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#disable_lineage GoogleHealthcarePipelineJob#disable_lineage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#id GoogleHealthcarePipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize Pipeline Jobs.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, and must conform to the following PCRE regular expression:
[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}*-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a
UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE
regular expression: [\p{Ll}\p{Lo}\p{N}*-]{0,63}
No more than 64 labels can be associated with a given pipeline.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#labels GoogleHealthcarePipelineJob#labels}

---

##### `mapping_pipeline_job`<sup>Optional</sup> <a name="mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.mappingPipelineJob"></a>

```python
mapping_pipeline_job: GoogleHealthcarePipelineJobMappingPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a>

mapping_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#mapping_pipeline_job GoogleHealthcarePipelineJob#mapping_pipeline_job}

---

##### `reconciliation_pipeline_job`<sup>Optional</sup> <a name="reconciliation_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.reconciliationPipelineJob"></a>

```python
reconciliation_pipeline_job: GoogleHealthcarePipelineJobReconciliationPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a>

reconciliation_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#reconciliation_pipeline_job GoogleHealthcarePipelineJob#reconciliation_pipeline_job}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.timeouts"></a>

```python
timeouts: GoogleHealthcarePipelineJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#timeouts GoogleHealthcarePipelineJob#timeouts}

---

### GoogleHealthcarePipelineJobMappingPipelineJob <a name="GoogleHealthcarePipelineJobMappingPipelineJob" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob(
  mapping_config: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig,
  fhir_store_destination: str = None,
  fhir_streaming_source: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource = None,
  reconciliation_destination: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.mappingConfig">mapping_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | mapping_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination">fhir_store_destination</a></code> | <code>str</code> | If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource">fhir_streaming_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | fhir_streaming_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination">reconciliation_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset. |

---

##### `mapping_config`<sup>Required</sup> <a name="mapping_config" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.mappingConfig"></a>

```python
mapping_config: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a>

mapping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#mapping_config GoogleHealthcarePipelineJob#mapping_config}

---

##### `fhir_store_destination`<sup>Optional</sup> <a name="fhir_store_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination"></a>

```python
fhir_store_destination: str
```

- *Type:* str

If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs.

You must
grant your pipeline project's Cloud Healthcare Service
Agent serviceaccount healthcare.fhirResources.executeBundle
and healthcare.fhirResources.create permissions on the
destination store. The destination store must set
[disableReferentialIntegrity][FhirStore.disable_referential_integrity]
to true. The destination store must use FHIR version R4.
Format: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{fhirStoreID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#fhir_store_destination GoogleHealthcarePipelineJob#fhir_store_destination}

---

##### `fhir_streaming_source`<sup>Optional</sup> <a name="fhir_streaming_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource"></a>

```python
fhir_streaming_source: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

fhir_streaming_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#fhir_streaming_source GoogleHealthcarePipelineJob#fhir_streaming_source}

---

##### `reconciliation_destination`<sup>Optional</sup> <a name="reconciliation_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination"></a>

```python
reconciliation_destination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset.

A reconciliation
pipeline must exist in this dataset before a mapping pipeline
with a reconciliation destination can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#reconciliation_destination GoogleHealthcarePipelineJob#reconciliation_destination}

---

### GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource <a name="GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource(
  fhir_store: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore">fhir_store</a></code> | <code>str</code> | The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description">description</a></code> | <code>str</code> | Describes the streaming FHIR data source. |

---

##### `fhir_store`<sup>Required</sup> <a name="fhir_store" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore"></a>

```python
fhir_store: str
```

- *Type:* str

The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#fhir_store GoogleHealthcarePipelineJob#fhir_store}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description"></a>

```python
description: str
```

- *Type:* str

Describes the streaming FHIR data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

### GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig <a name="GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig(
  description: str = None,
  whistle_config_source: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.property.description">description</a></code> | <code>str</code> | Describes the mapping configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource">whistle_config_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | whistle_config_source block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

##### `whistle_config_source`<sup>Optional</sup> <a name="whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource"></a>

```python
whistle_config_source: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#whistle_config_source GoogleHealthcarePipelineJob#whistle_config_source}

---

### GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource <a name="GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource(
  import_uri_prefix: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix">import_uri_prefix</a></code> | <code>str</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri">uri</a></code> | <code>str</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `import_uri_prefix`<sup>Required</sup> <a name="import_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix"></a>

```python
import_uri_prefix: str
```

- *Type:* str

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#import_uri_prefix GoogleHealthcarePipelineJob#import_uri_prefix}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri"></a>

```python
uri: str
```

- *Type:* str

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#uri GoogleHealthcarePipelineJob#uri}

---

### GoogleHealthcarePipelineJobReconciliationPipelineJob <a name="GoogleHealthcarePipelineJobReconciliationPipelineJob" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob(
  matching_uri_prefix: str,
  merge_config: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig,
  fhir_store_destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix">matching_uri_prefix</a></code> | <code>str</code> | Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig">merge_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | merge_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination">fhir_store_destination</a></code> | <code>str</code> | The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}. |

---

##### `matching_uri_prefix`<sup>Required</sup> <a name="matching_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix"></a>

```python
matching_uri_prefix: str
```

- *Type:* str

Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on.

Example: gs://{bucket-id}/{path/to/matching/configs}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#matching_uri_prefix GoogleHealthcarePipelineJob#matching_uri_prefix}

---

##### `merge_config`<sup>Required</sup> <a name="merge_config" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig"></a>

```python
merge_config: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

merge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#merge_config GoogleHealthcarePipelineJob#merge_config}

---

##### `fhir_store_destination`<sup>Optional</sup> <a name="fhir_store_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination"></a>

```python
fhir_store_destination: str
```

- *Type:* str

The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#fhir_store_destination GoogleHealthcarePipelineJob#fhir_store_destination}

---

### GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig(
  whistle_config_source: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource">whistle_config_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | whistle_config_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description">description</a></code> | <code>str</code> | Describes the mapping configuration. |

---

##### `whistle_config_source`<sup>Required</sup> <a name="whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource"></a>

```python
whistle_config_source: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#whistle_config_source GoogleHealthcarePipelineJob#whistle_config_source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

### GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource(
  import_uri_prefix: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix">import_uri_prefix</a></code> | <code>str</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri">uri</a></code> | <code>str</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `import_uri_prefix`<sup>Required</sup> <a name="import_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix"></a>

```python
import_uri_prefix: str
```

- *Type:* str

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#import_uri_prefix GoogleHealthcarePipelineJob#import_uri_prefix}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri"></a>

```python
uri: str
```

- *Type:* str

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#uri GoogleHealthcarePipelineJob#uri}

---

### GoogleHealthcarePipelineJobTimeouts <a name="GoogleHealthcarePipelineJobTimeouts" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#create GoogleHealthcarePipelineJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#delete GoogleHealthcarePipelineJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#update GoogleHealthcarePipelineJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#create GoogleHealthcarePipelineJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#delete GoogleHealthcarePipelineJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#update GoogleHealthcarePipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference <a name="GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob">reset_mapping_pipeline_job</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mapping_pipeline_job` <a name="reset_mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob"></a>

```python
def reset_mapping_pipeline_job() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput">mapping_pipeline_job_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob">mapping_pipeline_job</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mapping_pipeline_job_input`<sup>Optional</sup> <a name="mapping_pipeline_job_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput"></a>

```python
mapping_pipeline_job_input: str
```

- *Type:* str

---

##### `mapping_pipeline_job`<sup>Required</sup> <a name="mapping_pipeline_job" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob"></a>

```python
mapping_pipeline_job: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcarePipelineJobBackfillPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a>

---


### GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference <a name="GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput">fhir_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore">fhir_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fhir_store_input`<sup>Optional</sup> <a name="fhir_store_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput"></a>

```python
fhir_store_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fhir_store`<sup>Required</sup> <a name="fhir_store" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore"></a>

```python
fhir_store: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---


### GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference <a name="GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource">put_whistle_config_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource">reset_whistle_config_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_whistle_config_source` <a name="put_whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource"></a>

```python
def put_whistle_config_source(
  import_uri_prefix: str,
  uri: str
) -> None
```

###### `import_uri_prefix`<sup>Required</sup> <a name="import_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource.parameter.importUriPrefix"></a>

- *Type:* str

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#import_uri_prefix GoogleHealthcarePipelineJob#import_uri_prefix}

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource.parameter.uri"></a>

- *Type:* str

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#uri GoogleHealthcarePipelineJob#uri}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_whistle_config_source` <a name="reset_whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource"></a>

```python
def reset_whistle_config_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource">whistle_config_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput">whistle_config_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `whistle_config_source`<sup>Required</sup> <a name="whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource"></a>

```python
whistle_config_source: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `whistle_config_source_input`<sup>Optional</sup> <a name="whistle_config_source_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput"></a>

```python
whistle_config_source_input: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---


### GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference <a name="GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">import_uri_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix">import_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `import_uri_prefix_input`<sup>Optional</sup> <a name="import_uri_prefix_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```python
import_uri_prefix_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `import_uri_prefix`<sup>Required</sup> <a name="import_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```python
import_uri_prefix: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---


### GoogleHealthcarePipelineJobMappingPipelineJobOutputReference <a name="GoogleHealthcarePipelineJobMappingPipelineJobOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource">put_fhir_streaming_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig">put_mapping_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination">reset_fhir_store_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource">reset_fhir_streaming_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination">reset_reconciliation_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fhir_streaming_source` <a name="put_fhir_streaming_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource"></a>

```python
def put_fhir_streaming_source(
  fhir_store: str,
  description: str = None
) -> None
```

###### `fhir_store`<sup>Required</sup> <a name="fhir_store" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource.parameter.fhirStore"></a>

- *Type:* str

The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#fhir_store GoogleHealthcarePipelineJob#fhir_store}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource.parameter.description"></a>

- *Type:* str

Describes the streaming FHIR data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

##### `put_mapping_config` <a name="put_mapping_config" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig"></a>

```python
def put_mapping_config(
  description: str = None,
  whistle_config_source: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig.parameter.description"></a>

- *Type:* str

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

###### `whistle_config_source`<sup>Optional</sup> <a name="whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig.parameter.whistleConfigSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#whistle_config_source GoogleHealthcarePipelineJob#whistle_config_source}

---

##### `reset_fhir_store_destination` <a name="reset_fhir_store_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination"></a>

```python
def reset_fhir_store_destination() -> None
```

##### `reset_fhir_streaming_source` <a name="reset_fhir_streaming_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource"></a>

```python
def reset_fhir_streaming_source() -> None
```

##### `reset_reconciliation_destination` <a name="reset_reconciliation_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination"></a>

```python
def reset_reconciliation_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource">fhir_streaming_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig">mapping_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput">fhir_store_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput">fhir_streaming_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput">mapping_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput">reconciliation_destination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination">fhir_store_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination">reconciliation_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fhir_streaming_source`<sup>Required</sup> <a name="fhir_streaming_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource"></a>

```python
fhir_streaming_source: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a>

---

##### `mapping_config`<sup>Required</sup> <a name="mapping_config" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig"></a>

```python
mapping_config: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a>

---

##### `fhir_store_destination_input`<sup>Optional</sup> <a name="fhir_store_destination_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```python
fhir_store_destination_input: str
```

- *Type:* str

---

##### `fhir_streaming_source_input`<sup>Optional</sup> <a name="fhir_streaming_source_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput"></a>

```python
fhir_streaming_source_input: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `mapping_config_input`<sup>Optional</sup> <a name="mapping_config_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput"></a>

```python
mapping_config_input: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `reconciliation_destination_input`<sup>Optional</sup> <a name="reconciliation_destination_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput"></a>

```python
reconciliation_destination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fhir_store_destination`<sup>Required</sup> <a name="fhir_store_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination"></a>

```python
fhir_store_destination: str
```

- *Type:* str

---

##### `reconciliation_destination`<sup>Required</sup> <a name="reconciliation_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination"></a>

```python
reconciliation_destination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcarePipelineJobMappingPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a>

---


### GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource">put_whistle_config_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_whistle_config_source` <a name="put_whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource"></a>

```python
def put_whistle_config_source(
  import_uri_prefix: str,
  uri: str
) -> None
```

###### `import_uri_prefix`<sup>Required</sup> <a name="import_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource.parameter.importUriPrefix"></a>

- *Type:* str

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#import_uri_prefix GoogleHealthcarePipelineJob#import_uri_prefix}

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource.parameter.uri"></a>

- *Type:* str

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#uri GoogleHealthcarePipelineJob#uri}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource">whistle_config_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput">whistle_config_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `whistle_config_source`<sup>Required</sup> <a name="whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource"></a>

```python
whistle_config_source: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `whistle_config_source_input`<sup>Optional</sup> <a name="whistle_config_source_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput"></a>

```python
whistle_config_source_input: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---


### GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">import_uri_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix">import_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `import_uri_prefix_input`<sup>Optional</sup> <a name="import_uri_prefix_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```python
import_uri_prefix_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `import_uri_prefix`<sup>Required</sup> <a name="import_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```python
import_uri_prefix: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---


### GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig">put_merge_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination">reset_fhir_store_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_merge_config` <a name="put_merge_config" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig"></a>

```python
def put_merge_config(
  whistle_config_source: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource,
  description: str = None
) -> None
```

###### `whistle_config_source`<sup>Required</sup> <a name="whistle_config_source" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig.parameter.whistleConfigSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#whistle_config_source GoogleHealthcarePipelineJob#whistle_config_source}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig.parameter.description"></a>

- *Type:* str

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

##### `reset_fhir_store_destination` <a name="reset_fhir_store_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination"></a>

```python
def reset_fhir_store_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig">merge_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput">fhir_store_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput">matching_uri_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput">merge_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination">fhir_store_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix">matching_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merge_config`<sup>Required</sup> <a name="merge_config" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig"></a>

```python
merge_config: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a>

---

##### `fhir_store_destination_input`<sup>Optional</sup> <a name="fhir_store_destination_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```python
fhir_store_destination_input: str
```

- *Type:* str

---

##### `matching_uri_prefix_input`<sup>Optional</sup> <a name="matching_uri_prefix_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput"></a>

```python
matching_uri_prefix_input: str
```

- *Type:* str

---

##### `merge_config_input`<sup>Optional</sup> <a name="merge_config_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput"></a>

```python
merge_config_input: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `fhir_store_destination`<sup>Required</sup> <a name="fhir_store_destination" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination"></a>

```python
fhir_store_destination: str
```

- *Type:* str

---

##### `matching_uri_prefix`<sup>Required</sup> <a name="matching_uri_prefix" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix"></a>

```python
matching_uri_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcarePipelineJobReconciliationPipelineJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a>

---


### GoogleHealthcarePipelineJobTimeoutsOutputReference <a name="GoogleHealthcarePipelineJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_pipeline_job

googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleHealthcarePipelineJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>]

---



