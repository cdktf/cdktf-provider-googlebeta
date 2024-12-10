# `googleContainerAttachedCluster` Submodule <a name="`googleContainerAttachedCluster` Submodule" id="@cdktf/provider-google-beta.googleContainerAttachedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAttachedCluster <a name="GoogleContainerAttachedCluster" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster google_container_attached_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distribution: str,
  fleet: GoogleContainerAttachedClusterFleet,
  location: str,
  name: str,
  oidc_config: GoogleContainerAttachedClusterOidcConfig,
  platform_version: str,
  annotations: typing.Mapping[str] = None,
  authorization: GoogleContainerAttachedClusterAuthorization = None,
  binary_authorization: GoogleContainerAttachedClusterBinaryAuthorization = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  logging_config: GoogleContainerAttachedClusterLoggingConfig = None,
  monitoring_config: GoogleContainerAttachedClusterMonitoringConfig = None,
  project: str = None,
  proxy_config: GoogleContainerAttachedClusterProxyConfig = None,
  security_posture_config: GoogleContainerAttachedClusterSecurityPostureConfig = None,
  timeouts: GoogleContainerAttachedClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.distribution">distribution</a></code> | <code>str</code> | The Kubernetes distribution of the underlying attached cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.platformVersion">platform_version</a></code> | <code>str</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.securityPostureConfig">security_posture_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | security_posture_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.distribution"></a>

- *Type:* str

The Kubernetes distribution of the underlying attached cluster.

Supported values:
"eks", "aks", "generic". The generic distribution provides the ability to register
or migrate any CNCF conformant cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#distribution GoogleContainerAttachedCluster#distribution}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#fleet GoogleContainerAttachedCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#location GoogleContainerAttachedCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.name"></a>

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

##### `oidc_config`<sup>Required</sup> <a name="oidc_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.oidcConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#oidc_config GoogleContainerAttachedCluster#oidc_config}

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.platformVersion"></a>

- *Type:* str

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#platform_version GoogleContainerAttachedCluster#platform_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#annotations GoogleContainerAttachedCluster#annotations}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#authorization GoogleContainerAttachedCluster#authorization}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#binary_authorization GoogleContainerAttachedCluster#binary_authorization}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#deletion_policy GoogleContainerAttachedCluster#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.description"></a>

- *Type:* str

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#description GoogleContainerAttachedCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#logging_config GoogleContainerAttachedCluster#logging_config}

---

##### `monitoring_config`<sup>Optional</sup> <a name="monitoring_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.monitoringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#monitoring_config GoogleContainerAttachedCluster#monitoring_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}.

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#proxy_config GoogleContainerAttachedCluster#proxy_config}

---

##### `security_posture_config`<sup>Optional</sup> <a name="security_posture_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.securityPostureConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#security_posture_config GoogleContainerAttachedCluster#security_posture_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#timeouts GoogleContainerAttachedCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization">put_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet">put_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig">put_monitoring_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig">put_oidc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig">put_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig">put_security_posture_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetBinaryAuthorization">reset_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetMonitoringConfig">reset_monitoring_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProxyConfig">reset_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetSecurityPostureConfig">reset_security_posture_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization"></a>

```python
def put_authorization(
  admin_groups: typing.List[str] = None,
  admin_users: typing.List[str] = None
) -> None
```

###### `admin_groups`<sup>Optional</sup> <a name="admin_groups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization.parameter.adminGroups"></a>

- *Type:* typing.List[str]

Groups that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the groups. Up to ten admin groups can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#admin_groups GoogleContainerAttachedCluster#admin_groups}

---

###### `admin_users`<sup>Optional</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization.parameter.adminUsers"></a>

- *Type:* typing.List[str]

Users that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the users. Up to ten admin users can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#admin_users GoogleContainerAttachedCluster#admin_users}

---

##### `put_binary_authorization` <a name="put_binary_authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization"></a>

```python
def put_binary_authorization(
  evaluation_mode: str = None
) -> None
```

###### `evaluation_mode`<sup>Optional</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization.parameter.evaluationMode"></a>

- *Type:* str

Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#evaluation_mode GoogleContainerAttachedCluster#evaluation_mode}

---

##### `put_fleet` <a name="put_fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet"></a>

```python
def put_fleet(
  project: str
) -> None
```

###### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet.parameter.project"></a>

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig"></a>

```python
def put_logging_config(
  component_config: GoogleContainerAttachedClusterLoggingConfigComponentConfig = None
) -> None
```

###### `component_config`<sup>Optional</sup> <a name="component_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig.parameter.componentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#component_config GoogleContainerAttachedCluster#component_config}

---

##### `put_monitoring_config` <a name="put_monitoring_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig"></a>

```python
def put_monitoring_config(
  managed_prometheus_config: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig = None
) -> None
```

###### `managed_prometheus_config`<sup>Optional</sup> <a name="managed_prometheus_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig.parameter.managedPrometheusConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

managed_prometheus_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#managed_prometheus_config GoogleContainerAttachedCluster#managed_prometheus_config}

---

##### `put_oidc_config` <a name="put_oidc_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig"></a>

```python
def put_oidc_config(
  issuer_url: str,
  jwks: str = None
) -> None
```

###### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig.parameter.issuerUrl"></a>

- *Type:* str

A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#issuer_url GoogleContainerAttachedCluster#issuer_url}

---

###### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig.parameter.jwks"></a>

- *Type:* str

OIDC verification keys in JWKS format (RFC 7517).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#jwks GoogleContainerAttachedCluster#jwks}

---

##### `put_proxy_config` <a name="put_proxy_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig"></a>

```python
def put_proxy_config(
  kubernetes_secret: GoogleContainerAttachedClusterProxyConfigKubernetesSecret = None
) -> None
```

###### `kubernetes_secret`<sup>Optional</sup> <a name="kubernetes_secret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig.parameter.kubernetesSecret"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

kubernetes_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#kubernetes_secret GoogleContainerAttachedCluster#kubernetes_secret}

---

##### `put_security_posture_config` <a name="put_security_posture_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig"></a>

```python
def put_security_posture_config(
  vulnerability_mode: str
) -> None
```

###### `vulnerability_mode`<sup>Required</sup> <a name="vulnerability_mode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig.parameter.vulnerabilityMode"></a>

- *Type:* str

Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#vulnerability_mode GoogleContainerAttachedCluster#vulnerability_mode}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#create GoogleContainerAttachedCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#delete GoogleContainerAttachedCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#update GoogleContainerAttachedCluster#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_binary_authorization` <a name="reset_binary_authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetBinaryAuthorization"></a>

```python
def reset_binary_authorization() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_monitoring_config` <a name="reset_monitoring_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetMonitoringConfig"></a>

```python
def reset_monitoring_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_proxy_config` <a name="reset_proxy_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProxyConfig"></a>

```python
def reset_proxy_config() -> None
```

##### `reset_security_posture_config` <a name="reset_security_posture_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetSecurityPostureConfig"></a>

```python
def reset_security_posture_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleContainerAttachedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleContainerAttachedCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContainerAttachedCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContainerAttachedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAttachedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference">GoogleContainerAttachedClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference">GoogleContainerAttachedClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.clusterRegion">cluster_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList">GoogleContainerAttachedClusterErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference">GoogleContainerAttachedClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference">GoogleContainerAttachedClusterOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference">GoogleContainerAttachedClusterProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfig">security_posture_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference">GoogleContainerAttachedClusterSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference">GoogleContainerAttachedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.workloadIdentityConfig">workload_identity_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList">GoogleContainerAttachedClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorizationInput">authorization_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorizationInput">binary_authorization_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distributionInput">distribution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleetInput">fleet_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfigInput">monitoring_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfigInput">oidc_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfigInput">proxy_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfigInput">security_posture_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distribution">distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorization"></a>

```python
authorization: GoogleContainerAttachedClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference">GoogleContainerAttachedClusterAuthorizationOutputReference</a>

---

##### `binary_authorization`<sup>Required</sup> <a name="binary_authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorization"></a>

```python
binary_authorization: GoogleContainerAttachedClusterBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference">GoogleContainerAttachedClusterBinaryAuthorizationOutputReference</a>

---

##### `cluster_region`<sup>Required</sup> <a name="cluster_region" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.clusterRegion"></a>

```python
cluster_region: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.errors"></a>

```python
errors: GoogleContainerAttachedClusterErrorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList">GoogleContainerAttachedClusterErrorsList</a>

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleet"></a>

```python
fleet: GoogleContainerAttachedClusterFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference">GoogleContainerAttachedClusterFleetOutputReference</a>

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfig"></a>

```python
logging_config: GoogleContainerAttachedClusterLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigOutputReference</a>

---

##### `monitoring_config`<sup>Required</sup> <a name="monitoring_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfig"></a>

```python
monitoring_config: GoogleContainerAttachedClusterMonitoringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigOutputReference</a>

---

##### `oidc_config`<sup>Required</sup> <a name="oidc_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfig"></a>

```python
oidc_config: GoogleContainerAttachedClusterOidcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference">GoogleContainerAttachedClusterOidcConfigOutputReference</a>

---

##### `proxy_config`<sup>Required</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfig"></a>

```python
proxy_config: GoogleContainerAttachedClusterProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference">GoogleContainerAttachedClusterProxyConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `security_posture_config`<sup>Required</sup> <a name="security_posture_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfig"></a>

```python
security_posture_config: GoogleContainerAttachedClusterSecurityPostureConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference">GoogleContainerAttachedClusterSecurityPostureConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeouts"></a>

```python
timeouts: GoogleContainerAttachedClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference">GoogleContainerAttachedClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workload_identity_config`<sup>Required</sup> <a name="workload_identity_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.workloadIdentityConfig"></a>

```python
workload_identity_config: GoogleContainerAttachedClusterWorkloadIdentityConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList">GoogleContainerAttachedClusterWorkloadIdentityConfigList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorizationInput"></a>

```python
authorization_input: GoogleContainerAttachedClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

---

##### `binary_authorization_input`<sup>Optional</sup> <a name="binary_authorization_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorizationInput"></a>

```python
binary_authorization_input: GoogleContainerAttachedClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distribution_input`<sup>Optional</sup> <a name="distribution_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distributionInput"></a>

```python
distribution_input: str
```

- *Type:* str

---

##### `fleet_input`<sup>Optional</sup> <a name="fleet_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleetInput"></a>

```python
fleet_input: GoogleContainerAttachedClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleContainerAttachedClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

---

##### `monitoring_config_input`<sup>Optional</sup> <a name="monitoring_config_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfigInput"></a>

```python
monitoring_config_input: GoogleContainerAttachedClusterMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oidc_config_input`<sup>Optional</sup> <a name="oidc_config_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfigInput"></a>

```python
oidc_config_input: GoogleContainerAttachedClusterOidcConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proxy_config_input`<sup>Optional</sup> <a name="proxy_config_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfigInput"></a>

```python
proxy_config_input: GoogleContainerAttachedClusterProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

---

##### `security_posture_config_input`<sup>Optional</sup> <a name="security_posture_config_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfigInput"></a>

```python
security_posture_config_input: GoogleContainerAttachedClusterSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleContainerAttachedClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAttachedClusterAuthorization <a name="GoogleContainerAttachedClusterAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization(
  admin_groups: typing.List[str] = None,
  admin_users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminGroups">admin_groups</a></code> | <code>typing.List[str]</code> | Groups that can perform operations as a cluster admin. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | Users that can perform operations as a cluster admin. |

---

##### `admin_groups`<sup>Optional</sup> <a name="admin_groups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminGroups"></a>

```python
admin_groups: typing.List[str]
```

- *Type:* typing.List[str]

Groups that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the groups. Up to ten admin groups can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#admin_groups GoogleContainerAttachedCluster#admin_groups}

---

##### `admin_users`<sup>Optional</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminUsers"></a>

```python
admin_users: typing.List[str]
```

- *Type:* typing.List[str]

Users that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the users. Up to ten admin users can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#admin_users GoogleContainerAttachedCluster#admin_users}

---

### GoogleContainerAttachedClusterBinaryAuthorization <a name="GoogleContainerAttachedClusterBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization(
  evaluation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]. |

---

##### `evaluation_mode`<sup>Optional</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#evaluation_mode GoogleContainerAttachedCluster#evaluation_mode}

---

### GoogleContainerAttachedClusterConfig <a name="GoogleContainerAttachedClusterConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distribution: str,
  fleet: GoogleContainerAttachedClusterFleet,
  location: str,
  name: str,
  oidc_config: GoogleContainerAttachedClusterOidcConfig,
  platform_version: str,
  annotations: typing.Mapping[str] = None,
  authorization: GoogleContainerAttachedClusterAuthorization = None,
  binary_authorization: GoogleContainerAttachedClusterBinaryAuthorization = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  logging_config: GoogleContainerAttachedClusterLoggingConfig = None,
  monitoring_config: GoogleContainerAttachedClusterMonitoringConfig = None,
  project: str = None,
  proxy_config: GoogleContainerAttachedClusterProxyConfig = None,
  security_posture_config: GoogleContainerAttachedClusterSecurityPostureConfig = None,
  timeouts: GoogleContainerAttachedClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.distribution">distribution</a></code> | <code>str</code> | The Kubernetes distribution of the underlying attached cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.platformVersion">platform_version</a></code> | <code>str</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.description">description</a></code> | <code>str</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.securityPostureConfig">security_posture_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | security_posture_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

The Kubernetes distribution of the underlying attached cluster.

Supported values:
"eks", "aks", "generic". The generic distribution provides the ability to register
or migrate any CNCF conformant cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#distribution GoogleContainerAttachedCluster#distribution}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.fleet"></a>

```python
fleet: GoogleContainerAttachedClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#fleet GoogleContainerAttachedCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#location GoogleContainerAttachedCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

##### `oidc_config`<sup>Required</sup> <a name="oidc_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.oidcConfig"></a>

```python
oidc_config: GoogleContainerAttachedClusterOidcConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#oidc_config GoogleContainerAttachedCluster#oidc_config}

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#platform_version GoogleContainerAttachedCluster#platform_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#annotations GoogleContainerAttachedCluster#annotations}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.authorization"></a>

```python
authorization: GoogleContainerAttachedClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#authorization GoogleContainerAttachedCluster#authorization}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.binaryAuthorization"></a>

```python
binary_authorization: GoogleContainerAttachedClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#binary_authorization GoogleContainerAttachedCluster#binary_authorization}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#deletion_policy GoogleContainerAttachedCluster#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#description GoogleContainerAttachedCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.loggingConfig"></a>

```python
logging_config: GoogleContainerAttachedClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#logging_config GoogleContainerAttachedCluster#logging_config}

---

##### `monitoring_config`<sup>Optional</sup> <a name="monitoring_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.monitoringConfig"></a>

```python
monitoring_config: GoogleContainerAttachedClusterMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#monitoring_config GoogleContainerAttachedCluster#monitoring_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}.

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.proxyConfig"></a>

```python
proxy_config: GoogleContainerAttachedClusterProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#proxy_config GoogleContainerAttachedCluster#proxy_config}

---

##### `security_posture_config`<sup>Optional</sup> <a name="security_posture_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.securityPostureConfig"></a>

```python
security_posture_config: GoogleContainerAttachedClusterSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#security_posture_config GoogleContainerAttachedCluster#security_posture_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.timeouts"></a>

```python
timeouts: GoogleContainerAttachedClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#timeouts GoogleContainerAttachedCluster#timeouts}

---

### GoogleContainerAttachedClusterErrors <a name="GoogleContainerAttachedClusterErrors" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors()
```


### GoogleContainerAttachedClusterFleet <a name="GoogleContainerAttachedClusterFleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet(
  project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.property.project">project</a></code> | <code>str</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.property.project"></a>

```python
project: str
```

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}

---

### GoogleContainerAttachedClusterLoggingConfig <a name="GoogleContainerAttachedClusterLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig(
  component_config: GoogleContainerAttachedClusterLoggingConfigComponentConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.property.componentConfig">component_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `component_config`<sup>Optional</sup> <a name="component_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.property.componentConfig"></a>

```python
component_config: GoogleContainerAttachedClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#component_config GoogleContainerAttachedCluster#component_config}

---

### GoogleContainerAttachedClusterLoggingConfigComponentConfig <a name="GoogleContainerAttachedClusterLoggingConfigComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig(
  enable_components: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents">enable_components</a></code> | <code>typing.List[str]</code> | The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]. |

---

##### `enable_components`<sup>Optional</sup> <a name="enable_components" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```python
enable_components: typing.List[str]
```

- *Type:* typing.List[str]

The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#enable_components GoogleContainerAttachedCluster#enable_components}

---

### GoogleContainerAttachedClusterMonitoringConfig <a name="GoogleContainerAttachedClusterMonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig(
  managed_prometheus_config: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig">managed_prometheus_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | managed_prometheus_config block. |

---

##### `managed_prometheus_config`<sup>Optional</sup> <a name="managed_prometheus_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig"></a>

```python
managed_prometheus_config: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

managed_prometheus_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#managed_prometheus_config GoogleContainerAttachedCluster#managed_prometheus_config}

---

### GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig <a name="GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Managed Collection. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Managed Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#enabled GoogleContainerAttachedCluster#enabled}

---

### GoogleContainerAttachedClusterOidcConfig <a name="GoogleContainerAttachedClusterOidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig(
  issuer_url: str,
  jwks: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.issuerUrl">issuer_url</a></code> | <code>str</code> | A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.jwks">jwks</a></code> | <code>str</code> | OIDC verification keys in JWKS format (RFC 7517). |

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#issuer_url GoogleContainerAttachedCluster#issuer_url}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.jwks"></a>

```python
jwks: str
```

- *Type:* str

OIDC verification keys in JWKS format (RFC 7517).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#jwks GoogleContainerAttachedCluster#jwks}

---

### GoogleContainerAttachedClusterProxyConfig <a name="GoogleContainerAttachedClusterProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig(
  kubernetes_secret: GoogleContainerAttachedClusterProxyConfigKubernetesSecret = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.property.kubernetesSecret">kubernetes_secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | kubernetes_secret block. |

---

##### `kubernetes_secret`<sup>Optional</sup> <a name="kubernetes_secret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.property.kubernetesSecret"></a>

```python
kubernetes_secret: GoogleContainerAttachedClusterProxyConfigKubernetesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

kubernetes_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#kubernetes_secret GoogleContainerAttachedCluster#kubernetes_secret}

---

### GoogleContainerAttachedClusterProxyConfigKubernetesSecret <a name="GoogleContainerAttachedClusterProxyConfigKubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret(
  name: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.name">name</a></code> | <code>str</code> | Name of the kubernetes secret containing the proxy config. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the kubernetes secret containing the proxy config. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#namespace GoogleContainerAttachedCluster#namespace}

---

### GoogleContainerAttachedClusterSecurityPostureConfig <a name="GoogleContainerAttachedClusterSecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig(
  vulnerability_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode">vulnerability_mode</a></code> | <code>str</code> | Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"]. |

---

##### `vulnerability_mode`<sup>Required</sup> <a name="vulnerability_mode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode"></a>

```python
vulnerability_mode: str
```

- *Type:* str

Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#vulnerability_mode GoogleContainerAttachedCluster#vulnerability_mode}

---

### GoogleContainerAttachedClusterTimeouts <a name="GoogleContainerAttachedClusterTimeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#create GoogleContainerAttachedCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#delete GoogleContainerAttachedCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#update GoogleContainerAttachedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#create GoogleContainerAttachedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#delete GoogleContainerAttachedCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#update GoogleContainerAttachedCluster#update}.

---

### GoogleContainerAttachedClusterWorkloadIdentityConfig <a name="GoogleContainerAttachedClusterWorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAttachedClusterAuthorizationOutputReference <a name="GoogleContainerAttachedClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups">reset_admin_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers">reset_admin_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_groups` <a name="reset_admin_groups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups"></a>

```python
def reset_admin_groups() -> None
```

##### `reset_admin_users` <a name="reset_admin_users" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers"></a>

```python
def reset_admin_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput">admin_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput">admin_users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroups">admin_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_groups_input`<sup>Optional</sup> <a name="admin_groups_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```python
admin_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_users_input`<sup>Optional</sup> <a name="admin_users_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```python
admin_users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_groups`<sup>Required</sup> <a name="admin_groups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroups"></a>

```python
admin_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsers"></a>

```python
admin_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

---


### GoogleContainerAttachedClusterBinaryAuthorizationOutputReference <a name="GoogleContainerAttachedClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode">reset_evaluation_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_mode` <a name="reset_evaluation_mode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```python
def reset_evaluation_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_mode_input`<sup>Optional</sup> <a name="evaluation_mode_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```python
evaluation_mode_input: str
```

- *Type:* str

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

---


### GoogleContainerAttachedClusterErrorsList <a name="GoogleContainerAttachedClusterErrorsList" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerAttachedClusterErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleContainerAttachedClusterErrorsOutputReference <a name="GoogleContainerAttachedClusterErrorsOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors">GoogleContainerAttachedClusterErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterErrors
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors">GoogleContainerAttachedClusterErrors</a>

---


### GoogleContainerAttachedClusterFleetOutputReference <a name="GoogleContainerAttachedClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

---


### GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference <a name="GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">reset_enable_components</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_components` <a name="reset_enable_components" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```python
def reset_enable_components() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">enable_components_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">enable_components</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_components_input`<sup>Optional</sup> <a name="enable_components_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```python
enable_components_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_components`<sup>Required</sup> <a name="enable_components" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```python
enable_components: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

---


### GoogleContainerAttachedClusterLoggingConfigOutputReference <a name="GoogleContainerAttachedClusterLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig">put_component_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig">reset_component_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_component_config` <a name="put_component_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig"></a>

```python
def put_component_config(
  enable_components: typing.List[str] = None
) -> None
```

###### `enable_components`<sup>Optional</sup> <a name="enable_components" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig.parameter.enableComponents"></a>

- *Type:* typing.List[str]

The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#enable_components GoogleContainerAttachedCluster#enable_components}

---

##### `reset_component_config` <a name="reset_component_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```python
def reset_component_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig">component_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput">component_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_config`<sup>Required</sup> <a name="component_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig"></a>

```python
component_config: GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `component_config_input`<sup>Optional</sup> <a name="component_config_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```python
component_config_input: GoogleContainerAttachedClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

---


### GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference <a name="GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---


### GoogleContainerAttachedClusterMonitoringConfigOutputReference <a name="GoogleContainerAttachedClusterMonitoringConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig">put_managed_prometheus_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig">reset_managed_prometheus_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_prometheus_config` <a name="put_managed_prometheus_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig"></a>

```python
def put_managed_prometheus_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Managed Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#enabled GoogleContainerAttachedCluster#enabled}

---

##### `reset_managed_prometheus_config` <a name="reset_managed_prometheus_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig"></a>

```python
def reset_managed_prometheus_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig">managed_prometheus_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput">managed_prometheus_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_prometheus_config`<sup>Required</sup> <a name="managed_prometheus_config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig"></a>

```python
managed_prometheus_config: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a>

---

##### `managed_prometheus_config_input`<sup>Optional</sup> <a name="managed_prometheus_config_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput"></a>

```python
managed_prometheus_config_input: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

---


### GoogleContainerAttachedClusterOidcConfigOutputReference <a name="GoogleContainerAttachedClusterOidcConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resetJwks">reset_jwks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_jwks` <a name="reset_jwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resetJwks"></a>

```python
def reset_jwks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwksInput">jwks_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwks">jwks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `jwks_input`<sup>Optional</sup> <a name="jwks_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwksInput"></a>

```python
jwks_input: str
```

- *Type:* str

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwks"></a>

```python
jwks: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterOidcConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

---


### GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference <a name="GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterProxyConfigKubernetesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

---


### GoogleContainerAttachedClusterProxyConfigOutputReference <a name="GoogleContainerAttachedClusterProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret">put_kubernetes_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret">reset_kubernetes_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kubernetes_secret` <a name="put_kubernetes_secret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret"></a>

```python
def put_kubernetes_secret(
  name: str,
  namespace: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret.parameter.name"></a>

- *Type:* str

Name of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret.parameter.namespace"></a>

- *Type:* str

Namespace of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_container_attached_cluster#namespace GoogleContainerAttachedCluster#namespace}

---

##### `reset_kubernetes_secret` <a name="reset_kubernetes_secret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret"></a>

```python
def reset_kubernetes_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret">kubernetes_secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput">kubernetes_secret_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kubernetes_secret`<sup>Required</sup> <a name="kubernetes_secret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret"></a>

```python
kubernetes_secret: GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a>

---

##### `kubernetes_secret_input`<sup>Optional</sup> <a name="kubernetes_secret_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput"></a>

```python
kubernetes_secret_input: GoogleContainerAttachedClusterProxyConfigKubernetesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

---


### GoogleContainerAttachedClusterSecurityPostureConfigOutputReference <a name="GoogleContainerAttachedClusterSecurityPostureConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">vulnerability_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode">vulnerability_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vulnerability_mode_input`<sup>Optional</sup> <a name="vulnerability_mode_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```python
vulnerability_mode_input: str
```

- *Type:* str

---

##### `vulnerability_mode`<sup>Required</sup> <a name="vulnerability_mode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```python
vulnerability_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

---


### GoogleContainerAttachedClusterTimeoutsOutputReference <a name="GoogleContainerAttachedClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAttachedClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>]

---


### GoogleContainerAttachedClusterWorkloadIdentityConfigList <a name="GoogleContainerAttachedClusterWorkloadIdentityConfigList" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference <a name="GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_attached_cluster

googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workload_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig">GoogleContainerAttachedClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `workload_pool`<sup>Required</sup> <a name="workload_pool" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```python
workload_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAttachedClusterWorkloadIdentityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig">GoogleContainerAttachedClusterWorkloadIdentityConfig</a>

---



