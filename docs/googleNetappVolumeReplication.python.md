# `googleNetappVolumeReplication` Submodule <a name="`googleNetappVolumeReplication` Submodule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeReplication <a name="GoogleNetappVolumeReplication" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication google_netapp_volume_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  replication_schedule: str,
  volume_name: str,
  delete_destination_volume: typing.Union[bool, IResolvable] = None,
  description: str = None,
  destination_volume_parameters: GoogleNetappVolumeReplicationDestinationVolumeParameters = None,
  force_stopping: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  replication_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleNetappVolumeReplicationTimeouts = None,
  wait_for_mirror: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.location">location</a></code> | <code>str</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.replicationSchedule">replication_schedule</a></code> | <code>str</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.volumeName">volume_name</a></code> | <code>str</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.deleteDestinationVolume">delete_destination_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.description">description</a></code> | <code>str</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.destinationVolumeParameters">destination_volume_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.forceStopping">force_stopping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.replicationEnabled">replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.waitForMirror">wait_for_mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Replication resource state is independent of mirror_state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.location"></a>

- *Type:* str

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#location GoogleNetappVolumeReplication#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.name"></a>

- *Type:* str

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#name GoogleNetappVolumeReplication#name}

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.replicationSchedule"></a>

- *Type:* str

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#replication_schedule GoogleNetappVolumeReplication#replication_schedule}

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.volumeName"></a>

- *Type:* str

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#volume_name GoogleNetappVolumeReplication#volume_name}

---

##### `delete_destination_volume`<sup>Optional</sup> <a name="delete_destination_volume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.deleteDestinationVolume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#delete_destination_volume GoogleNetappVolumeReplication#delete_destination_volume}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.description"></a>

- *Type:* str

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `destination_volume_parameters`<sup>Optional</sup> <a name="destination_volume_parameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.destinationVolumeParameters"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#destination_volume_parameters GoogleNetappVolumeReplication#destination_volume_parameters}

---

##### `force_stopping`<sup>Optional</sup> <a name="force_stopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.forceStopping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#force_stopping GoogleNetappVolumeReplication#force_stopping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#labels GoogleNetappVolumeReplication#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}.

---

##### `replication_enabled`<sup>Optional</sup> <a name="replication_enabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.replicationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#replication_enabled GoogleNetappVolumeReplication#replication_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#timeouts GoogleNetappVolumeReplication#timeouts}

---

##### `wait_for_mirror`<sup>Optional</sup> <a name="wait_for_mirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.waitForMirror"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#wait_for_mirror GoogleNetappVolumeReplication#wait_for_mirror}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters">put_destination_volume_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDeleteDestinationVolume">reset_delete_destination_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDestinationVolumeParameters">reset_destination_volume_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetForceStopping">reset_force_stopping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetReplicationEnabled">reset_replication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetWaitForMirror">reset_wait_for_mirror</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_volume_parameters` <a name="put_destination_volume_parameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters"></a>

```python
def put_destination_volume_parameters(
  storage_pool: str,
  description: str = None,
  share_name: str = None,
  volume_id: str = None
) -> None
```

###### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters.parameter.storagePool"></a>

- *Type:* str

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#storage_pool GoogleNetappVolumeReplication#storage_pool}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters.parameter.description"></a>

- *Type:* str

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

###### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters.parameter.shareName"></a>

- *Type:* str

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#share_name GoogleNetappVolumeReplication#share_name}

---

###### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters.parameter.volumeId"></a>

- *Type:* str

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#volume_id GoogleNetappVolumeReplication#volume_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}.

---

##### `reset_delete_destination_volume` <a name="reset_delete_destination_volume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDeleteDestinationVolume"></a>

```python
def reset_delete_destination_volume() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_volume_parameters` <a name="reset_destination_volume_parameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDestinationVolumeParameters"></a>

```python
def reset_destination_volume_parameters() -> None
```

##### `reset_force_stopping` <a name="reset_force_stopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetForceStopping"></a>

```python
def reset_force_stopping() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_replication_enabled` <a name="reset_replication_enabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetReplicationEnabled"></a>

```python
def reset_replication_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_mirror` <a name="reset_wait_for_mirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetWaitForMirror"></a>

```python
def reset_wait_for_mirror() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetappVolumeReplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetappVolumeReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetappVolumeReplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetappVolumeReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolume">destination_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParameters">destination_volume_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference">GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.healthy">healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.mirrorState">mirror_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.sourceVolume">source_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference">GoogleNetappVolumeReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.transferStats">transfer_stats</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList">GoogleNetappVolumeReplicationTransferStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolumeInput">delete_destination_volume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParametersInput">destination_volume_parameters_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStoppingInput">force_stopping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabledInput">replication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationScheduleInput">replication_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirrorInput">wait_for_mirror_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolume">delete_destination_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStopping">force_stopping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabled">replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirror">wait_for_mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination_volume`<sup>Required</sup> <a name="destination_volume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolume"></a>

```python
destination_volume: str
```

- *Type:* str

---

##### `destination_volume_parameters`<sup>Required</sup> <a name="destination_volume_parameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParameters"></a>

```python
destination_volume_parameters: GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference">GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.healthy"></a>

```python
healthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mirror_state`<sup>Required</sup> <a name="mirror_state" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.mirrorState"></a>

```python
mirror_state: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `source_volume`<sup>Required</sup> <a name="source_volume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.sourceVolume"></a>

```python
source_volume: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeouts"></a>

```python
timeouts: GoogleNetappVolumeReplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference">GoogleNetappVolumeReplicationTimeoutsOutputReference</a>

---

##### `transfer_stats`<sup>Required</sup> <a name="transfer_stats" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.transferStats"></a>

```python
transfer_stats: GoogleNetappVolumeReplicationTransferStatsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList">GoogleNetappVolumeReplicationTransferStatsList</a>

---

##### `delete_destination_volume_input`<sup>Optional</sup> <a name="delete_destination_volume_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolumeInput"></a>

```python
delete_destination_volume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_volume_parameters_input`<sup>Optional</sup> <a name="destination_volume_parameters_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParametersInput"></a>

```python
destination_volume_parameters_input: GoogleNetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `force_stopping_input`<sup>Optional</sup> <a name="force_stopping_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStoppingInput"></a>

```python
force_stopping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `replication_enabled_input`<sup>Optional</sup> <a name="replication_enabled_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabledInput"></a>

```python
replication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replication_schedule_input`<sup>Optional</sup> <a name="replication_schedule_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationScheduleInput"></a>

```python
replication_schedule_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetappVolumeReplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>]

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `wait_for_mirror_input`<sup>Optional</sup> <a name="wait_for_mirror_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirrorInput"></a>

```python
wait_for_mirror_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_destination_volume`<sup>Required</sup> <a name="delete_destination_volume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolume"></a>

```python
delete_destination_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_stopping`<sup>Required</sup> <a name="force_stopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStopping"></a>

```python
force_stopping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `replication_enabled`<sup>Required</sup> <a name="replication_enabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabled"></a>

```python
replication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `wait_for_mirror`<sup>Required</sup> <a name="wait_for_mirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirror"></a>

```python
wait_for_mirror: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeReplicationConfig <a name="GoogleNetappVolumeReplicationConfig" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  replication_schedule: str,
  volume_name: str,
  delete_destination_volume: typing.Union[bool, IResolvable] = None,
  description: str = None,
  destination_volume_parameters: GoogleNetappVolumeReplicationDestinationVolumeParameters = None,
  force_stopping: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  replication_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleNetappVolumeReplicationTimeouts = None,
  wait_for_mirror: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.location">location</a></code> | <code>str</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.name">name</a></code> | <code>str</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.volumeName">volume_name</a></code> | <code>str</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.deleteDestinationVolume">delete_destination_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.description">description</a></code> | <code>str</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.destinationVolumeParameters">destination_volume_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forceStopping">force_stopping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationEnabled">replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.waitForMirror">wait_for_mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Replication resource state is independent of mirror_state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#location GoogleNetappVolumeReplication#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#name GoogleNetappVolumeReplication#name}

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#replication_schedule GoogleNetappVolumeReplication#replication_schedule}

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#volume_name GoogleNetappVolumeReplication#volume_name}

---

##### `delete_destination_volume`<sup>Optional</sup> <a name="delete_destination_volume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.deleteDestinationVolume"></a>

```python
delete_destination_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#delete_destination_volume GoogleNetappVolumeReplication#delete_destination_volume}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `destination_volume_parameters`<sup>Optional</sup> <a name="destination_volume_parameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.destinationVolumeParameters"></a>

```python
destination_volume_parameters: GoogleNetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#destination_volume_parameters GoogleNetappVolumeReplication#destination_volume_parameters}

---

##### `force_stopping`<sup>Optional</sup> <a name="force_stopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forceStopping"></a>

```python
force_stopping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#force_stopping GoogleNetappVolumeReplication#force_stopping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#labels GoogleNetappVolumeReplication#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}.

---

##### `replication_enabled`<sup>Optional</sup> <a name="replication_enabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationEnabled"></a>

```python
replication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#replication_enabled GoogleNetappVolumeReplication#replication_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.timeouts"></a>

```python
timeouts: GoogleNetappVolumeReplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#timeouts GoogleNetappVolumeReplication#timeouts}

---

##### `wait_for_mirror`<sup>Optional</sup> <a name="wait_for_mirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.waitForMirror"></a>

```python
wait_for_mirror: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#wait_for_mirror GoogleNetappVolumeReplication#wait_for_mirror}

---

### GoogleNetappVolumeReplicationDestinationVolumeParameters <a name="GoogleNetappVolumeReplicationDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters(
  storage_pool: str,
  description: str = None,
  share_name: str = None,
  volume_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.storagePool">storage_pool</a></code> | <code>str</code> | Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.description">description</a></code> | <code>str</code> | Description for the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.shareName">share_name</a></code> | <code>str</code> | Share name for destination volume. If not specified, name of source volume's share name will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.volumeId">volume_id</a></code> | <code>str</code> | Name for the destination volume to be created. |

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#storage_pool GoogleNetappVolumeReplication#storage_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#share_name GoogleNetappVolumeReplication#share_name}

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#volume_id GoogleNetappVolumeReplication#volume_id}

---

### GoogleNetappVolumeReplicationTimeouts <a name="GoogleNetappVolumeReplicationTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}.

---

### GoogleNetappVolumeReplicationTransferStats <a name="GoogleNetappVolumeReplicationTransferStats" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference <a name="GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName">reset_share_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId">reset_volume_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_share_name` <a name="reset_share_name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName"></a>

```python
def reset_share_name() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput">storage_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `storage_pool_input`<sup>Optional</sup> <a name="storage_pool_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput"></a>

```python
storage_pool_input: str
```

- *Type:* str

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---


### GoogleNetappVolumeReplicationTimeoutsOutputReference <a name="GoogleNetappVolumeReplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetappVolumeReplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>]

---


### GoogleNetappVolumeReplicationTransferStatsList <a name="GoogleNetappVolumeReplicationTransferStatsList" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetappVolumeReplicationTransferStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetappVolumeReplicationTransferStatsOutputReference <a name="GoogleNetappVolumeReplicationTransferStatsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume_replication

googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lagDuration">lag_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes">last_transfer_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration">last_transfer_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime">last_transfer_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError">last_transfer_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration">total_transfer_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.transferBytes">transfer_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats">GoogleNetappVolumeReplicationTransferStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lag_duration`<sup>Required</sup> <a name="lag_duration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lagDuration"></a>

```python
lag_duration: str
```

- *Type:* str

---

##### `last_transfer_bytes`<sup>Required</sup> <a name="last_transfer_bytes" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes"></a>

```python
last_transfer_bytes: str
```

- *Type:* str

---

##### `last_transfer_duration`<sup>Required</sup> <a name="last_transfer_duration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration"></a>

```python
last_transfer_duration: str
```

- *Type:* str

---

##### `last_transfer_end_time`<sup>Required</sup> <a name="last_transfer_end_time" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime"></a>

```python
last_transfer_end_time: str
```

- *Type:* str

---

##### `last_transfer_error`<sup>Required</sup> <a name="last_transfer_error" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError"></a>

```python
last_transfer_error: str
```

- *Type:* str

---

##### `total_transfer_duration`<sup>Required</sup> <a name="total_transfer_duration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration"></a>

```python
total_transfer_duration: str
```

- *Type:* str

---

##### `transfer_bytes`<sup>Required</sup> <a name="transfer_bytes" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.transferBytes"></a>

```python
transfer_bytes: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeReplicationTransferStats
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats">GoogleNetappVolumeReplicationTransferStats</a>

---



