# `googleContainerAwsCluster` Submodule <a name="`googleContainerAwsCluster` Submodule" id="@cdktf/provider-google-beta.googleContainerAwsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAwsCluster <a name="GoogleContainerAwsCluster" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster google_container_aws_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: GoogleContainerAwsClusterAuthorization,
  aws_region: str,
  control_plane: GoogleContainerAwsClusterControlPlane,
  fleet: GoogleContainerAwsClusterFleet,
  location: str,
  name: str,
  networking: GoogleContainerAwsClusterNetworking,
  annotations: typing.Mapping[str] = None,
  binary_authorization: GoogleContainerAwsClusterBinaryAuthorization = None,
  description: str = None,
  id: str = None,
  logging_config: GoogleContainerAwsClusterLoggingConfig = None,
  project: str = None,
  timeouts: GoogleContainerAwsClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.awsRegion">aws_region</a></code> | <code>str</code> | The AWS region where the cluster runs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#id GoogleContainerAwsCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#authorization GoogleContainerAwsCluster#authorization}

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.awsRegion"></a>

- *Type:* str

The AWS region where the cluster runs.

Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#aws_region GoogleContainerAwsCluster#aws_region}

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.controlPlane"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#control_plane GoogleContainerAwsCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#fleet GoogleContainerAwsCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#location GoogleContainerAwsCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.name"></a>

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#name GoogleContainerAwsCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#networking GoogleContainerAwsCluster#networking}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#annotations GoogleContainerAwsCluster#annotations}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#binary_authorization GoogleContainerAwsCluster#binary_authorization}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.description"></a>

- *Type:* str

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#description GoogleContainerAwsCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#id GoogleContainerAwsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#logging_config GoogleContainerAwsCluster#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#project GoogleContainerAwsCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#timeouts GoogleContainerAwsCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putBinaryAuthorization">put_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane">put_control_plane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putFleet">put_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking">put_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetBinaryAuthorization">reset_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putAuthorization"></a>

```python
def put_authorization(
  admin_users: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminUsers]],
  admin_groups: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminGroups]] = None
) -> None
```

###### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putAuthorization.parameter.adminUsers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#admin_users GoogleContainerAwsCluster#admin_users}

---

###### `admin_groups`<sup>Optional</sup> <a name="admin_groups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putAuthorization.parameter.adminGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]]

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#admin_groups GoogleContainerAwsCluster#admin_groups}

---

##### `put_binary_authorization` <a name="put_binary_authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putBinaryAuthorization"></a>

```python
def put_binary_authorization(
  evaluation_mode: str = None
) -> None
```

###### `evaluation_mode`<sup>Optional</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putBinaryAuthorization.parameter.evaluationMode"></a>

- *Type:* str

Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#evaluation_mode GoogleContainerAwsCluster#evaluation_mode}

---

##### `put_control_plane` <a name="put_control_plane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane"></a>

```python
def put_control_plane(
  aws_services_authentication: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication,
  config_encryption: GoogleContainerAwsClusterControlPlaneConfigEncryption,
  database_encryption: GoogleContainerAwsClusterControlPlaneDatabaseEncryption,
  iam_instance_profile: str,
  subnet_ids: typing.List[str],
  version: str,
  instance_placement: GoogleContainerAwsClusterControlPlaneInstancePlacement = None,
  instance_type: str = None,
  main_volume: GoogleContainerAwsClusterControlPlaneMainVolume = None,
  proxy_config: GoogleContainerAwsClusterControlPlaneProxyConfig = None,
  root_volume: GoogleContainerAwsClusterControlPlaneRootVolume = None,
  security_group_ids: typing.List[str] = None,
  ssh_config: GoogleContainerAwsClusterControlPlaneSshConfig = None,
  tags: typing.Mapping[str] = None
) -> None
```

###### `aws_services_authentication`<sup>Required</sup> <a name="aws_services_authentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.awsServicesAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

aws_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#aws_services_authentication GoogleContainerAwsCluster#aws_services_authentication}

---

###### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.configEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#config_encryption GoogleContainerAwsCluster#config_encryption}

---

###### `database_encryption`<sup>Required</sup> <a name="database_encryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.databaseEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#database_encryption GoogleContainerAwsCluster#database_encryption}

---

###### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.iamInstanceProfile"></a>

- *Type:* str

The name of the AWS IAM instance pofile to assign to each control plane replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#iam_instance_profile GoogleContainerAwsCluster#iam_instance_profile}

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The list of subnets where control plane replicas will run.

A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#subnet_ids GoogleContainerAwsCluster#subnet_ids}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.version"></a>

- *Type:* str

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#version GoogleContainerAwsCluster#version}

---

###### `instance_placement`<sup>Optional</sup> <a name="instance_placement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.instancePlacement"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a>

instance_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#instance_placement GoogleContainerAwsCluster#instance_placement}

---

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.instanceType"></a>

- *Type:* str

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#instance_type GoogleContainerAwsCluster#instance_type}

---

###### `main_volume`<sup>Optional</sup> <a name="main_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.mainVolume"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#main_volume GoogleContainerAwsCluster#main_volume}

---

###### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#proxy_config GoogleContainerAwsCluster#proxy_config}

---

###### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.rootVolume"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#root_volume GoogleContainerAwsCluster#root_volume}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Optional.

The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#security_group_ids GoogleContainerAwsCluster#security_group_ids}

---

###### `ssh_config`<sup>Optional</sup> <a name="ssh_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.sshConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#ssh_config GoogleContainerAwsCluster#ssh_config}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Optional.

A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#tags GoogleContainerAwsCluster#tags}

---

##### `put_fleet` <a name="put_fleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putFleet"></a>

```python
def put_fleet(
  project: str = None
) -> None
```

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putFleet.parameter.project"></a>

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#project GoogleContainerAwsCluster#project}

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putLoggingConfig"></a>

```python
def put_logging_config(
  component_config: GoogleContainerAwsClusterLoggingConfigComponentConfig = None
) -> None
```

###### `component_config`<sup>Optional</sup> <a name="component_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putLoggingConfig.parameter.componentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#component_config GoogleContainerAwsCluster#component_config}

---

##### `put_networking` <a name="put_networking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking"></a>

```python
def put_networking(
  pod_address_cidr_blocks: typing.List[str],
  service_address_cidr_blocks: typing.List[str],
  vpc_id: str,
  per_node_pool_sg_rules_disabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking.parameter.podAddressCidrBlocks"></a>

- *Type:* typing.List[str]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#pod_address_cidr_blocks GoogleContainerAwsCluster#pod_address_cidr_blocks}

---

###### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking.parameter.serviceAddressCidrBlocks"></a>

- *Type:* typing.List[str]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#service_address_cidr_blocks GoogleContainerAwsCluster#service_address_cidr_blocks}

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking.parameter.vpcId"></a>

- *Type:* str

The VPC associated with the cluster.

All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#vpc_id GoogleContainerAwsCluster#vpc_id}

---

###### `per_node_pool_sg_rules_disabled`<sup>Optional</sup> <a name="per_node_pool_sg_rules_disabled" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking.parameter.perNodePoolSgRulesDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the per node pool subnet security group rules on the control plane security group.

When set to true, you must also provide one or more security groups that ensure node pools are able to send requests to the control plane on TCP/443 and TCP/8132. Failure to do so may result in unavailable node pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#per_node_pool_sg_rules_disabled GoogleContainerAwsCluster#per_node_pool_sg_rules_disabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#create GoogleContainerAwsCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#delete GoogleContainerAwsCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#update GoogleContainerAwsCluster#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_binary_authorization` <a name="reset_binary_authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetBinaryAuthorization"></a>

```python
def reset_binary_authorization() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleContainerAwsCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleContainerAwsCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContainerAwsCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContainerAwsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAwsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference">GoogleContainerAwsClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference">GoogleContainerAwsClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference">GoogleContainerAwsClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference">GoogleContainerAwsClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference">GoogleContainerAwsClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference">GoogleContainerAwsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference">GoogleContainerAwsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.workloadIdentityConfig">workload_identity_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList">GoogleContainerAwsClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.authorizationInput">authorization_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.binaryAuthorizationInput">binary_authorization_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.controlPlaneInput">control_plane_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fleetInput">fleet_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.networkingInput">networking_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.authorization"></a>

```python
authorization: GoogleContainerAwsClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference">GoogleContainerAwsClusterAuthorizationOutputReference</a>

---

##### `binary_authorization`<sup>Required</sup> <a name="binary_authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.binaryAuthorization"></a>

```python
binary_authorization: GoogleContainerAwsClusterBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference">GoogleContainerAwsClusterBinaryAuthorizationOutputReference</a>

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.controlPlane"></a>

```python
control_plane: GoogleContainerAwsClusterControlPlaneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference">GoogleContainerAwsClusterControlPlaneOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fleet"></a>

```python
fleet: GoogleContainerAwsClusterFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference">GoogleContainerAwsClusterFleetOutputReference</a>

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.loggingConfig"></a>

```python
logging_config: GoogleContainerAwsClusterLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference">GoogleContainerAwsClusterLoggingConfigOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.networking"></a>

```python
networking: GoogleContainerAwsClusterNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference">GoogleContainerAwsClusterNetworkingOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.timeouts"></a>

```python
timeouts: GoogleContainerAwsClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference">GoogleContainerAwsClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workload_identity_config`<sup>Required</sup> <a name="workload_identity_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.workloadIdentityConfig"></a>

```python
workload_identity_config: GoogleContainerAwsClusterWorkloadIdentityConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList">GoogleContainerAwsClusterWorkloadIdentityConfigList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.authorizationInput"></a>

```python
authorization_input: GoogleContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a>

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `binary_authorization_input`<sup>Optional</sup> <a name="binary_authorization_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.binaryAuthorizationInput"></a>

```python
binary_authorization_input: GoogleContainerAwsClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a>

---

##### `control_plane_input`<sup>Optional</sup> <a name="control_plane_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.controlPlaneInput"></a>

```python
control_plane_input: GoogleContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fleet_input`<sup>Optional</sup> <a name="fleet_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fleetInput"></a>

```python
fleet_input: GoogleContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleContainerAwsClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networking_input`<sup>Optional</sup> <a name="networking_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.networkingInput"></a>

```python
networking_input: GoogleContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleContainerAwsClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAwsClusterAuthorization <a name="GoogleContainerAwsClusterAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization(
  admin_users: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminUsers]],
  admin_groups: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminGroups]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.property.adminUsers">admin_users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]]</code> | admin_users block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.property.adminGroups">admin_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]]</code> | admin_groups block. |

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.property.adminUsers"></a>

```python
admin_users: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#admin_users GoogleContainerAwsCluster#admin_users}

---

##### `admin_groups`<sup>Optional</sup> <a name="admin_groups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.property.adminGroups"></a>

```python
admin_groups: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]]

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#admin_groups GoogleContainerAwsCluster#admin_groups}

---

### GoogleContainerAwsClusterAuthorizationAdminGroups <a name="GoogleContainerAwsClusterAuthorizationAdminGroups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups(
  group: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups.property.group">group</a></code> | <code>str</code> | The name of the group, e.g. `my-group@domain.com`. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups.property.group"></a>

```python
group: str
```

- *Type:* str

The name of the group, e.g. `my-group@domain.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#group GoogleContainerAwsCluster#group}

---

### GoogleContainerAwsClusterAuthorizationAdminUsers <a name="GoogleContainerAwsClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers(
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>str</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers.property.username"></a>

```python
username: str
```

- *Type:* str

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#username GoogleContainerAwsCluster#username}

---

### GoogleContainerAwsClusterBinaryAuthorization <a name="GoogleContainerAwsClusterBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization(
  evaluation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE. |

---

##### `evaluation_mode`<sup>Optional</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#evaluation_mode GoogleContainerAwsCluster#evaluation_mode}

---

### GoogleContainerAwsClusterConfig <a name="GoogleContainerAwsClusterConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: GoogleContainerAwsClusterAuthorization,
  aws_region: str,
  control_plane: GoogleContainerAwsClusterControlPlane,
  fleet: GoogleContainerAwsClusterFleet,
  location: str,
  name: str,
  networking: GoogleContainerAwsClusterNetworking,
  annotations: typing.Mapping[str] = None,
  binary_authorization: GoogleContainerAwsClusterBinaryAuthorization = None,
  description: str = None,
  id: str = None,
  logging_config: GoogleContainerAwsClusterLoggingConfig = None,
  project: str = None,
  timeouts: GoogleContainerAwsClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS region where the cluster runs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.description">description</a></code> | <code>str</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#id GoogleContainerAwsCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.authorization"></a>

```python
authorization: GoogleContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#authorization GoogleContainerAwsCluster#authorization}

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS region where the cluster runs.

Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#aws_region GoogleContainerAwsCluster#aws_region}

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.controlPlane"></a>

```python
control_plane: GoogleContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#control_plane GoogleContainerAwsCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.fleet"></a>

```python
fleet: GoogleContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#fleet GoogleContainerAwsCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#location GoogleContainerAwsCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#name GoogleContainerAwsCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.networking"></a>

```python
networking: GoogleContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#networking GoogleContainerAwsCluster#networking}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#annotations GoogleContainerAwsCluster#annotations}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.binaryAuthorization"></a>

```python
binary_authorization: GoogleContainerAwsClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#binary_authorization GoogleContainerAwsCluster#binary_authorization}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#description GoogleContainerAwsCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#id GoogleContainerAwsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.loggingConfig"></a>

```python
logging_config: GoogleContainerAwsClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#logging_config GoogleContainerAwsCluster#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#project GoogleContainerAwsCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.timeouts"></a>

```python
timeouts: GoogleContainerAwsClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#timeouts GoogleContainerAwsCluster#timeouts}

---

### GoogleContainerAwsClusterControlPlane <a name="GoogleContainerAwsClusterControlPlane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane(
  aws_services_authentication: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication,
  config_encryption: GoogleContainerAwsClusterControlPlaneConfigEncryption,
  database_encryption: GoogleContainerAwsClusterControlPlaneDatabaseEncryption,
  iam_instance_profile: str,
  subnet_ids: typing.List[str],
  version: str,
  instance_placement: GoogleContainerAwsClusterControlPlaneInstancePlacement = None,
  instance_type: str = None,
  main_volume: GoogleContainerAwsClusterControlPlaneMainVolume = None,
  proxy_config: GoogleContainerAwsClusterControlPlaneProxyConfig = None,
  root_volume: GoogleContainerAwsClusterControlPlaneRootVolume = None,
  security_group_ids: typing.List[str] = None,
  ssh_config: GoogleContainerAwsClusterControlPlaneSshConfig = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.awsServicesAuthentication">aws_services_authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | aws_services_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.configEncryption">config_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.databaseEncryption">database_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | The name of the AWS IAM instance pofile to assign to each control plane replica. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The list of subnets where control plane replicas will run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.version">version</a></code> | <code>str</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling . |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.instancePlacement">instance_placement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a></code> | instance_placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.instanceType">instance_type</a></code> | <code>str</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.mainVolume">main_volume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `aws_services_authentication`<sup>Required</sup> <a name="aws_services_authentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.awsServicesAuthentication"></a>

```python
aws_services_authentication: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

aws_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#aws_services_authentication GoogleContainerAwsCluster#aws_services_authentication}

---

##### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.configEncryption"></a>

```python
config_encryption: GoogleContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#config_encryption GoogleContainerAwsCluster#config_encryption}

---

##### `database_encryption`<sup>Required</sup> <a name="database_encryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.databaseEncryption"></a>

```python
database_encryption: GoogleContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#database_encryption GoogleContainerAwsCluster#database_encryption}

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

The name of the AWS IAM instance pofile to assign to each control plane replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#iam_instance_profile GoogleContainerAwsCluster#iam_instance_profile}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of subnets where control plane replicas will run.

A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#subnet_ids GoogleContainerAwsCluster#subnet_ids}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.version"></a>

```python
version: str
```

- *Type:* str

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#version GoogleContainerAwsCluster#version}

---

##### `instance_placement`<sup>Optional</sup> <a name="instance_placement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.instancePlacement"></a>

```python
instance_placement: GoogleContainerAwsClusterControlPlaneInstancePlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a>

instance_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#instance_placement GoogleContainerAwsCluster#instance_placement}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#instance_type GoogleContainerAwsCluster#instance_type}

---

##### `main_volume`<sup>Optional</sup> <a name="main_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.mainVolume"></a>

```python
main_volume: GoogleContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#main_volume GoogleContainerAwsCluster#main_volume}

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.proxyConfig"></a>

```python
proxy_config: GoogleContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#proxy_config GoogleContainerAwsCluster#proxy_config}

---

##### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.rootVolume"></a>

```python
root_volume: GoogleContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#root_volume GoogleContainerAwsCluster#root_volume}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#security_group_ids GoogleContainerAwsCluster#security_group_ids}

---

##### `ssh_config`<sup>Optional</sup> <a name="ssh_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.sshConfig"></a>

```python
ssh_config: GoogleContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#ssh_config GoogleContainerAwsCluster#ssh_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#tags GoogleContainerAwsCluster#tags}

---

### GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication <a name="GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication(
  role_arn: str,
  role_session_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName">role_session_name</a></code> | <code>str</code> | Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#role_arn GoogleContainerAwsCluster#role_arn}

---

##### `role_session_name`<sup>Optional</sup> <a name="role_session_name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName"></a>

```python
role_session_name: str
```

- *Type:* str

Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#role_session_name GoogleContainerAwsCluster#role_session_name}

---

### GoogleContainerAwsClusterControlPlaneConfigEncryption <a name="GoogleContainerAwsClusterControlPlaneConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the AWS KMS key used to encrypt cluster configuration. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the AWS KMS key used to encrypt cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

### GoogleContainerAwsClusterControlPlaneDatabaseEncryption <a name="GoogleContainerAwsClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the AWS KMS key used to encrypt cluster secrets. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the AWS KMS key used to encrypt cluster secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

### GoogleContainerAwsClusterControlPlaneInstancePlacement <a name="GoogleContainerAwsClusterControlPlaneInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement(
  tenancy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement.property.tenancy">tenancy</a></code> | <code>str</code> | The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST. |

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#tenancy GoogleContainerAwsCluster#tenancy}

---

### GoogleContainerAwsClusterControlPlaneMainVolume <a name="GoogleContainerAwsClusterControlPlaneMainVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.volumeType">volume_type</a></code> | <code>str</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#iops GoogleContainerAwsCluster#iops}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

##### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#size_gib GoogleContainerAwsCluster#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#throughput GoogleContainerAwsCluster#throughput}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#volume_type GoogleContainerAwsCluster#volume_type}

---

### GoogleContainerAwsClusterControlPlaneProxyConfig <a name="GoogleContainerAwsClusterControlPlaneProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig(
  secret_arn: str,
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.property.secretVersion">secret_version</a></code> | <code>str</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#secret_arn GoogleContainerAwsCluster#secret_arn}

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#secret_version GoogleContainerAwsCluster#secret_version}

---

### GoogleContainerAwsClusterControlPlaneRootVolume <a name="GoogleContainerAwsClusterControlPlaneRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.volumeType">volume_type</a></code> | <code>str</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#iops GoogleContainerAwsCluster#iops}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

##### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#size_gib GoogleContainerAwsCluster#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#throughput GoogleContainerAwsCluster#throughput}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#volume_type GoogleContainerAwsCluster#volume_type}

---

### GoogleContainerAwsClusterControlPlaneSshConfig <a name="GoogleContainerAwsClusterControlPlaneSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig(
  ec2_key_pair: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair">ec2_key_pair</a></code> | <code>str</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair"></a>

```python
ec2_key_pair: str
```

- *Type:* str

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#ec2_key_pair GoogleContainerAwsCluster#ec2_key_pair}

---

### GoogleContainerAwsClusterFleet <a name="GoogleContainerAwsClusterFleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterFleet(
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet.property.project">project</a></code> | <code>str</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet.property.project"></a>

```python
project: str
```

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#project GoogleContainerAwsCluster#project}

---

### GoogleContainerAwsClusterLoggingConfig <a name="GoogleContainerAwsClusterLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig(
  component_config: GoogleContainerAwsClusterLoggingConfigComponentConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig.property.componentConfig">component_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `component_config`<sup>Optional</sup> <a name="component_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig.property.componentConfig"></a>

```python
component_config: GoogleContainerAwsClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#component_config GoogleContainerAwsCluster#component_config}

---

### GoogleContainerAwsClusterLoggingConfigComponentConfig <a name="GoogleContainerAwsClusterLoggingConfigComponentConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig(
  enable_components: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig.property.enableComponents">enable_components</a></code> | <code>typing.List[str]</code> | Components of the logging configuration to be enabled. |

---

##### `enable_components`<sup>Optional</sup> <a name="enable_components" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```python
enable_components: typing.List[str]
```

- *Type:* typing.List[str]

Components of the logging configuration to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#enable_components GoogleContainerAwsCluster#enable_components}

---

### GoogleContainerAwsClusterNetworking <a name="GoogleContainerAwsClusterNetworking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterNetworking(
  pod_address_cidr_blocks: typing.List[str],
  service_address_cidr_blocks: typing.List[str],
  vpc_id: str,
  per_node_pool_sg_rules_disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.podAddressCidrBlocks">pod_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.serviceAddressCidrBlocks">service_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.vpcId">vpc_id</a></code> | <code>str</code> | The VPC associated with the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled">per_node_pool_sg_rules_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the per node pool subnet security group rules on the control plane security group. |

---

##### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.podAddressCidrBlocks"></a>

```python
pod_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#pod_address_cidr_blocks GoogleContainerAwsCluster#pod_address_cidr_blocks}

---

##### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.serviceAddressCidrBlocks"></a>

```python
service_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#service_address_cidr_blocks GoogleContainerAwsCluster#service_address_cidr_blocks}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The VPC associated with the cluster.

All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#vpc_id GoogleContainerAwsCluster#vpc_id}

---

##### `per_node_pool_sg_rules_disabled`<sup>Optional</sup> <a name="per_node_pool_sg_rules_disabled" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled"></a>

```python
per_node_pool_sg_rules_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the per node pool subnet security group rules on the control plane security group.

When set to true, you must also provide one or more security groups that ensure node pools are able to send requests to the control plane on TCP/443 and TCP/8132. Failure to do so may result in unavailable node pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#per_node_pool_sg_rules_disabled GoogleContainerAwsCluster#per_node_pool_sg_rules_disabled}

---

### GoogleContainerAwsClusterTimeouts <a name="GoogleContainerAwsClusterTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#create GoogleContainerAwsCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#delete GoogleContainerAwsCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#update GoogleContainerAwsCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#create GoogleContainerAwsCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#delete GoogleContainerAwsCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#update GoogleContainerAwsCluster#update}.

---

### GoogleContainerAwsClusterWorkloadIdentityConfig <a name="GoogleContainerAwsClusterWorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAwsClusterAuthorizationAdminGroupsList <a name="GoogleContainerAwsClusterAuthorizationAdminGroupsList" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]]

---


### GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference <a name="GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAwsClusterAuthorizationAdminGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]

---


### GoogleContainerAwsClusterAuthorizationAdminUsersList <a name="GoogleContainerAwsClusterAuthorizationAdminUsersList" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]]

---


### GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference <a name="GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAwsClusterAuthorizationAdminUsers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]

---


### GoogleContainerAwsClusterAuthorizationOutputReference <a name="GoogleContainerAwsClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminGroups">put_admin_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminUsers">put_admin_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resetAdminGroups">reset_admin_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_groups` <a name="put_admin_groups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminGroups"></a>

```python
def put_admin_groups(
  value: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]]

---

##### `put_admin_users` <a name="put_admin_users" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminUsers"></a>

```python
def put_admin_users(
  value: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]]

---

##### `reset_admin_groups` <a name="reset_admin_groups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resetAdminGroups"></a>

```python
def reset_admin_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminGroups">admin_groups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList">GoogleContainerAwsClusterAuthorizationAdminGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminUsers">admin_users</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList">GoogleContainerAwsClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminGroupsInput">admin_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput">admin_users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_groups`<sup>Required</sup> <a name="admin_groups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminGroups"></a>

```python
admin_groups: GoogleContainerAwsClusterAuthorizationAdminGroupsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList">GoogleContainerAwsClusterAuthorizationAdminGroupsList</a>

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminUsers"></a>

```python
admin_users: GoogleContainerAwsClusterAuthorizationAdminUsersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList">GoogleContainerAwsClusterAuthorizationAdminUsersList</a>

---

##### `admin_groups_input`<sup>Optional</sup> <a name="admin_groups_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```python
admin_groups_input: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>]]

---

##### `admin_users_input`<sup>Optional</sup> <a name="admin_users_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```python
admin_users_input: typing.Union[IResolvable, typing.List[GoogleContainerAwsClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a>

---


### GoogleContainerAwsClusterBinaryAuthorizationOutputReference <a name="GoogleContainerAwsClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resetEvaluationMode">reset_evaluation_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_mode` <a name="reset_evaluation_mode" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```python
def reset_evaluation_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_mode_input`<sup>Optional</sup> <a name="evaluation_mode_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```python
evaluation_mode_input: str
```

- *Type:* str

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a>

---


### GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference <a name="GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName">reset_role_session_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_session_name` <a name="reset_role_session_name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName"></a>

```python
def reset_role_session_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput">role_session_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName">role_session_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_session_name_input`<sup>Optional</sup> <a name="role_session_name_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput"></a>

```python
role_session_name_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_session_name`<sup>Required</sup> <a name="role_session_name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName"></a>

```python
role_session_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---


### GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference <a name="GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a>

---


### GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference <a name="GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a>

---


### GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference <a name="GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resetTenancy">reset_tenancy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resetTenancy"></a>

```python
def reset_tenancy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlaneInstancePlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a>

---


### GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference <a name="GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib">reset_size_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_size_gib` <a name="reset_size_gib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```python
def reset_size_gib() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `size_gib_input`<sup>Optional</sup> <a name="size_gib_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```python
size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `size_gib`<sup>Required</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a>

---


### GoogleContainerAwsClusterControlPlaneOutputReference <a name="GoogleContainerAwsClusterControlPlaneOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication">put_aws_services_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putConfigEncryption">put_config_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption">put_database_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putInstancePlacement">put_instance_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume">put_main_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putProxyConfig">put_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume">put_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putSshConfig">put_ssh_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetInstancePlacement">reset_instance_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetMainVolume">reset_main_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetProxyConfig">reset_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetRootVolume">reset_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetSshConfig">reset_ssh_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_services_authentication` <a name="put_aws_services_authentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication"></a>

```python
def put_aws_services_authentication(
  role_arn: str,
  role_session_name: str = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#role_arn GoogleContainerAwsCluster#role_arn}

---

###### `role_session_name`<sup>Optional</sup> <a name="role_session_name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication.parameter.roleSessionName"></a>

- *Type:* str

Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#role_session_name GoogleContainerAwsCluster#role_session_name}

---

##### `put_config_encryption` <a name="put_config_encryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putConfigEncryption"></a>

```python
def put_config_encryption(
  kms_key_arn: str
) -> None
```

###### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putConfigEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the AWS KMS key used to encrypt cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

##### `put_database_encryption` <a name="put_database_encryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```python
def put_database_encryption(
  kms_key_arn: str
) -> None
```

###### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the AWS KMS key used to encrypt cluster secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

##### `put_instance_placement` <a name="put_instance_placement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putInstancePlacement"></a>

```python
def put_instance_placement(
  tenancy: str = None
) -> None
```

###### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putInstancePlacement.parameter.tenancy"></a>

- *Type:* str

The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#tenancy GoogleContainerAwsCluster#tenancy}

---

##### `put_main_volume` <a name="put_main_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume"></a>

```python
def put_main_volume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#iops GoogleContainerAwsCluster#iops}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.kmsKeyArn"></a>

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

###### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.sizeGib"></a>

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#size_gib GoogleContainerAwsCluster#size_gib}

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#throughput GoogleContainerAwsCluster#throughput}

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.volumeType"></a>

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#volume_type GoogleContainerAwsCluster#volume_type}

---

##### `put_proxy_config` <a name="put_proxy_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putProxyConfig"></a>

```python
def put_proxy_config(
  secret_arn: str,
  secret_version: str
) -> None
```

###### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putProxyConfig.parameter.secretArn"></a>

- *Type:* str

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#secret_arn GoogleContainerAwsCluster#secret_arn}

---

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putProxyConfig.parameter.secretVersion"></a>

- *Type:* str

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#secret_version GoogleContainerAwsCluster#secret_version}

---

##### `put_root_volume` <a name="put_root_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume"></a>

```python
def put_root_volume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#iops GoogleContainerAwsCluster#iops}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.kmsKeyArn"></a>

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

###### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.sizeGib"></a>

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#size_gib GoogleContainerAwsCluster#size_gib}

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#throughput GoogleContainerAwsCluster#throughput}

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.volumeType"></a>

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#volume_type GoogleContainerAwsCluster#volume_type}

---

##### `put_ssh_config` <a name="put_ssh_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putSshConfig"></a>

```python
def put_ssh_config(
  ec2_key_pair: str
) -> None
```

###### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putSshConfig.parameter.ec2KeyPair"></a>

- *Type:* str

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#ec2_key_pair GoogleContainerAwsCluster#ec2_key_pair}

---

##### `reset_instance_placement` <a name="reset_instance_placement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetInstancePlacement"></a>

```python
def reset_instance_placement() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_main_volume` <a name="reset_main_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetMainVolume"></a>

```python
def reset_main_volume() -> None
```

##### `reset_proxy_config` <a name="reset_proxy_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetProxyConfig"></a>

```python
def reset_proxy_config() -> None
```

##### `reset_root_volume` <a name="reset_root_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetRootVolume"></a>

```python
def reset_root_volume() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_ssh_config` <a name="reset_ssh_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetSshConfig"></a>

```python
def reset_ssh_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication">aws_services_authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.configEncryption">config_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference">GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption">database_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instancePlacement">instance_placement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference">GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.mainVolume">main_volume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference">GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference">GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference">GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference">GoogleContainerAwsClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput">aws_services_authentication_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput">config_encryption_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput">database_encryption_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instancePlacementInput">instance_placement_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput">main_volume_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput">proxy_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput">root_volume_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput">ssh_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_services_authentication`<sup>Required</sup> <a name="aws_services_authentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication"></a>

```python
aws_services_authentication: GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a>

---

##### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.configEncryption"></a>

```python
config_encryption: GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference">GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a>

---

##### `database_encryption`<sup>Required</sup> <a name="database_encryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```python
database_encryption: GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `instance_placement`<sup>Required</sup> <a name="instance_placement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instancePlacement"></a>

```python
instance_placement: GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference">GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference</a>

---

##### `main_volume`<sup>Required</sup> <a name="main_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.mainVolume"></a>

```python
main_volume: GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference">GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference</a>

---

##### `proxy_config`<sup>Required</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.proxyConfig"></a>

```python
proxy_config: GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference">GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference</a>

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.rootVolume"></a>

```python
root_volume: GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference">GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference</a>

---

##### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.sshConfig"></a>

```python
ssh_config: GoogleContainerAwsClusterControlPlaneSshConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference">GoogleContainerAwsClusterControlPlaneSshConfigOutputReference</a>

---

##### `aws_services_authentication_input`<sup>Optional</sup> <a name="aws_services_authentication_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput"></a>

```python
aws_services_authentication_input: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `config_encryption_input`<sup>Optional</sup> <a name="config_encryption_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput"></a>

```python
config_encryption_input: GoogleContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `database_encryption_input`<sup>Optional</sup> <a name="database_encryption_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```python
database_encryption_input: GoogleContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `instance_placement_input`<sup>Optional</sup> <a name="instance_placement_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instancePlacementInput"></a>

```python
instance_placement_input: GoogleContainerAwsClusterControlPlaneInstancePlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a>

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `main_volume_input`<sup>Optional</sup> <a name="main_volume_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```python
main_volume_input: GoogleContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a>

---

##### `proxy_config_input`<sup>Optional</sup> <a name="proxy_config_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```python
proxy_config_input: GoogleContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```python
root_volume_input: GoogleContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a>

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_config_input`<sup>Optional</sup> <a name="ssh_config_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```python
ssh_config_input: GoogleContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a>

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a>

---


### GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference <a name="GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a>

---


### GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference <a name="GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib">reset_size_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_size_gib` <a name="reset_size_gib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```python
def reset_size_gib() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `size_gib_input`<sup>Optional</sup> <a name="size_gib_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```python
size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `size_gib`<sup>Required</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a>

---


### GoogleContainerAwsClusterControlPlaneSshConfigOutputReference <a name="GoogleContainerAwsClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput">ec2_key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair">ec2_key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ec2_key_pair_input`<sup>Optional</sup> <a name="ec2_key_pair_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput"></a>

```python
ec2_key_pair_input: str
```

- *Type:* str

---

##### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair"></a>

```python
ec2_key_pair: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a>

---


### GoogleContainerAwsClusterFleetOutputReference <a name="GoogleContainerAwsClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a>

---


### GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference <a name="GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">reset_enable_components</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_components` <a name="reset_enable_components" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```python
def reset_enable_components() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">enable_components_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">enable_components</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_components_input`<sup>Optional</sup> <a name="enable_components_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```python
enable_components_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_components`<sup>Required</sup> <a name="enable_components" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```python
enable_components: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a>

---


### GoogleContainerAwsClusterLoggingConfigOutputReference <a name="GoogleContainerAwsClusterLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.putComponentConfig">put_component_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resetComponentConfig">reset_component_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_component_config` <a name="put_component_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.putComponentConfig"></a>

```python
def put_component_config(
  enable_components: typing.List[str] = None
) -> None
```

###### `enable_components`<sup>Optional</sup> <a name="enable_components" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.putComponentConfig.parameter.enableComponents"></a>

- *Type:* typing.List[str]

Components of the logging configuration to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_container_aws_cluster#enable_components GoogleContainerAwsCluster#enable_components}

---

##### `reset_component_config` <a name="reset_component_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```python
def reset_component_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.componentConfig">component_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.componentConfigInput">component_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_config`<sup>Required</sup> <a name="component_config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.componentConfig"></a>

```python
component_config: GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `component_config_input`<sup>Optional</sup> <a name="component_config_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```python
component_config_input: GoogleContainerAwsClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a>

---


### GoogleContainerAwsClusterNetworkingOutputReference <a name="GoogleContainerAwsClusterNetworkingOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled">reset_per_node_pool_sg_rules_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_per_node_pool_sg_rules_disabled` <a name="reset_per_node_pool_sg_rules_disabled" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled"></a>

```python
def reset_per_node_pool_sg_rules_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput">per_node_pool_sg_rules_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">pod_address_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">service_address_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled">per_node_pool_sg_rules_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks">pod_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">service_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `per_node_pool_sg_rules_disabled_input`<sup>Optional</sup> <a name="per_node_pool_sg_rules_disabled_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput"></a>

```python
per_node_pool_sg_rules_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pod_address_cidr_blocks_input`<sup>Optional</sup> <a name="pod_address_cidr_blocks_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```python
pod_address_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_address_cidr_blocks_input`<sup>Optional</sup> <a name="service_address_cidr_blocks_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```python
service_address_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `per_node_pool_sg_rules_disabled`<sup>Required</sup> <a name="per_node_pool_sg_rules_disabled" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled"></a>

```python
per_node_pool_sg_rules_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```python
pod_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```python
service_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a>

---


### GoogleContainerAwsClusterTimeoutsOutputReference <a name="GoogleContainerAwsClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAwsClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>]

---


### GoogleContainerAwsClusterWorkloadIdentityConfigList <a name="GoogleContainerAwsClusterWorkloadIdentityConfigList" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference <a name="GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_aws_cluster

googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workload_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig">GoogleContainerAwsClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `workload_pool`<sup>Required</sup> <a name="workload_pool" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```python
workload_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAwsClusterWorkloadIdentityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig">GoogleContainerAwsClusterWorkloadIdentityConfig</a>

---



